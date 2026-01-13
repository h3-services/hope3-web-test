import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Stack.css';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    function handleDragEnd(_, info) {
        const threshold = 50; // High sensitivity for easy swiping
        const velocityThreshold = 300;

        if (
            Math.abs(info.offset.x) > threshold ||
            Math.abs(info.velocity.x) > velocityThreshold ||
            Math.abs(info.offset.y) > threshold ||
            Math.abs(info.velocity.y) > velocityThreshold
        ) {
            onSendToBack();
        }

        // Always reset to center after drag interaction
        x.set(0);
        y.set(0);
    }

    if (disableDrag) {
        return (
            <motion.div className="card-rotate-disabled" style={{ x: 0, y: 0 }}>
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            className="card-rotate"
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: 'grabbing' }}
            onDragEnd={handleDragEnd}
        >
            {children}
        </motion.div>
    );
}

export default function Stack({
    randomRotation = false,
    sensitivity = 200,
    cards = [],
    animationConfig = { stiffness: 260, damping: 20 },
    sendToBackOnClick = false,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    mobileClickOnly = false,
    mobileBreakpoint = 768,
    onCardChange
}) {
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < mobileBreakpoint);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [mobileBreakpoint]);

    const shouldDisableDrag = mobileClickOnly && isMobile;
    const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

    const [stack, setStack] = useState(() => {
        // We want cards[0] to be on top, so it must be the LAST item in the sorted state array
        // We sort by ID descending so 7, 6, 5... 0 (0 is last = top)
        return [...cards].reverse().map((card) => ({
            id: card.id,
            content: card.content
        }));
    });

    // Handle prop-based reset ONLY if length changes
    useEffect(() => {
        if (cards.length) {
            const reversed = [...cards].reverse();
            setStack(reversed.map((card) => ({
                id: card.id,
                content: card.content
            })));
        }
    }, [cards.length]);

    const sendToBack = (id) => {
        setStack(prev => {
            const newStack = [...prev];
            const index = newStack.findIndex(card => card.id === id);
            if (index === -1) return prev;

            const [card] = newStack.splice(index, 1);
            newStack.unshift(card);
            return newStack;
        });
    };

    // Use effect to sync parent state when the top card changes
    useEffect(() => {
        if (onCardChange && stack.length > 0) {
            const topCard = stack[stack.length - 1];
            onCardChange(topCard.id);
        }
    }, [stack, onCardChange]);

    useEffect(() => {
        if (autoplay && stack.length > 1 && !isPaused) {
            const interval = setInterval(() => {
                const topCardId = stack[stack.length - 1].id;
                sendToBack(topCardId);
            }, autoplayDelay);

            return () => clearInterval(interval);
        }
    }, [autoplay, autoplayDelay, stack, isPaused]);

    return (
        <div
            className="stack-area"
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            {stack.map((card, index) => {
                const isTop = index === stack.length - 1;
                const rotation = randomRotation ? (index % 2 === 0 ? 2 : -2) : 0;

                return (
                    <motion.div
                        key={card.id}
                        className="stack-item"
                        style={{
                            zIndex: index,
                        }}
                        animate={{
                            // Create a fanned out look by shifting and rotating background cards
                            rotate: rotation + (stack.length - 1 - index) * 3, // Progressive rotation
                            scale: 1 - (stack.length - 1 - index) * 0.02,     // Subtle scaling
                            x: (stack.length - 1 - index) * 12,              // Shift to the right
                            y: (stack.length - 1 - index) * -2                // Slight upward shift for depth
                        }}
                        transition={animationConfig}
                        onClick={() => isTop && shouldEnableClick && sendToBack(card.id)}
                    >
                        <CardRotate
                            onSendToBack={() => sendToBack(card.id)}
                            sensitivity={sensitivity}
                            disableDrag={!isTop || shouldDisableDrag}
                        >
                            <div className="card-content-wrapper-no-style">
                                {card.content}
                            </div>
                        </CardRotate>
                    </motion.div>
                );
            })}
        </div>
    );
}
