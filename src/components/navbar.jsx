import { useState, useRef, useEffect } from 'react';
import '../styles/navbar.css';
import logo from '../assets/hope3_logo.png';
import hope3 from '../assets/hope3.png';
import usericon from '../assets/img1.png';
// import GetInvolvedMenu from '../GetInvolvedMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const getInvolvedRef = useRef(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (getInvolvedRef.current && !getInvolvedRef.current.contains(event.target)) {
        setShowGetInvolved(false);
      }
      
      Object.keys(dropdownRefs.current).forEach(key => {
        if (dropdownRefs.current[key] && !dropdownRefs.current[key].contains(event.target)) {
          setActiveDropdown(null);
          setClickedDropdown(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showGetInvolved, activeDropdown]);

  const menuItems = {
    'Our Work': ['Why HOPE3?', 'HOPE3 Journey'],
    'Our Impact': ['Our Students', 'Our Projects'],
    'Services': ['Services'],
    'About Us': ['Leadership & Board', 'Financials', 'FAQ', 'Be Informed']
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        
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
              Our Work <span className="dropdown-arrow">^</span>
            </button>
            {activeDropdown === 'Our Work' && (
              <div className="dropdown show">
                {menuItems['Our Work'].map((item, index) => (
                  <div key={index} className="dropdown-link">{item}</div>
                ))}
              </div>
            )}
          </div>
          <div className="navbar-section" ref={el => dropdownRefs.current['Our Impact'] = el}
               onMouseEnter={() => !clickedDropdown && setActiveDropdown('Our Impact')}
               onMouseLeave={() => !clickedDropdown && setActiveDropdown(null)}>
            <button 
              className="section-title"
              onClick={() => {
                const newState = activeDropdown === 'Our Impact' ? null : 'Our Impact';
                setActiveDropdown(newState);
                setClickedDropdown(newState);
              }}
            >
              Our Impact <span className="dropdown-arrow">^</span>
            </button>
            {activeDropdown === 'Our Impact' && (
              <div className="dropdown show">
                {menuItems['Our Impact'].map((item, index) => (
                  <div key={index} className="dropdown-link">{item}</div>
                ))}
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
              Services <span className="dropdown-arrow">^</span>
            </button>
            {activeDropdown === 'Services' && (
              <div className="dropdown show">
                {menuItems['Services'].map((item, index) => (
                  <div key={index} className="dropdown-link">{item}</div>
                ))}
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
              About Us <span className="dropdown-arrow">^</span>
            </button>
            {activeDropdown === 'About Us' && (
              <div className="dropdown show">
                {menuItems['About Us'].map((item, index) => (
                  <div key={index} className="dropdown-link">{item}</div>
                ))}
              </div>
            )}
          </div>
        </div>

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
