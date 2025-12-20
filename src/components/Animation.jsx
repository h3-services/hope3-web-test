import { useState, useEffect } from 'react';
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
  const stages = ['Schooling', 'Hope3 Gate', 'Classroom', 'College Life', 'Lab Work', 'Digital Skills', 'Graduation', 'Career Entry'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="animation-container">
      <div className="carousel">
        {images.map((img, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={index}
              className="image-wrapper"
              style={{
                transform: `translateX(${pos.x}px) scale(${pos.scale})`,
                opacity: pos.opacity,
                zIndex: pos.zIndex
              }}
            >
              <img src={img} alt={`Process ${index + 1}`} />
            </div>
          );
        })}
      </div>
      <div className="stage-card">
        <h3>{stages[currentIndex]}</h3>
      </div>
    </div>
  );
}

export default Animation;