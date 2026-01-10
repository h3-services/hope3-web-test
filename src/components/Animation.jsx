import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import '../styles/animation.css';
import image1 from '../assets/animation/image1.jpg';
import image2 from '../assets/animation/image2.jpg';
import image3 from '../assets/animation/image3.jpg';
import image4 from '../assets/animation/image4.jpg';
import image5 from '../assets/animation/image5.jpg';
import image6 from '../assets/animation/image6.jpg';
import image7 from '../assets/animation/image7.jpg';
import image8 from '../assets/animation/image8.jpg';

function Animation() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const stages = [
    'Identification',
    'Join HOPE3',
    'College Education',
    'Classroom Learning',
    'Immersive Parallel Education',
    'Internship Opportunities',
    'Graduation',
    'HOPE3 Promise'
  ];

  const descriptions = [
    'Identify students from underdeveloped villages, forest reserves, and refugee camps—not by their grades, but by their grit and desire to learn more.',
    'Student enters our HOPE3 residential program, a comprehensive program that covers their bachelors degree, accommodation, meals, healthcare and immersive parallel education.',
    'Student is admitted to an accredited college. HOPE3 pays for the college tuition and fees.',
    'Students attend college in the mornings studying towards a bachelors degree.',
    'After attending college in the mornings students engage in hands-on learning—coding, building apps and participating in internships. The immersive curriculum skips obsolete topics and focuses on relevance.',
    'The students are encouraged and recommended to work on internship opportunities with local businesses, enhancing their digital skills.',
    'The students graduate with employable skills. HOPE3 makes education truly transformative for students.',
    'The subtle promise by HOPE3 is visible in its results not just in placements, but in confidence, capability, and community impact. HOPE3 is quietly rewriting the narrative of what education can be.'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate index based on progress as the user scrolls through the 500vh track
  // Only active on desktop, disabled on mobile
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Skip scroll tracking on mobile - use arrows only
    if (isMobile) return;

    const stageCount = stages.length;
    // Map 0-1 progress to 0-7 index
    const newIndex = Math.min(
      Math.floor(latest * stageCount),
      stageCount - 1
    );

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  });

  const getPosition = (index) => {
    const centerIndex = currentIndex;
    const leftIndex = (centerIndex - 1 + images.length) % images.length;
    const rightIndex = (centerIndex + 1) % images.length;

    if (index === centerIndex) return { x: 0, scale: 1.2, opacity: 1, zIndex: 100 };
    if (index === rightIndex) return { x: 250, scale: 0.8, opacity: 0.7, zIndex: 50 };
    if (index === leftIndex) return { x: -250, scale: 0.8, opacity: 0.7, zIndex: 50 };

    return { x: 0, scale: 0.5, opacity: 0.3, zIndex: 10 };
  };

  return (
    <div className="scroll-track" ref={containerRef}>
      <div className="animation-container">
        <div className="section-title">
          <h2>How we do it</h2>
        </div>
        <div className="carousel">
          {/* Previous Arrow */}
          <button
            className="carousel-nav-arrow carousel-nav-arrow-left"
            onClick={() => {
              const newIndex = (currentIndex - 1 + images.length) % images.length;
              setCurrentIndex(newIndex);
            }}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {images.map((img, index) => {
            const pos = getPosition(index);
            return (
              <motion.div
                key={index}
                className="image-wrapper"
                animate={{
                  x: pos.x,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img src={img} alt={`Process ${index + 1}`} />
              </motion.div>
            );
          })}

          {/* Next Arrow */}
          <button
            className="carousel-nav-arrow carousel-nav-arrow-right"
            onClick={() => {
              const newIndex = (currentIndex + 1) % images.length;
              setCurrentIndex(newIndex);
            }}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
        <motion.div
          className="stage-card"
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{stages[currentIndex]}</h3>
          <p className="font-el-messiri">{descriptions[currentIndex]}</p>

          <button
            className="nav-arrow-btn"
            onClick={() => {
              if (containerRef.current) {
                const trackHeight = containerRef.current.clientHeight;
                const viewportHeight = window.innerHeight;
                const scrollableDistance = trackHeight - viewportHeight;
                const containerTop = containerRef.current.offsetTop;
                const stageCount = stages.length;

                if (currentIndex < stageCount - 1) {
                  // Calculate target scroll position for next index
                  // Move slightly into the next segment to ensure transition triggers
                  const targetIndex = currentIndex + 1;
                  const targetProgress = (targetIndex + 0.1) / stageCount;
                  const targetScrollY = containerTop + (targetProgress * scrollableDistance);

                  window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
                } else {
                  // Scroll back to start
                  window.scrollTo({ top: containerTop, behavior: 'smooth' });
                }
              }
            }}
            aria-label={currentIndex === stages.length - 1 ? "Scroll to top" : "Next slide"}
          >
            {currentIndex === stages.length - 1 ? (
              // Up Arrow
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
              </svg>
            ) : (
              // Down Arrow
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Animation;