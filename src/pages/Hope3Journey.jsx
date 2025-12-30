import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hope3Journey.css';
import journeyImage from '../assets/journey/Gemini_Generated_Image_yyvlsoyyvlsoyyvl-removebg-preview.png';
import mobileTrackImage from '../assets/journey/_620DED87-C755-4F75-9D5F-3EA3E770D415_-removebg-preview.png';
import Navbar from './navbar';
import NewFooter from './NewFooter';

const JourneyTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSelectedStation, setMobileSelectedStation] = useState(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const trackContainerRef = useRef(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle page scroll to update visible icons (show 3 at a time)
  useEffect(() => {
    if (!isMobile) return;

    const handlePageScroll = () => {
      if (trackContainerRef.current) {
        const rect = trackContainerRef.current.getBoundingClientRect();
        const containerTop = rect.top;
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress based on container position
        const scrollProgress = Math.max(0, (viewportHeight / 2 - containerTop) / 100);
        const newStartIndex = Math.floor(scrollProgress);
        const maxStartIndex = 5; // 8 icons - 3 visible = 5 max start index

        setVisibleStartIndex(Math.min(Math.max(0, newStartIndex), maxStartIndex));
      }
    };

    window.addEventListener('scroll', handlePageScroll);
    handlePageScroll(); // Initial check

    return () => window.removeEventListener('scroll', handlePageScroll);
  }, [isMobile]);

  const studentData = [
    { year: 2018, students: 7, station: "Social projects findabed", icon: "🏠" },
    { year: 2019, students: 23, station: "Varsity", icon: "🎓" },
    { year: 2020, students: 23, station: "RCD", icon: "🔬" },
    { year: 2021, students: 28, station: "Enters into IIT Game", icon: "🏆" },
    { year: 2022, students: 55, station: "Study in Abroad", icon: "✈️" },
    { year: 2023, students: 18, station: "Earn while u Learn", icon: "💼" },
    { year: 2024, students: 15, station: "Student Entreprenship", icon: "🚀" },
    { year: 2025, students: 2, station: "Enters into Maang", icon: "💻" }
  ];

  const totalStudents = 139;

  // Calculate zigzag positions for 8 stations
  const getZigzagPosition = (index, total) => {
    const segment = index / (total - 1);
    const x = 8 + segment * 84; // Spread across width
    let y = index % 2 === 0 ? 35 : 65; // Zigzag pattern
    if (index === 2) y = 30; // Move 2020 slightly up from 2018
    if (index === 4) y = 2; // Move 2022 slightly up from 2020
    if (index === 6) y = 20; // Move 2024 slightly up from 2022
    if (index === 3) y = 85; // Move 2021 slightly down from 2019
    if (index === 5) y = 60; // Move 2023 slightly down from 2021
    if (index === 7) y = 85; // Move 2025 slightly down from 2023
    return { x: `${x}% `, y: `${y}% ` };
  };

  return (
    <>
      <Navbar />
      {isMobile ? (
        // Mobile-specific layout with scroll-based icons
        <div className="mobile-scroll-journey">
          <div style={{ textAlign: 'center' }}>
            <h1 className="journey-headline">HOPE3 Journey</h1>
          </div>

          {/* Banner Block with Quote */}
          <div className="banner-block">
            <p className="banner-quote">
              "The Journey Of A Thousand Miles Begins With One Step"
            </p>
            <p className="banner-author">- Lao Tzu</p>
          </div>

          {/* Instruction text */}
          <p className="scroll-instruction">
            Scroll vertically to see milestones. Tap icons to view details.
          </p>

          {/* Main content area: Track on left, Card on right */}
          <div className="mobile-journey-content" ref={trackContainerRef}>
            {/* Left side: Track with icons */}
            <div className="track-side">
              <img src={mobileTrackImage} alt="Journey Track" className="track-left-image" />

              {/* Scrollable icons container - shows 3 at a time */}
              <div className="icons-scroll-box">
                {studentData.map(({ year, students, station, icon }, index) => {
                  const isSelected = mobileSelectedStation === year;

                  return (
                    <div
                      key={year}
                      className={`scroll-icon-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setMobileSelectedStation(isSelected ? null : year)}
                    >
                      <div className={`scroll-icon-marker ${isSelected ? 'selected' : ''}`}>
                        <span className="scroll-icon-emoji">{icon}</span>
                      </div>
                      <span className="scroll-icon-year">{year}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Content card */}
            <div className="card-side">
              {mobileSelectedStation ? (
                <div className="mobile-content-card">
                  <div className="card-icon">
                    {studentData.find(d => d.year === mobileSelectedStation)?.icon}
                  </div>
                  <div className="card-year">
                    {mobileSelectedStation}
                  </div>
                  <div className="card-station-name">
                    {studentData.find(d => d.year === mobileSelectedStation)?.station}
                  </div>
                  <div className="card-students">
                    {studentData.find(d => d.year === mobileSelectedStation)?.students} Students
                  </div>
                </div>
              ) : (
                <div className="card-placeholder">
                  <p>👈 Tap an icon to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Desktop layout (unchanged)
        <div className="journey-container">
          <div style={{ textAlign: 'center' }}>
            <h1 className="journey-headline">HOPE3 Journey</h1>
          </div>

          {/* Fixed Hover Card Container */}
          <div className="hover-card-container">
            {selectedYear && (
              <div className="hover-card show">
                <h3>{selectedYear}</h3>
                <h4 className="hover-station-name">{studentData.find(d => d.year === selectedYear)?.station}</h4>
                <p className="student-count">{studentData.find(d => d.year === selectedYear)?.students} Students</p>
              </div>
            )}
          </div>

          <div className="timeline-container">
            <img src={journeyImage} alt="Journey Timeline" className="journey-image" />

            {/* Station markers */}
            {studentData.map(({ year, students, station, icon }, index) => {
              const { x, y } = getZigzagPosition(index, studentData.length);
              return (
                <div
                  key={year}
                  className="station-container"
                  style={{ left: x, top: y }}
                  onMouseEnter={() => setSelectedYear(year)}
                  onMouseLeave={() => setSelectedYear(null)}
                >
                  <div className={`station - marker ${selectedYear === year ? 'active' : ''} `}>
                    <div className="station-icon">{icon}</div>
                  </div>
                  <div className="station-name-label">{station}</div>
                </div>
              );
            })}
          </div>

          {/* Total summary card */}
          {/*<div className="total-card">
            <h4>Total Impact</h4>
            <p className="total-students">{totalStudents} Students</p>
            <p className="year-range">2018 - 2025</p>
          </div>*/}
        </div>
      )}
      <NewFooter />
    </>
  );
};

export default JourneyTimeline;