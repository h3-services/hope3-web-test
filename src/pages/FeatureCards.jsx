import '../styles/featureCards.css'
import img1 from '../assets/education.jpeg'
import img3 from '../assets/empowerment.jpeg'
import img2 from '../assets/enterpreneurship.jpeg'
import hope3Logo from '../assets/hope3_logo.png'

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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl p-4 shadow-[0_15px_35px_rgba(0,_0,_0,_0.3)] border-0 h-full flex flex-col max-w-xs mx-auto transition-all duration-300 ease-in-out hover:shadow-[0_20px_45px_rgba(0,_0,_0,_0.4)] hover:scale-105 hover:-translate-y-2"
              style={{ backgroundColor: '#e8f5e8' }}
            >
              <div className="h-28 w-full mb-3">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-lg" />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-[#332EB2] font-kavoon">
                {feature.title}
              </h3>

              <div className="space-y-1.5 mb-3 flex-1">
                {feature.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <img src={hope3Logo} alt="bullet" className="w-3 h-3 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-black text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* <button className="text-red-500 font-medium text-sm">
                Read More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards