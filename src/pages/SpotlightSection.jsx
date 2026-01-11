"use client"

import '../styles/spotlightSection.css'
import { Newspaper, Trophy, Zap, Handshake } from 'lucide-react'

const SpotlightSection = () => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const getImagePath = (name) => `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}news/${name}`

  const news = [
    {
      id: 1,
      title: "HOPE3 Launches New Entrepreneurship Program",
      date: "December 2024",
      description: "Empowering 100+ young entrepreneurs with mentorship and resources",
      link: "#",
      size: "large",
      image: getImagePath("entrepreneurship.png")
    },
    {
      id: 2,
      title: "Education Initiative Reaches 500 Students",
      date: "November 2024",
      description: "Our comprehensive education program expands to rural communities",
      link: "#",
      size: "medium",
      image: getImagePath("education.png")
    },
    {
      id: 3,
      title: "Women Empowerment Workshop Success",
      date: "October 2024",
      description: "Building confidence and leadership skills among women",
      link: "#",
      size: "small"
    },
    {
      id: 4,
      title: "Partnership with Local Universities",
      date: "September 2024",
      description: "Collaborating to enhance educational opportunities",
      link: "#",
      size: "large"
    },
    {
      id: 5,
      title: "Innovation Hub Opens in Chennai",
      date: "August 2024",
      description: "New space for entrepreneurs and innovators to collaborate",
      link: "#",
      size: "medium",
      image: getImagePath("innovation.png")
    }
  ]

  return (
    <section className="spotlight-section">
      <div className="spotlight-container">
        <h2 className="text-4xl font-bold text-black font-kdam text-center mb-12" style={{ color: '#333' }}>
          Spotlight & News
        </h2>

        <div className="spotlight-grid">
          {news.map((item) => (
            <div
              key={item.id}
              className={`news-card card-${item.size} ${item.image ? 'has-image' : ''}`}
            >
              {item.image && (
                <div className="news-card-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-card-image" />
                </div>
              )}
              {/* Keep contents simple to maintain old style padding/fonts */}
              <div className="news-card-content">
                <div className="news-card-date">
                  {item.date}
                </div>
                <h3 className="news-card-title">
                  {item.title}
                </h3>
                <p className="news-card-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection
