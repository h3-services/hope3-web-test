import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../../styles/components/TargetCursor.css';

const TargetCursor = ({ targetSelector = '.cursor-target' }) => {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const cornersGroupRef = useRef(null);
    const cornersRef = useRef([]);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentTarget = useRef(null);
    const spinTween = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Comprehensive desktop detection
        const checkIsDesktop = () => {
            // Check for touch capability
            const hasTouch = 'ontouchstart' in window || 
                           navigator.maxTouchPoints > 0 || 
                           navigator.msMaxTouchPoints > 0;
            
            // Check screen size (desktop typically > 1024px)
            const isLargeScreen = window.innerWidth > 1024;
            
            // Check for pointer type (fine = mouse, coarse = touch)
            const hasFinePrecisionPointer = window.matchMedia('(pointer: fine)').matches;
            
            // Device is desktop if: large screen AND (has fine pointer OR no touch)
            return isLargeScreen && (hasFinePrecisionPointer || !hasTouch);
        };

        const desktop = checkIsDesktop();
        setIsDesktop(desktop);

        // If not desktop, don't initialize cursor
        if (!desktop) {
            // Ensure body class is removed
            document.body.classList.remove('custom-cursor-active');
            return;
        }

        // Add body class to hide default cursor
        document.body.classList.add('custom-cursor-active');

        const dot = dotRef.current;
        const cornersGroup = cornersGroupRef.current;
        const corners = cornersRef.current;

        if (!dot || !cornersGroup || corners.length !== 4) return;

        // Initialize spinning animation
        spinTween.current = gsap.to(cornersGroup, {
            rotation: 360,
            duration: 2,
            ease: 'none',
            repeat: -1,
            transformOrigin: 'center center'
        });

        // Mouse move handler
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Dot always follows mouse
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
                ease: 'none'
            });

            // Corners follow mouse if not targeted
            if (!currentTarget.current) {
                gsap.to(cornersGroup, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1, // Slight delay for smoother feel
                    ease: 'none'
                });
            }

            // Check for target elements
            const targetElements = document.querySelectorAll(targetSelector);
            let foundTarget = null;

            targetElements.forEach((target) => {
                const rect = target.getBoundingClientRect();
                if (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                ) {
                    foundTarget = target;
                }
            });

            if (foundTarget && foundTarget !== currentTarget.current) {
                activateTarget(foundTarget);
            } else if (!foundTarget && currentTarget.current) {
                deactivateTarget();
            }
        };

        // Activate target
        const activateTarget = (target) => {
            currentTarget.current = target;
            const rect = target.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            // Kill any pending tweens (prevents restart race condition)
            gsap.killTweensOf(corners);

            // Stop spinning
            if (spinTween.current) {
                spinTween.current.pause();
            }

            // Move corners group to center of target
            const centerX = rect.left + width / 2;
            const centerY = rect.top + height / 2;

            gsap.to(cornersGroup, {
                x: centerX,
                y: centerY,
                rotation: 0, // Ensure bracket is upright
                duration: 0.2,
                ease: 'power2.out'
            });

            // Animate corners to frame the target
            const cornerSize = 12;
            const offset = 0;

            gsap.to(corners[0], {
                x: -width / 2 - offset,
                y: -height / 2 - offset,
                rotation: 0,
                duration: 0.2,
                ease: 'power2.out'
            });

            gsap.to(corners[1], {
                x: width / 2 + offset,
                y: -height / 2 - offset,
                rotation: 0,
                duration: 0.2,
                ease: 'power2.out'
            });

            gsap.to(corners[2], {
                x: width / 2 + offset,
                y: height / 2 + offset,
                rotation: 0,
                duration: 0.2,
                ease: 'power2.out'
            });

            gsap.to(corners[3], {
                x: -width / 2 - offset,
                y: height / 2 + offset,
                rotation: 0,
                duration: 0.2,
                ease: 'power2.out'
            });
        };

        // Deactivate target
        const deactivateTarget = () => {
            currentTarget.current = null;

            // Reset corners to default position (matching CSS transforms)
            // CSS: TL(-150%, -150%), TR(50%, -150%), BR(50%, 50%), BL(-150%, 50%)
            // Size 12px: 150% = 18px, 50% = 6px
            corners.forEach((corner, index) => {
                const defaultPositions = [
                    { x: -18, y: -18 }, // TL
                    { x: 6, y: -18 },   // TR
                    { x: 6, y: 6 },     // BR
                    { x: -18, y: 6 }    // BL
                ];

                gsap.to(corner, {
                    x: defaultPositions[index].x,
                    y: defaultPositions[index].y,
                    rotation: 0, // Ensure rotation resets if used
                    duration: 0.2,
                    ease: 'power2.out',
                    onComplete: () => {
                        // Resume spinning after reset
                        if (index === 0 && spinTween.current) {
                            spinTween.current.restart();
                        }
                    }
                });
            });
        };

        // Mouse down/up handlers for click effect
        const handleMouseDown = () => {
            gsap.to([dot, cornersGroup], {
                scale: 0.8,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        const handleMouseUp = () => {
            gsap.to([dot, cornersGroup], {
                scale: 1,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Handle window resize to re-check desktop status
        const handleResize = () => {
            const stillDesktop = checkIsDesktop();
            if (stillDesktop !== desktop) {
                window.location.reload(); // Reload if device type changes
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('custom-cursor-active');

            if (spinTween.current) {
                spinTween.current.kill();
            }
        };
    }, [targetSelector]);

    // Don't render cursor elements on mobile/tablet
    if (!isDesktop) {
        return null;
    }

    return (
        <div className="target-cursor-wrapper" ref={cursorRef}>
            <div className="target-cursor-dot" ref={dotRef}></div>
            <div className="target-cursor-corners-group" ref={cornersGroupRef}>
                <div
                    className="target-cursor-corner corner-tl"
                    ref={(el) => (cornersRef.current[0] = el)}
                ></div>
                <div
                    className="target-cursor-corner corner-tr"
                    ref={(el) => (cornersRef.current[1] = el)}
                ></div>
                <div
                    className="target-cursor-corner corner-br"
                    ref={(el) => (cornersRef.current[2] = el)}
                ></div>
                <div
                    className="target-cursor-corner corner-bl"
                    ref={(el) => (cornersRef.current[3] = el)}
                ></div>
            </div>
        </div>
    );
};

export default TargetCursor;
