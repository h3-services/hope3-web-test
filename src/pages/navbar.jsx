import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/hope3_logo.png';
import hope3 from '../assets/hope3.png';
import usericon from '../assets/img1.png';

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
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clickedDropdown]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Left Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Left Nav Items - Between logo and center */}
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

        {/* Center Logo */}
        <img src={hope3} alt="HOPE3" className="navbar-center-logo" />

        {/* Right Nav Items - Between center and Get Involved */}
        <div className="navbar-right">
          {/* Services - No dropdown, just a simple button */}
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

        {/* Get Involved Button */}
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
              <button className="simple-button">Join HOPE3</button>
              <button className="simple-button">Make a Gift</button>
              <button className="simple-button">Give Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;