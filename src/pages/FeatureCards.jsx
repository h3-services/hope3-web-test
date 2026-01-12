import '../styles/featureCards.css'
import img1 from '../assets/home/education.jpeg'
import img3 from '../assets/home/empowerment.jpeg'
import img2 from '../assets/home/enterpreneurship.jpeg'
import hope3Logo from '../assets/home/hope3_logo.png'

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