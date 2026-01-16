import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import '../styles/navbar.css';
import logo from '../assets/images/pages/home/hope3_logo.png';
import hope3 from '../assets/images/pages/home/hope3.png';
import usericon from '../assets/images/pages/home/img1.png';
import getInvolvedIcon from '../assets/images/pages/home/Gemini_Generated_Image_odj8ogodj8ogodj8.png';


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close popups/dropdowns on scroll
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setShowGetInvolved(false);
        setActiveDropdown(null);
        setClickedDropdown(null);
      }

      if (currentScrollY > 100) { // Only trigger after scrolling down a bit
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }
      } else {
        setIsVisible(true); // Always visible at the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [clickedDropdown, setClickedDropdown] = useState(null);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const getInvolvedRef = useRef(null);
  const dropdownRefs = useRef({});
  const mobileMenuRef = useRef(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if we have a clicked (frozen) dropdown
      if (clickedDropdown) {
        let clickedInsideAnyDropdown = false;
        Object.keys(dropdownRefs.current).forEach(key => {
          if (dropdownRefs.current[key] && dropdownRefs.current[key].contains(event.target)) {
            clickedInsideAnyDropdown = true;
          }
        });

        if (!clickedInsideAnyDropdown) {
          setActiveDropdown(null);
          setClickedDropdown(null);
        }
      }

      // Handle Get Involved dropdown
      if (getInvolvedRef.current && !getInvolvedRef.current.contains(event.target)) {
        setShowGetInvolved(false);
      }

      // Handle mobile menu - close when clicking outside
      if (mobileOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        // Check if click is not on hamburger button
        const hamburger = document.querySelector('.hamburger');
        if (hamburger && !hamburger.contains(event.target)) {
          setMobileOpen(false);
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clickedDropdown, mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const menuItems = {
    'Our Work': ['Our Students', 'Our Projects'],
    'Our Impact': ['Why HOPE3?', 'HOPE3 Journey'],
    'Services': ['Services'],
    'About Us': ['Leadership & Board', 'Financials', 'Media & FAQ']
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${mobileOpen ? 'mobile-active' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (!mobileOpen) setActiveDropdown(null); // Reset dropdowns when opening
          }}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {createPortal(
          <div className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
            <div className="mobile-menu-panel" ref={mobileMenuRef} onClick={(e) => e.stopPropagation()}>

              {/* Brand Header */}
              <header className="menu-header">
                <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="Close">
                  <span></span>
                  <span></span>
                </button>
              </header>

              {/* Main Navigation */}
              <main className="menu-body">
                <Link to="/" className="brand-center" onClick={() => { setMobileOpen(false); setActiveDropdown(null); }}>
                  <img src={logo} alt="HOPE3" className="brand-logo" />
                  <h2 className="brand-name">HOPE3</h2>
                </Link>
                <nav className="nav-list">
                  {Object.entries(menuItems).map(([section, items]) => (
                    <div key={section} className="nav-group">
                      {section === 'Services' ? (
                        <a
                          href="https://www.hope3.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {section}
                        </a>
                      ) : (
                        <>
                          <button
                            className={`nav-link has-children ${activeDropdown === section ? 'expanded' : ''}`}
                            onClick={() => setActiveDropdown(activeDropdown === section ? null : section)}
                          >
                            {section}
                          </button>
                          <div className={`nav-children ${activeDropdown === section ? 'show' : ''}`}>
                            {items.map((item) => (
                              <button
                                key={item}
                                className="nav-child"
                                onClick={() => {
                                  const routes = {
                                    'Our Students': '/our-students',
                                    'Our Projects': '/our-projects',
                                    'Why HOPE3?': '/why-hope3',
                                    'HOPE3 Journey': '/hope3-journey',
                                    'Leadership & Board': '/leadership-&-board',
                                    'Financials': '/financials',
                                    'Media & FAQ': '/media-faq'
                                  };
                                  if (routes[item]) navigate(routes[item]);
                                  setMobileOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </nav>
              </main>

              {/* Footer CTAs */}
              <footer className="menu-footer">
                <button className="btn-primary" onClick={() => { navigate('/donate'); setMobileOpen(false); }}>
                  Make a Gift
                </button>
              </footer>
            </div>
          </div>,
          document.body
        )}
        <div className="navbar-left">
          <Link to="/" className="desktop-logo-link">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="navbar-section" ref={el => dropdownRefs.current['Our Work'] = el}
            onMouseEnter={() => { if (clickedDropdown !== 'Our Work') setClickedDropdown(null); setActiveDropdown('Our Work'); }}
            onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button
              className={`section-title ${activeDropdown === 'Our Work' ? 'active' : ''}`}
              onClick={() => {
                if (clickedDropdown === 'Our Work') {
                  setActiveDropdown(null);
                  setClickedDropdown(null);
                } else {
                  setActiveDropdown('Our Work');
                  setClickedDropdown('Our Work');
                }
                setShowGetInvolved(false); // Close Get Involved dropdown
              }}
            >
              Our Work
            </button>
            {activeDropdown === 'Our Work' && (
              <div className="dropdown show">
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/our-students');
                  }}
                >
                  Our Students
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/our-projects');
                  }}
                >
                  Our Projects
                </button>
              </div>
            )}
          </div>
          <div className="navbar-section" ref={el => dropdownRefs.current['Our Impact'] = el}
            onMouseEnter={() => { if (clickedDropdown !== 'Our Impact') setClickedDropdown(null); setActiveDropdown('Our Impact'); }}
            onMouseLeave={() => !clickedDropdown && setTimeout(() => setActiveDropdown(null), 100)}>
            <button
              className={`section-title ${activeDropdown === 'Our Impact' ? 'active' : ''}`}
              onClick={() => {
                if (clickedDropdown === 'Our Impact') {
                  setActiveDropdown(null);
                  setClickedDropdown(null);
                } else {
                  setActiveDropdown('Our Impact');
                  setClickedDropdown('Our Impact');
                }
                setShowGetInvolved(false); // Close Get Involved dropdown
              }}
            >
              Our Impact
            </button>
            {activeDropdown === 'Our Impact' && (
              <div className="dropdown show"
                onMouseEnter={() => setActiveDropdown('Our Impact')}
                onMouseLeave={() => setTimeout(() => setActiveDropdown(null), 100)}>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("hope");
                    navigate('/why-hope3');
                  }}
                >
                  Why HOPE3?
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("hope3 journey");
                    navigate('/hope3-journey');
                  }}
                >
                  HOPE3 Journey
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="navbar-center-spacer">
          <Link to="/" className="navbar-center-logo-link">
            <img src={hope3} alt="HOPE3" className="navbar-center-logo" />
          </Link>
        </div>

        <div className="navbar-right">
          <div className="navbar-section">
            <button
              className="section-title"
              onClick={() => {
                window.open('https://www.hope3.org/', '_blank', 'noopener,noreferrer');
              }}
            >
              Services
            </button>
          </div>
          <div className="navbar-section" ref={el => dropdownRefs.current['About Us'] = el}
            onMouseEnter={() => { if (clickedDropdown !== 'About Us') setClickedDropdown(null); setActiveDropdown('About Us'); }}
            onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button
              className={`section-title ${activeDropdown === 'About Us' ? 'active' : ''}`}
              onClick={() => {
                if (clickedDropdown === 'About Us') {
                  setActiveDropdown(null);
                  setClickedDropdown(null);
                } else {
                  setActiveDropdown('About Us');
                  setClickedDropdown('About Us');
                }
                setShowGetInvolved(false); // Close Get Involved dropdown
              }}
            >
              About Us
            </button>
            {activeDropdown === 'About Us' && (
              <div className="dropdown show">
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/leadership-&-board');
                  }}
                >
                  Leadership & Board
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/financials');
                  }}
                >
                  Financials
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/media');
                  }}
                >
                  Media & FAQ
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="profile-dropdown-container" ref={getInvolvedRef}>
          <button
            className={`getinv-btn-neumorphic ${showGetInvolved ? 'active' : ''}`}
            onClick={() => {
              setShowGetInvolved(!showGetInvolved);
              setActiveDropdown(null); // Close any open nav dropdowns
              setClickedDropdown(null);
              setMobileOpen(false); // Close mobile menu
            }}
          >
            <span className="btn-icon-circle">
              <img src={getInvolvedIcon} alt="" className="get-involved-btn-img" />
            </span>
            <span className="btn-text-neumorphic">Get Involved</span>
          </button>

          <div className={`get-involved-card ${showGetInvolved ? 'show' : ''}`}>
            <div className="simple-menu">
              <button
                className="simple-button"
                onClick={() => {
                  navigate('/join-hope3');
                  setShowGetInvolved(false);
                }}
              >
                Join HOPE3
              </button>
              <button
                className="simple-button"
                onClick={() => {
                  navigate('/donate');
                  setShowGetInvolved(false);
                }}
              >
                Make a Gift
              </button>
              <button
                className="simple-button"
                onClick={() => {
                  navigate('/feedback');
                  setShowGetInvolved(false);
                }}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;