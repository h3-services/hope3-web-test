import { useState } from 'react'
import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react'
// import '../styles/NewFooter.css'

const NewFooter = () => {
  const [showTeamPopup, setShowTeamPopup] = useState(false)

  const teamMembers = [
    'Mohammed Aarif',
    'Beulah',
    'Nivedha',
    'Biruntha',
    'Mei Palaniappan',
    'Shivakumar'
  ]

  return (
    <div className="footer">
      <div className="footer-outer-box">
        <div className="footer-box">
          <div className="footer-left" style={{ lineHeight: '1.2' }}>
            <div className="footer-title" style={{ marginBottom: '0' }}>HOPE3 FOUNDATION</div>
            <div className="footer-address" style={{ marginBottom: '0', marginTop: '0' }}>
              Sammamish, WA - 98074
            </div>
            <a href="mailto:contact@hope3.org" className="footer-email" style={{ marginTop: '0' }}>
              contact@hope3.org
            </a>
            <div className="social-links" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <a href="https://www.linkedin.com/company/hope3org/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <Linkedin size={18} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.facebook.com/hope3org/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <Facebook size={18} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.youtube.com/channel/UCbtzvET5Ev2spcIDWraFguA" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" fill="currentColor" />
                  <path d="M9.75 15.02s0-6 0-6l5.25 3-5.25 3z" fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/hope3org/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <Instagram size={18} strokeWidth={2.5} />
              </a>
              <a href="https://x.com/hope3org" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-right" style={{ lineHeight: '1.2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <div className="footer-nonprofit" style={{ marginBottom: '0', fontSize: '14px' }}>
                US IRS 501(C)(3) Non-Profit Organization
              </div>
              <div className="footer-ein" style={{ marginBottom: '0', marginTop: '0', fontSize: '14px', fontWeight: 'normal' }}>
                ID: EIN 94-3184861
              </div>
            </div>
            <div className="footer-copyright" style={{ marginBottom: '0', marginTop: '20px', fontSize: '14px' }}>
              © 2024 All Rights Reserved      |  Privacy Policy
            </div>
            <div
              className="footer-developed-by"
              style={{
                marginTop: '15px',
                fontSize: '0.25rem',
                textAlign: 'right'
              }}
            >
              <span
                onClick={() => setShowTeamPopup(!showTeamPopup)}
                style={{
                  color: '#007bff',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  textDecoration: 'underline',
                  fontSize: '12px'
                }}
              >
                Developed by HOPE3 Team
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Popup with Blurred Background */}
      {showTeamPopup && (
        <>
          {/* Backdrop with blur */}
          <div
            onClick={() => setShowTeamPopup(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              zIndex: 9998,
              animation: 'fadeIn 0.2s ease-out'
            }}
          />
          {/* Centered Popup */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: '16px',
              padding: '25px 35px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
              zIndex: 9999,
              minWidth: '280px',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowTeamPopup(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#999',
                lineHeight: 1
              }}
            >
              ×
            </button>
            <div style={{
              fontWeight: '600',
              color: '#333',
              marginBottom: '15px',
              fontSize: '1rem',
              borderBottom: '2px solid #007bff',
              paddingBottom: '10px',
              textAlign: 'center'
            }}>
              🚀 HOPE3 Development Team
            </div>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              textAlign: 'left'
            }}>
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  style={{
                    padding: '8px 0',
                    color: '#555',
                    fontSize: '0.9rem',
                    borderBottom: index < teamMembers.length - 1 ? '1px solid #f0f0f0' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{ color: '#007bff' }}>•</span>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default NewFooter
