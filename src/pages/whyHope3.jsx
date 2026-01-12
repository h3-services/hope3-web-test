import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import '../styles/whyHope3.css';
import bannerImg from '../assets/whyHope3Banner.jpeg';
import Animation from '../components/Animation.jsx';
import { useNavigate } from 'react-router-dom';

const WhyHope3 = () => {
  const navigate = useNavigate();
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

      {/* Mission/Vision/Philosophy Section */}
      {/* Mission/Vision/Philosophy Section Removed */}

      {/* How We Do It Section */}
      <Animation />


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