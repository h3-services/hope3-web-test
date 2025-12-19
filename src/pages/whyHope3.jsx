import { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import '../styles/whyhope3.css';
import headerImg from '../assets/college-background1.jpg';
import hope3Logo from '../assets/hope3.png';
import img1 from '../assets/education.jpeg';
import img2 from '../assets/empowerment.jpeg';
import img3 from '../assets/enterpreneurship.jpeg';
import img4 from '../assets/college-graduation-pictures.jpg';
import img5 from '../assets/education.jpeg';
import img6 from '../assets/empowerment.jpeg';
import img7 from '../assets/college-graduation-pictures.jpg';
import img8 from '../assets/enterpreneurship.jpeg';

const WhyHope3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll('.transform-image');
    let currentIndex = 0;

    function showNextImage() {
      images[currentIndex]?.classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex]?.classList.add('active');
      setActiveIndex(currentIndex + 1);
    }

    if (images.length > 0) {
      images[0].classList.add('active');
      const transformInterval = setInterval(showNextImage, 3000);
      return () => clearInterval(transformInterval);
    }
  }, []);
  const growthStages = [
    { 
      number: 1, 
      text: "Girl in front of a very small school building", 
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      alt: "Small school building"
    },
    { 
      number: 2, 
      text: "Word 'Learn' displayed clearly", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      alt: "Learn concept"
    },
    { 
      number: 3, 
      text: "Boy standing in front of an arch with HOPE3 logo", 
      image: hope3Logo,
      alt: "HOPE3 logo arch"
    },
    { 
      number: 4, 
      text: "Girl in front of a college building", 
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      alt: "College building"
    },
    { 
      number: 5, 
      text: "Girl doing lab work", 
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
      alt: "Lab work"
    },
    { 
      number: 6, 
      text: "Boy doing tech work using a laptop", 
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      alt: "Tech work with laptop"
    },
    { 
      number: 7, 
      text: "Girl graduating with cap and gown", 
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      alt: "Graduation ceremony"
    },
    { 
      number: 8, 
      text: "Boy and girl entering a high-rise building", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      alt: "High-rise building entrance"
    }
  ];

  const StageImage = ({ stage }) => (
    <img 
      src={stage.image} 
      alt={stage.alt}
      className="stage-img"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
  );

  const PlaceholderImage = ({ text }) => (
    <div className="placeholder-image" style={{ display: 'none' }}>
      <span>📷</span>
      <small>{text}</small>
    </div>
  );

  return (
    <div className="whyhope3-page">
      <Navbar />
      
      {/* Header Image */}
      <div className="header-image">
        <img src={headerImg} alt="Header" />
      </div>
      
      {/* Transformation Section */}
      <div className="transformation-section">
        {/* Left Column - Images */}
        <div className="left-column">
          <div className="transformation-container">
            <img src={img1} className="transform-image" id="img1" />
            <img src={img2} className="transform-image" id="img2" />
            <img src={img3} className="transform-image" id="img3" />
            <img src={img4} className="transform-image" id="img4" />
            <img src={img5} className="transform-image" id="img5" />
            <img src={img6} className="transform-image" id="img6" />
            <img src={img7} className="transform-image" id="img7" />
            <img src={img8} className="transform-image" id="img8" />
          </div>
        </div>
        
        {/* Center Column - Content */}
        <div className="center-column">
          <h3 className={activeIndex === 0 ? 'gradient-text active' : ''}>A Student's Journey of Change</h3>
          <p>Watch as students transform through education, from their first steps in school to successful careers.</p>
        </div>
        
        {/* Right Column - Text List */}
        <div className="right-column">
          <ul>
            <li className={activeIndex === 1 ? 'gradient-text active' : ''}>Schooling</li>
            <li className={activeIndex === 2 ? 'gradient-text active' : ''}>Hope3 Gate</li>
            <li className={activeIndex === 3 ? 'gradient-text active' : ''}>Classroom</li>
            <li className={activeIndex === 4 ? 'gradient-text active' : ''}>College Life</li>
            <li className={activeIndex === 5 ? 'gradient-text active' : ''}>Lab Work</li>
            <li className={activeIndex === 6 ? 'gradient-text active' : ''}>Digital Skills</li>
            <li className={activeIndex === 7 ? 'gradient-text active' : ''}>Graduation</li>
            <li className={activeIndex === 8 ? 'gradient-text active' : ''}>Career Entry</li>
          </ul>
        </div>
      </div>
      
      {/* Transformation Card Section */}
      <div className="transformation-card">
        <div className="card-content">
          <h3>The Power of Transformation</h3>
          <p>
            Every journey begins with a single step. At HOPE3, we witness incredible 
            transformations as students evolve from curious learners to confident leaders. 
            This visual journey represents the real-life progression of our students - 
            from their first day in school to achieving their career aspirations.
          </p>
          <div className="card-stats">
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Students Transformed</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Key Milestones</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Banner Section */}
      {/* <section className="hero-banner">
        <h1>Why HOPE3</h1>
      </section> */}

      {/* Mission/Vision Section */}
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
        
        <div className="animation-placeholder">
          <p>Animation component will be added here</p>
        </div>
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