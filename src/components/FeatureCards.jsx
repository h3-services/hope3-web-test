const FeatureCards = () => {

  const features = [
    {
      id: "education",
      title: "Education",
      image: "/assets/img1.png",
      details: [
        "	Provide financial assistance towards an accredited College degree",
        " Engage in immersive learning through collaborative clubs, events and workshops",
        " Gain real-world insights from industry expert interactions"
      ]
    },
    {
      id: "empowerment",
      title: "Empowerment", 
      image: "/assets/img3.png",
      details: [
        "	Uncover personal strengths and master essential soft skills",
        "	Take on leadership roles and be part of key initiatives",
        "	Build English proficiency for professional communication"
      ]
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      image: "/assets/imd2.png", 
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
              className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-4 shadow-lg border-0 h-full flex flex-col max-w-xs mx-auto"
            >
              <div className="h-28 w-full mb-3">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white">
                {feature.title}
              </h3>
              
              <div className="space-y-1.5 mb-3 flex-1">
                {feature.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <p className="text-white text-xs leading-relaxed">
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