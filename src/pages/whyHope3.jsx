import { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import '../styles/whyHope3.css';
import headerImg from '../assets/college-background1.jpg';
import img1 from '../assets/transformation/img1.jpeg';
import img2 from '../assets/transformation/img2.jpeg';
import img3 from '../assets/transformation/img3.jpeg';
import img4 from '../assets/transformation/img4.jpeg';
import img5 from '../assets/transformation/img5.jpeg';
import img6 from '../assets/transformation/img6.jpeg';
import img7 from '../assets/transformation/img7.jpeg';
import img8 from '../assets/transformation/img8.jpeg';
import Animation from '../components/Animation.jsx';

const WhyHope3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const journeyStages = [
    'Schooling',
    'Hope3 Gate', 
    'Classroom',
    'College Life',
    'Lab Work',
    'Digital Skills',
    'Graduation',
    'Career Entry'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="whyhope3-page">
      <Navbar />
      
      {/* Page Title */}
      <div className="page-title">
        <div className="container">
          <h1>Why HOPE3?</h1>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="transformation-section">
        {/* Left Column - Image Slideshow */}
        <div className="left-column">
          <div className="transformation-container">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                className={`transform-image ${index === activeIndex ? 'active' : ''}`}
                alt={`Transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Center Column - Content */}
        <div className="center-column">
          <h3 className={activeIndex === 0 ? 'gradient-text active' : ''}>
            A Student's Journey of Change
          </h3>
          <p>Watch as students transform through education, from their first steps in school to successful careers.</p>
        </div>
        
        {/* Right Column - Journey Stages */}
        <div className="right-column">
          <ul>
            {journeyStages.map((stage, index) => (
              <li 
                key={index}
                className={index === activeIndex ? 'gradient-text active' : ''}
              >
                {stage}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mission/Vision/Philosophy Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              HOPE3 is dedicated to transforming lives through education and opportunity. 
              We believe that every individual deserves access to quality education and 
              the chance to reach their full potential, regardless of their background 
              or circumstances.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              We envision a world where education serves as the great equalizer, 
              breaking down barriers and creating pathways to success for all. 
              Through our comprehensive approach, we aim to nurture not just academic 
              excellence, but also character, leadership, and social responsibility.
            </p>
            
            <h2>Our Philosophy</h2>
            <p>
              At HOPE3, we believe in the power of holistic development. Our philosophy 
              centers on three pillars: Hope (inspiring dreams), Opportunity (creating 
              pathways), and Progress (measuring impact). We understand that true 
              transformation happens when we address not just educational needs, but 
              also provide mentorship, life skills, and ongoing support throughout 
              each individual's journey.
            </p>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="how-we-do-it">
        <div className="section-title">
          <h2>How we do it</h2>
        </div>
        <Animation />
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-buttons">
          <button className="cta-btn">Apply to Join HOPE3</button>
          <button className="cta-btn">Volunteer with HOPE3</button>
        </div>
      </section>

      <NewFooter />
    </div>
  );
};

export default WhyHope3;