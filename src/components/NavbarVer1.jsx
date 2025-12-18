"use client"

import '../styles/navbar.css'
import { useState } from "react"

const NavbarVer1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img 
          src="/assets/hope3_logo.png" 
          alt="HOPE3 Logo" 
          className="navbar-logo"
        />
        
        <div className="navbar-left">
          <div className="navbar-item">
            <div className="navbar-section">
              <button 
                className="section-title"
                onClick={() => setActiveDropdown(activeDropdown === 'Our Work' ? null : 'Our Work')}
              >
                Our Work
              </button>
              {/* <span className="dropdown-arrow">▼</span> */}
            </div>
            <div className={`dropdown ${activeDropdown === 'Our Work' ? 'show' : ''}`}>
              <a href="#" className="dropdown-link">Why HOPE3</a>
              <a href="#" className="dropdown-link">HOPE3 Journey </a>
              {/* <a href="#" className="dropdown-link">Initiatives</a> */}
            </div>
          </div>
          <div className="navbar-item">
            <div className="navbar-section">
              <button 
                className="section-title"
                onClick={() => setActiveDropdown(activeDropdown === 'Our Impact' ? null : 'Our Impact')}
              >
                Our Impact
              </button>
              {/* <span className="dropdown-arrow">▼</span> */}
            </div>
            <div className={`dropdown ${activeDropdown === 'Our Impact' ? 'show' : ''}`}>
              <a href="#" className="dropdown-link">	Our Students </a>
              <a href="#" className="dropdown-link">	Our Projects </a>
              {/* <a href="#" className="dropdown-link">Reports</a> */}
            </div>
          </div>
        </div>

        <img 
          src="/assets/hope3.png" 
          alt="HOPE3" 
          className="navbar-center-logo"
        />

        <div className="navbar-right">
          <div className="navbar-item">
            <div className="navbar-section">
              <button 
                className="section-title"
                onClick={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
              >
                Services
              </button>
               {/* <span className="dropdown-arrow">▼</span> */}
         </div>
            {/* <div className={`dropdown ${activeDropdown === 'Services' ? 'show' : ''}`}>
              <a href="#" className="dropdown-link">Consulting</a>
              <a href="#" className="dropdown-link">Training</a>
              <a href="#" className="dropdown-link">Support</a>
            </div> */}
          </div> 
          <div className="navbar-item">
            <div className="navbar-section">
              <button 
                className="section-title"
                onClick={() => setActiveDropdown(activeDropdown === 'About Us' ? null : 'About Us')}
              >
                About Us
              </button>
              {/* <span className="dropdown-arrow">▼</span> */}
            </div>
            <div className={`dropdown ${activeDropdown === 'About Us' ? 'show' : ''}`}>
              <a href="#" className="dropdown-link">Leadership & Board</a>
              <a href="#" className="dropdown-link">Financials</a>
              <a href="#" className="dropdown-link">FAQ</a>
              <a href="#" className="dropdown-link">Be Informed</a>
            </div>
          </div>
        </div>

        <div className="profile-dropdown-container">
          <button 
            className={`getinv-btn ${dropdownOpen ? 'active' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img 
              src="/assets/img1.png" 
              alt="Get Involved" 
              className="btn-icon"
            />
            <span className="btn-text">Get Involved</span>
          </button>
          
          <div className={`get-involved-card ${dropdownOpen ? 'show' : ''}`}>
            <div className="simple-menu">
              <button className="simple-button">Our Projects </button>
              <button className="simple-button">	Make a Gift </button>
              <button className="simple-button">Give Feedback </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarVer1