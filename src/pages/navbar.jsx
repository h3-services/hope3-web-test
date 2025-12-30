import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/hope3_logo.png';
import hope3 from '../assets/hope3.png';
import usericon from '../assets/img1.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const getInvolvedRef = useRef(null);
  const dropdownRefs = useRef({});
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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

      if (getInvolvedRef.current && !getInvolvedRef.current.contains(event.target)) {
        setShowGetInvolved(false);
      }

      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.hamburger')) {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clickedDropdown]);

  const handleMobileNavClick = (section) => {
    if (mobileSubmenu === section) {
      setMobileSubmenu(null);
    } else {
      setMobileSubmenu(section);
    }
  };

  const handleMobileLink = (path) => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
    window.location.href = path;
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Mobile Hamburger - Left Side */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMobileSubmenu(null);
          }}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Left Logo */}
        <Link to="/" className="desktop-logo-link">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Desktop Left Nav Items */}
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
                    window.location.href = '/our-students';
                  }}
                >
                  Our Students
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = '/our-projects';
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
                    window.location.href = '/why-hope3';
                  }}
                >
                  Why HOPE3?
                </button>
                <button
                  className="dropdown-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = '/hope3-journey';
                  }}
                >
                  HOPE3 Journey
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Center Logo - HOPE3 */}
        <Link to="/" className="navbar-center-link">
          <img src={hope3} alt="HOPE3" className="navbar-center-logo" />
        </Link>

        {/* Desktop Right Nav Items */}
        <div className="navbar-right">
          <button
            className="section-title"
            onClick={() => window.location.href = '/services'}
          >
            Services
          </button>

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
                <div className="dropdown-link">Leadership & Board</div>
                <div className="dropdown-link">Financials</div>
                <div className="dropdown-link">FAQ</div>
                <div className="dropdown-link">Be Informed</div>
              </div>
            )}
          </div>
        </div>

        {/* Get Involved Button - Right Side */}
        <div className="profile-dropdown-container" ref={getInvolvedRef}>
          <button
            className={`getinv-btn ${showGetInvolved ? 'active' : ''}`}
            onClick={() => setShowGetInvolved(!showGetInvolved)}
          >
            <img src={usericon} alt="" className="btn-icon" />
            <span className="btn-text">Get Involved</span>
          </button>

          <div className={`get-involved-card ${showGetInvolved ? 'show' : ''}`}>
            <div className="simple-menu">
              <button className="simple-button" onClick={() => window.location.href = '/join-hope3'}>Join HOPE3</button>
              <button className="simple-button" onClick={() => window.location.href = '/donate'}>Make a Gift</button>
              <button className="simple-button">Give Feedback</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} ref={mobileMenuRef}>
          <div className="mobile-menu-content">
            {/* Our Work */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${mobileSubmenu === 'Our Work' ? 'active' : ''}`}
                onClick={() => handleMobileNavClick('Our Work')}
              >
                Our Work
                <span className="mobile-arrow">{mobileSubmenu === 'Our Work' ? '▲' : '▼'}</span>
              </button>
              {mobileSubmenu === 'Our Work' && (
                <div className="mobile-submenu">
                  <button onClick={() => handleMobileLink('/our-students')}>Our Students</button>
                  <button onClick={() => handleMobileLink('/our-projects')}>Our Projects</button>
                </div>
              )}
            </div>

            {/* Our Impact */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${mobileSubmenu === 'Our Impact' ? 'active' : ''}`}
                onClick={() => handleMobileNavClick('Our Impact')}
              >
                Our Impact
                <span className="mobile-arrow">{mobileSubmenu === 'Our Impact' ? '▲' : '▼'}</span>
              </button>
              {mobileSubmenu === 'Our Impact' && (
                <div className="mobile-submenu">
                  <button onClick={() => handleMobileLink('/why-hope3')}>Why HOPE3?</button>
                  <button onClick={() => handleMobileLink('/hope3-journey')}>HOPE3 Journey</button>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="mobile-nav-item">
              <button
                className="mobile-nav-button"
                onClick={() => handleMobileLink('/services')}
              >
                Services
              </button>
            </div>

            {/* About Us */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${mobileSubmenu === 'About Us' ? 'active' : ''}`}
                onClick={() => handleMobileNavClick('About Us')}
              >
                About Us
                <span className="mobile-arrow">{mobileSubmenu === 'About Us' ? '▲' : '▼'}</span>
              </button>
              {mobileSubmenu === 'About Us' && (
                <div className="mobile-submenu">
                  <button onClick={() => handleMobileLink('/leadership')}>Leadership & Board</button>
                  <button onClick={() => handleMobileLink('/financials')}>Financials</button>
                  <button onClick={() => handleMobileLink('/faq')}>FAQ</button>
                  <button onClick={() => handleMobileLink('/be-informed')}>Be Informed</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;