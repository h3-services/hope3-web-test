"use client"

import '../styles/spotlightSection.css'

const SpotlightSection = () => {
  const news = [
    {
      id: 1,
      title: "HOPE3 Launches New Entrepreneurship Program",
      date: "December 2024",
      description: "Empowering 100+ young entrepreneurs with mentorship and resources",
      link: "#"
    },
    {
      id: 2, 
      title: "Education Initiative Reaches 500 Students",
      date: "November 2024",
      description: "Our comprehensive education program expands to rural communities",
      link: "#"
    },
    {
      id: 3,
      title: "Women Empowerment Workshop Success",
      date: "October 2024", 
      description: "Building confidence and leadership skills among women",
      link: "#"
    },
    {
      id: 4,
      title: "Partnership with Local Universities",
      date: "September 2024",
      description: "Collaborating to enhance educational opportunities",
      link: "#"
    },
    {
      id: 5,
      title: "Innovation Hub Opens in Chennai",
      date: "August 2024",
      description: "New space for entrepreneurs and innovators to collaborate",
      link: "#"
    }
  ]

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-700 to-blue-600 rounded-2xl p-6 mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Spotlight & News
          </h2>
        </div>
        
        <div className="rounded-3xl p-8 shadow-lg" style={{backgroundColor: '#A0B6E6'}}>
          <div className="space-y-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="border-b border-white/20 last:border-b-0 pb-6 last:pb-0 cursor-pointer hover:bg-white/10 p-4 rounded-lg transition-colors duration-200"
                onClick={() => window.open(item.link, '_blank')}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-black hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm text-black whitespace-nowrap ml-4">
                    {item.date}
                  </span>
                </div>
                <p className="text-black">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection