import { Link } from 'react-router-dom'
import '../../styles/spotlightSection.css'

const SpotlightSection = () => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const getImagePath = (name) => `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}news/${name}`

  const news = [
    {
      id: 1,
      type: "original",
      title: "Student placement at Google",
      date: "November 2025",
      description: "One of our students has been placed at Google as an AIML engineer and is now working in Mountain View, California—a proud milestone for the HOPE3 family.",
      size: "large",
      image: getImagePath("entrepreneurship.png")
    },
    {
      id: 8,
      type: "demo",
      title: "Global Alumni Meetup",
      date: "January 2026",
      description: "Join us for our first-ever virtual global alumni meetup. Connect with fellow Hope3 graduates working in top tech companies worldwide.",
      size: "medium"
    },
    {
      id: 2,
      type: "original",
      title: "HOPE3 Services Launched",
      date: "December 2025",
      description: "The HOPE3 team has launched a HOPE3 Services branch, providing students with real-time, hands-on project experience. Link to HOPE3 Services will be provided from HOPE3 Website. Stay tuned.",
      size: "medium"
    },
    {
      id: 3,
      type: "original",
      title: "Investment club for HOPE3 Students",
      date: "January 2026",
      description: "We have started an Investment Club for HOPE3 students and alumni to learn, collaborate, and grow together. A webinar was conducted by Mr. G Cholai Managing Director, Pacific Valley Financial Service, for the students.",
      size: "medium",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      type: "original",
      title: "Pre-Admissions for students",
      date: "January 2026",
      description: (
        <>
          Pre-admissions have officially begun for the upcoming academic year, 2026. You can apply at{" "}
          <Link to="/join-hope3" className="news-link" style={{ color: '#332EB2', textDecoration: 'underline', fontSize: '14px' }}>Join HOPE3</Link>
        </>
      ),
      size: "medium"
    },
    {
      id: 5,
      type: "demo",
      title: "Community Outreach Program",
      date: "February 2026",
      description: "Expanding our reach to local villages, providing essential resources and educational support to underprivileged families. Our volunteers spent the weekend conducting workshops.Connect with fellow Hope3 graduates working in top tech companies worldwide.",
      size: "medium",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      type: "demo",
      title: "Tech Innovation Award",
      date: "March 2026",
      description: "Hope3 students have secured the first prize in the Regional Tech Innovation Contest for their AI-driven project on sustainable agriculture practices.",
      size: "medium",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      type: "demo",
      title: "Annual Scholarship Announcement",
      date: "April 2026",
      description: "Applications for the Hope3 Annual Scholarship are now open.",
      size: "medium",
      image: "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&q=80&w=800"
    }
  ]

  return (
    <section className="spotlight-section">
      <div className="spotlight-container">
        <div className="rounded-2xl p-6 mb-12 text-center">
          <h2 className="cinzel-section-header">
            Highlights & Happenings
          </h2>
          <p style={{ fontSize: '14px', marginTop: '10px', color: '#555' }}>
            We are proud of each and every student have passed through HOPE3. We would like to highlight some of our major milestones and success stories.
          </p>
        </div>

        <div className="spotlight-grid">
          {news.map((item) => (
            <div
              key={item.id}
              className={`news-card card-${item.size} ${item.image ? 'has-image' : ''}`}
            >
              <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
                {item.type === 'original' && (
                  <span style={{
                    backgroundColor: '#e0f2fe',
                    color: '#0e7490',
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    border: '1px solid #bae6fd'
                  }}>
                    Original
                  </span>
                )}
                {item.type === 'demo' && (
                  <span style={{
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    border: '1px solid #e5e7eb'
                  }}>
                    Demo
                  </span>
                )}
              </div>
              {item.image && (
                <div className="news-card-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-card-image" />
                </div>
              )}
              <div className="news-card-content">
                <div className="news-card-date">
                  {item.date}
                </div>
                <h3 className="news-card-title">
                  {item.title}
                </h3>
                <div className="news-card-description">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpotlightSection
