import { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../layouts/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import NewFooter from '../layouts/Footer.jsx';
import '../styles/whyHope3.css';
import bannerImg from '../assets/whyHope3Banner.jpeg';
import Stack from '../components/common/Stack.jsx';
import image1 from '../assets/animation/image1.jpg';
import image2 from '../assets/animation/image2.jpg';
import image3 from '../assets/animation/image3.jpg';
import image4 from '../assets/animation/image4.jpg';
import image5 from '../assets/animation/image5.jpg';
import image6 from '../assets/animation/image6.jpg';
import image7 from '../assets/animation/image7.jpg';
import image8 from '../assets/animation/image8.jpg';

const WhyHope3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stages = [
    { title: 'Identification', img: image1, desc: 'Identify students from underdeveloped villages, forest reserves, and refugee camps—not by their grades, but by their grit and desire to learn more.' },
    { title: 'Join HOPE3', img: image2, desc: 'Student enters our HOPE3 residential program, a comprehensive program that covers their bachelors degree, accommodation, meals, healthcare and immersive parallel education.' },
    { title: 'College Education', img: image3, desc: 'Student is admitted to an accredited college. HOPE3 pays for the college tuition and fees.' },
    { title: 'Classroom Learning', img: image4, desc: 'Students attend college in the mornings studying towards a bachelors degree.' },
    { title: 'Immersive Parallel Education', img: image5, desc: 'After attending college in the mornings students engage in hands-on learning—coding, building apps and participating in internships. The immersive curriculum skips obsolete topics and focuses on relevance.' },
    { title: 'Internship Opportunities', img: image6, desc: 'The students are encouraged and recommended to work on internship opportunities with local businesses, enhancing their digital skills.' },
    { title: 'Graduation', img: image7, desc: 'The students graduate with employable skills. HOPE3 makes education truly transformative for students.' },
    { title: 'HOPE3 Promise', img: image8, desc: 'The subtle promise by HOPE3 is visible in its results not just in placements, but in confidence, capability, and community impact. HOPE3 is quietly rewriting the narrative of what education can be.' }
  ];

  // Stabilize the image cards so the stack doesn't reset its order on every refresh of activeIndex
  // Also reindexed so Identification (0) is on top
  const imageCards = useMemo(() => {
    return stages.map((stage, idx) => ({
      id: idx,
      content: <img src={stage.img} alt={stage.title} className="stack-card-image-only" draggable="false" />
    }));
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <div className="whyhope3-page">
      <Navbar />

      {/* Banner Section */}
      <div className="whyhope3-banner">
        <img src={bannerImg} alt="Why Hope3 Banner" className="banner-image" />
        <div className="banner-text-overlay">
          <p className="font-cinzel">
            This earth is filled with people who find joy in seeing the happiness of their fellow human beings.
            All that is needed to bring that out is a little love!
          </p>
        </div>
      </div>

      {/* Page Title */}
      <div className="container mx-auto mt-10 mb-0">
        <div className="rounded-2xl p-6 text-center">
          <h1 className="cinzel-section-header">Why HOPE3?</h1>
        </div>
      </div>

      {/* New Descriptive Passage */}
      <section className="whyhope3-description">
        <div className="container">
          <p>
            What does it take to make education truly transformative for students from socioeconomically challenged backgrounds?
            The answer is not just funding college degrees or offering coaching. It's about <strong>creating a parallel system—immersive,
              relevant, and relentlessly focused on building real-world capability.</strong> There is a gap in simply earning college degrees,
            especially from non-premier institutions, where students graduate with theoretical knowledge but little practical skill that translates to employability.
          </p>
          <p>
            There is a disconnect between college education and the <strong>need for parallel, immersive learning with one-on-one mentoring.</strong>
            They realized that the students who needed help most weren't the ones already topping their classes. They were the ones
            with untapped potential—students who hadn't been taught well, who didn't score high, but who had the hunger to learn.
            These were the <strong>"rough cut diamonds,"</strong> and HOPE3 set out to polish them.
          </p>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="how-we-do-it-stack py-10">
        <div className="container mx-auto text-center mb-10">
          <h2 className="cinzel-section-header">How we do it</h2>
        </div>

        <div className="stack-container-wrapper">
          <Stack
            cards={imageCards}
            randomRotation={true}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            sendToBackOnClick={true}
            onCardChange={(newIndex) => setActiveIndex(newIndex)}
          />

          <div className="content-navigation-wrapper">
            <button className="nav-arrow-btn prev" onClick={handlePrev}>
              <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
            </button>

            <motion.div
              className="content-card-below"
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{stages[activeIndex].title}</h3>
              <p>{stages[activeIndex].desc}</p>
            </motion.div>

            <button className="nav-arrow-btn next" onClick={handleNext}>
              <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-buttons">
          <button className="cta-btn" onClick={() => navigate('/join-hope3')}>Apply to Join HOPE3</button>
          <button className="cta-btn" onClick={() => navigate('/join-hope3#volunteer')}>Volunteer with HOPE3</button>
        </div>
      </section>

      <NewFooter />
    </div>
  );
};

export default WhyHope3;