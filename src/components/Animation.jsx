import { useRef, useState } from 'react';
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
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate index based on progress as the user scrolls through the 500vh track
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
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
        </motion.div>
      </div>
    </div>
  );
}

export default Animation;