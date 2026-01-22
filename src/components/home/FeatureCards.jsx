import '../../styles/featureCards.css'
import img1 from '../../assets/images/pages/home/education.jpeg'
import img3 from '../../assets/images/pages/home/empowerment.jpeg'
import img2 from '../../assets/images/pages/home/enterpreneurship.jpeg'
import hope3Logo from '../../assets/images/pages/home/hope3_logo.png'
import hope3Image from '../../assets/images/pages/home/hope3.png'

const FeatureCards = () => {

  const features = [
    {
      id: "education",
      title: "Education",
      image: img1,
      details: [
        "	Provide financial assistance towards an accredited College degree",
        " Engage in immersive learning through collaborative clubs, events and workshops",
        " Gain real-world insights from industry expert interactions"
      ]
    },
    {
      id: "empowerment",
      title: "Empowerment",
      image: img3,
      details: [
        "	Uncover personal strengths and master essential soft skills",
        "	Take on leadership roles and be part of key initiatives",
        "	Build English proficiency for professional communication"
      ]
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      image: img2,
      details: [
        "Test and refine startup concepts in practice",
        "Get exposure and receive expert guidance on business strategies",
        "Opportunity to pitch ideas directly to clients and investors"

      ]
    }
  ]

  return (
    <section className="feature-cards-section py-16 px-6">
      <div className="feature-cards-container mx-auto">
        <div className="max-w-4xl mx-auto text-left mb-12 px-4 flex items-start gap-2 hope3-content-container">
          <img src={hope3Image} alt="HOPE3" className="hope3-main-image" />
          <div className="hope3-text-content" style={{ marginLeft: '2cm' }}>
            <p className="text-gray-700 leading-relaxed mb-6 font-medium" style={{ fontSize: '16px' }}>
              HOPE3 Foundation started with the vision to empower earnest, circumstantially challenged students to realize their true potential through higher education, parallel immersive learning, one-on-one mentorship, and a powerful network of academic and industry partners.
            </p>
            <p className="text-blue-600 font-bold italic" style={{ fontSize: '18px' }}>
              The three pillars on which HOPE3 stands are Education, Empowerment and Entrepreneurship.
            </p>
          </div>
        </div>
        <div className="feature-cards-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card-modern"
            >
              <img src={feature.image} alt={feature.title} className="feature-card-bg-image" />
              <div className="feature-card-overlay">
                <div className="feature-card-content">
                  <h3 className="feature-card-title-modern">
                    {feature.title}
                  </h3>
                  <div className="feature-card-details-modern">
                    {feature.details.map((detail, index) => (
                      <div key={index} className={`feature-detail-item-modern ${index > 0 ? 'detail-extra' : ''}`}>
                        <img src={hope3Logo} alt="bullet" className="feature-bullet-modern" />
                        <p className="feature-text-modern">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default FeatureCards