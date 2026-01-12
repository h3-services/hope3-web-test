import { useState, useEffect } from 'react'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaUsers } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import TargetCursor from '../components/TargetCursor'
import '../styles/newFooter.css'

const NewFooter = () => {
  const [showTeamPopup, setShowTeamPopup] = useState(false)

  const teamMembers = [
    { name: 'Biruntha', link: 'https://www.linkedin.com/in/biruntha-mageshwaran-226a95306/' },
    { name: 'Nivetha', link: 'https://www.linkedin.com/in/nivedha-k-706b03306' },
    { name: 'Beulah Francis', link: 'https://www.linkedin.com/in/beulah-francis-55a439349/' },
    { name: 'Mohamed Aarif', link: 'https://www.linkedin.com/in/mohammad-aarif-321369306/' },
    { name: 'siva kumar', link: 'https://www.linkedin.com/in/siva-kumar-370132138/' },
    { name: 'meiy Anna', link: 'https://www.linkedin.com/in/meiytx' }
  ]

  // Manage body class for cursor visibility
  useEffect(() => {
    if (showTeamPopup) {
      document.body.classList.add('custom-cursor-active')
    } else {
      document.body.classList.remove('custom-cursor-active')
    }
    return () => {
      document.body.classList.remove('custom-cursor-active')
    }
  }, [showTeamPopup])

  return (
    <div className="footer">
      <div className="footer-outer-box">
        <div className="footer-box">
          <div className="footer-left">
            <div className="footer-title">HOPE3 FOUNDATION</div><br></br>

            <div className="footer-address">
              Sammamish, WA - 98074
            </div>
            <a href="mailto:contact@hope3.org" className="footer-email">
              contact@hope3.org
            </a>
            <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://www.linkedin.com/company/hope3org/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.facebook.com/hope3org/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCbtzvET5Ev2spcIDWraFguA" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FaYoutube size={18} />
              </a>
              <a href="https://www.instagram.com/hope3org/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/hope3org" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
          <div className="footer-right" style={{ lineHeight: '1.2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px' }}>
            <div>
              <div className="footer-nonprofit" style={{ marginBottom: '0', fontSize: '14px' }}>
                US IRS 501(C)(3) Non-Profit Organization
              </div>
              <div className="footer-ein" style={{ marginBottom: '0', marginTop: '0', fontSize: '14px', fontWeight: 'normal' }}>
                ID: EIN 94-3184861
              </div>
            </div>
            <div className="footer-copyright" style={{ marginBottom: '0', marginTop: '0', fontSize: '14px' }}>
              © 2024 All Rights Reserved      |  Privacy Policy
            </div>
            <div
              className="footer-developed-by"
              style={{
                marginTop: '10px',
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
                className="footer-powered-link"
              >
                Powered By HOPE3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Target Cursor Animation */}
      {showTeamPopup && <TargetCursor targetSelector=".cursor-target" />}

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
              className="cursor-target"
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
                lineHeight: 1,
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <FaUsers size={20} color="#007bff" />
              HOPE3 Development Team
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
                    padding: '2px 0',
                    borderBottom: index < teamMembers.length - 1 ? '1px solid #f0f0f0' : 'none',
                  }}
                >
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '8px 12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      color: '#555',
                      fontSize: '0.9rem',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f7ff';
                      e.currentTarget.style.color = '#007bff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#555';
                    }}
                  >
                    <span style={{ color: '#007bff', fontSize: '1.2rem' }}>•</span>
                    {member.name}
                  </a>
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
