import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import '../styles/whyHope3.css';
import bannerImg from '../assets/whyHope3Banner.jpeg';
import Animation from '../components/Animation.jsx';

const WhyHope3 = () => {
  return (
    <div className="whyhope3-page">
      <Navbar />

      {/* Banner Section */}
      <div className="whyhope3-banner">
        <img src={bannerImg} alt="Why Hope3 Banner" className="banner-image" />
        <div className="banner-text-overlay">
          <p className="font-jaini">
            This earth is filled with people who find joy in seeing the happiness of their fellow human beings.
            All that is needed to bring that out is a little love!
          </p>
        </div>
      </div>

      {/* Page Title */}
      <div className="page-title">
        <div className="container">
          <h1>Why HOPE3?</h1>
        </div>
      </div>

      {/* New Descriptive Passage */}
      <section className="whyhope3-description">
        <div className="container">
          <p>
            What does it take to make education truly transformative for students from socioeconomically challenged backgrounds?
            The answer is not just funding college degrees or offering coaching. It's about creating a parallel system—immersive,
            relevant, and relentlessly focused on building real-world capability. There is a gap in simply earning college degrees,
            especially from non-premier institutions, where students graduate with theoretical knowledge but little practical skill that translates to employability.
          </p>
          <p>
            There is a disconnect between college education and the need for parallel, immersive learning with one-on-one mentoring.
            They realized that the students who needed help most weren't the ones already topping their classes. They were the ones
            with untapped potential—students who hadn't been taught well, who didn't score high, but who had the hunger to learn.
            These were the "rough cut diamonds," and HOPE3 set out to polish them.
          </p>
        </div>
      </section>

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
      <Animation />


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