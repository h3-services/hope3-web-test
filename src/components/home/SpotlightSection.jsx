import { Link } from 'react-router-dom'
import '../../styles/spotlightSection.css'

const SpotlightSection = () => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const getImagePath = (name) => `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}news/${name}`

  const news = [
    {
      id: 1,
      title: "Student placement at Google",
      date: "November 2025",
      description: "One of our students has been placed at Google as an AIML engineer and is now working in Mountain View, California—a proud milestone for the HOPE3 family.",
      size: "large",
      image: getImagePath("entrepreneurship.png")
    },
    {
      id: 2,
      title: "HOPE3 Services Launched",
      date: "December 2025",
      description: "The HOPE3 team has launched a HOPE3 Services branch, providing students with real-time, hands-on project experience. Link to HOPE3 Services will be provided from HOPE3 Website. Stay tuned.",
      size: "medium"
    },
    {
      id: 3,
      title: "Investment club for HOPE3 Students",
      date: "January 2026",
      description: "We have started an Investment Club for HOPE3 students and alumni to learn, collaborate, and grow together. A webinar was conducted by Mr. G Cholai Managing Director, Pacific Valley Financial Service, for the students.",
      size: "medium"
    },
    {
      id: 4,
      title: "Pre-Admissions for students",
      date: "January 2026",
      description: (
        <>
          Pre-admissions have officially begun for the upcoming academic year, 2026. You can apply at{" "}
          <Link to="/join-hope3" className="news-link" style={{ color: '#332EB2', textDecoration: 'underline', fontSize: '14px' }}>Join HOPE3</Link>
        </>
      ),
      size: "medium"
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
