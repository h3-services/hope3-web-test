import React, { useState } from 'react';
import './Hope3Journey.css';
import journeyImage from '../assets/journey/Gemini_Generated_Image_yyvlsoyyvlsoyyvl-removebg-preview.png';
import Navbar from './navbar';
import NewFooter from './NewFooter';

const JourneyTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  
  const studentData = [
    { year: 2018, students: 7, station: "Social projects findabed", icon: "🏠" },
    { year: 2019, students: 23, station: "Varsity", icon: "🎓" },
    { year: 2020, students: 23, station: "RCD", icon: "🔬" },
    { year: 2021, students: 28, station: "Enters into IIT Game", icon: "🏆" },
    { year: 2022, students: 23, station: "Study in Abroad", icon: "✈️" },
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
    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <>
      <Navbar />
      <div className="journey-container">
        <h1 className="journey-headline">HOPE3 Journey</h1>
        
        <div className="timeline-container">
        <img src={journeyImage} alt="Journey Timeline" className="journey-image" />
        
        {/* Station markers */}
        {studentData.map(({ year, students, station, icon }, index) => {
          const { x, y } = getZigzagPosition(index, studentData.length);
          return (
            <div key={year} className="station-container" style={{ left: x, top: y }}>
              <div
                className={`station-marker ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
              >
                <div className="station-icon">{icon}</div>
              </div>
              <div className="station-name-label">{station}</div>
            </div>
          );
        })}
      </div>
      
      {/* Student data display */}
      {selectedYear && (
        <div className="impact-card">
          <button className="close-btn" onClick={() => setSelectedYear(null)}>×</button>
          <h3>{selectedYear}</h3>
          <h4 className="station-name">{studentData.find(d => d.year === selectedYear)?.station}</h4>
          <p className="student-count">{studentData.find(d => d.year === selectedYear)?.students} Students</p>
        </div>
      )}
      
      {/* Total summary card */}
      <div className="total-card">
        <h4>Total Impact</h4>
        <p className="total-students">{totalStudents} Students</p>
        <p className="year-range">2018 - 2025</p>
      </div>
      </div>
      <NewFooter />
    </>
  );
};

export default JourneyTimeline;