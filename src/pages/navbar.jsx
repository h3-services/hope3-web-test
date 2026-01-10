import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/home/hope3_logo.png';
import hope3 from '../assets/home/hope3.png';
import usericon from '../assets/home/img1.png';
import getInvolvedIcon from '../assets/home/Gemini_Generated_Image_odj8ogodj8ogodj8.png';


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  const menuItems = {
    'Our Work': ['Our Students', 'Our Projects'],
    'Our Impact': ['Why HOPE3?', 'HOPE3 Journey'],
    'Services': ['Services'],
    'About Us': ['Leadership & Board', 'Financials', 'Media & FAQ']
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content" ref={mobileMenuRef}>
            {Object.entries(menuItems).map(([section, items]) => (
              <div key={section} className="mobile-nav-item">
                {section === 'Services' ? (
                  <button
                    className="mobile-nav-button"
                    onClick={() => {
                      navigate('/services');
                      setMobileOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {section}
                  </button>
                ) : (
                  <>
                    <button
                      className={`mobile-nav-button ${activeDropdown === section ? 'active' : ''}`}
                      onClick={() => {
                        const newState = activeDropdown === section ? null : section;
                        setActiveDropdown(newState);
                      }}
                    >
                      {section}
                      <span className="mobile-arrow">▼</span>
                    </button>
                    {activeDropdown === section && (
                      <div className="mobile-submenu">
                        {items.map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              const routes = {
                                'Our Students': '/our-students',
                                'Our Projects': '/our-projects',
                                'Why HOPE3?': '/why-hope3',
                                'HOPE3 Journey': '/hope3-journey',
                                'Leadership & Board': '/leadership-&-board',
                                'Services': '/services'
                              };
                              if (routes[item]) {
                                navigate(routes[item]);
                              }
                              setMobileOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="navbar-left">
          <Link to="/" className="desktop-logo-link">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="navbar-section" ref={el => dropdownRefs.current['Our Work'] = el}
            onMouseEnter={() => !clickedDropdown && setActiveDropdown('Our Work')}
            onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button
              className="section-title"
              onClick={() => {
                const newState = activeDropdown === 'Our Work' ? null : 'Our Work';
                setActiveDropdown(newState);
                setClickedDropdown(newState);
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
            onMouseEnter={() => !clickedDropdown && setActiveDropdown('Our Impact')}
            onMouseLeave={() => !clickedDropdown && setTimeout(() => setActiveDropdown(null), 100)}>
            <button
              className="section-title"
              onClick={() => {
                const newState = activeDropdown === 'Our Impact' ? null : 'Our Impact';
                setActiveDropdown(newState);
                setClickedDropdown(newState);
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

        <Link to="/" className="navbar-center-logo-link">
          <img src={hope3} alt="HOPE3" className="navbar-center-logo" />
        </Link>

        <div className="navbar-right">
          <div className="navbar-section">
            <button
              className="section-title"
              onClick={() => {
                navigate('/services');
              }}
            >
              Services
            </button>
          </div>
          <div className="navbar-section" ref={el => dropdownRefs.current['About Us'] = el}
            onMouseEnter={() => !clickedDropdown && setActiveDropdown('About Us')}
            onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button
              className="section-title"
              onClick={() => {
                const newState = activeDropdown === 'About Us' ? null : 'About Us';
                setActiveDropdown(newState);
                setClickedDropdown(newState);
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
                <div className="dropdown-link">Financials</div>
                <div className="dropdown-link">Media & FAQ</div>
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