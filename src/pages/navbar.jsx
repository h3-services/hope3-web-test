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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const getInvolvedRef = useRef(null);
  const dropdownRefs = useRef({});

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
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clickedDropdown]);

  const menuItems = {
    'Our Work': ['Our Students', 'Our Projects'],
    'Our Impact': ['Why HOPE3?', 'HOPE3 Journey'],
    'Services': ['Services'],
    'About Us': ['Leadership & Board', 'Financials', 'FAQ', 'Be Informed']
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

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
          <div className="mobile-menu-content">
            {Object.entries(menuItems).map(([section, items]) => (
              <div key={section} className="mobile-nav-item">
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
                            'Our Students': 'our-students',
                            'Our Projects': 'our-projects',
                            'Why HOPE3?': 'why-hope3',
                            'HOPE3 Journey': 'hope3-journey',
                            'Leadership & Board': 'leadership-&-board'
                          };
                          if (routes[item]) {
                            window.location.href = import.meta.env.BASE_URL + routes[item];
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
              </div>
            ))}
          </div>
        </div>

        <div className="navbar-left">
          <div className="navbar-section" ref={el => dropdownRefs.current['Our Work'] = el}
            onMouseEnter={() => !clickedDropdown && setActiveDropdown('Our Work')}
            onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button
              className="section-title"
              onClick={() => {
                const newState = activeDropdown === 'Our Work' ? null : 'Our Work';
                setActiveDropdown(newState);
                setClickedDropdown(newState);
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
                    window.location.href = import.meta.env.BASE_URL + 'our-students';
                  }}
                >
                  Our Students
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = import.meta.env.BASE_URL + 'our-projects';
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
                    window.location.href = import.meta.env.BASE_URL + 'why-hope3';
                  }}
                >
                  Why HOPE3?
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("hope3 journey");
                    window.location.href = import.meta.env.BASE_URL + 'hope3-journey';
                  }}
                >
                  HOPE3 Journey
                </button>
              </div>
            )}
          </div>
        </div>

        <img src={hope3} alt="HOPE3" className="navbar-center-logo" />

        <div className="navbar-right">
          <div className="navbar-section" ref={el => dropdownRefs.current['Services'] = el}
            onMouseEnter={() => !clickedDropdown && setActiveDropdown('Services')}
            onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button
              className="section-title"
              onClick={() => {
                const newState = activeDropdown === 'Services' ? null : 'Services';
                setActiveDropdown(newState);
                setClickedDropdown(newState);
              }}
            >
              Services
            </button>
            {activeDropdown === 'Services' && (
              <div className="dropdown show">
                <div className="dropdown-link">Services</div>
              </div>
            )}
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
                    window.location.href = import.meta.env.BASE_URL + 'leadership-&-board';
                  }}
                >
                  Leadership & Board
                </button>
                <div className="dropdown-link">Financials</div>
                <div className="dropdown-link">FAQ</div>
                <div className="dropdown-link">Be Informed</div>
              </div>
            )}
          </div>
        </div>

        <div className="profile-dropdown-container" ref={getInvolvedRef}>
          <button
            className={`getinv-btn-neumorphic ${showGetInvolved ? 'active' : ''}`}
            onClick={() => setShowGetInvolved(!showGetInvolved)}
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
                  window.location.href = import.meta.env.BASE_URL + 'join-hope3';
                  setShowGetInvolved(false);
                }}
              >
                Join HOPE3
              </button>
              <button
                className="simple-button"
                onClick={() => {
                  window.location.href = import.meta.env.BASE_URL + 'donate';
                  setShowGetInvolved(false);
                }}
              >
                Make a Gift
              </button>
              <button className="simple-button">Give Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;