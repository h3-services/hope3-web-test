import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Hope3Journey.css';
import bannerImage from '../assets/images/pages/journey/bannerForJourney.png';
import statsBanner from '../assets/images/pages/home/statistics banner.png';
import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';

const JourneyTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Calculate scroll distance to show 4 cards (320px width + 32px gap = 352px per card)
      const scrollDistance = 352 * 4;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  const milestones = [
    { date: "January 2026", title: "Student Investment Clubs", body: "With the intent of encouraging students to start saving and understanding money management, HOPE3 started educating students about investment and kickstarted investment clubs for our students and alumni." },
    { date: "December 2025", title: "Internship Opportunities", body: "The HOPE3 Services team started with an intent to provide internship projects to our students, giving them practical experience in what they learn." },
    { date: "November 2025", title: "Placements at Google", body: "Our student, Nachiappan, graduated with an MS from Ohio State University and is now working as an AIML engineer at Google in Mountain View, California." },
    { date: "November 2024", title: "IIT Madras Admission", body: "A couple of our students secured admission to the IIT Madras online BS Data Science program." },
    { date: "June 2023", title: "Study Abroad Success", body: "A couple of our students secured US Visas for their Master's degree in Computer Science." },
    { date: "April 2023", title: "First RCD Batch", body: "Our first Rough Cut Diamonds batch was started with students at our own residential place in Chennai." },
    { date: "October 2021", title: "NEET State 1st Rank", body: "Our Student, Devadharshini, secured state first in NEET exam and now studying in Madras Medical College, Chennai." },
    { date: "October 2020", title: "NEET State 7th Rank", body: "Our student, Viswanathan, secured Tamil Nadu State 7th rank in NEET examination." },
    { date: "January 2020", title: "HOPE3 Varsity", body: "Formation of HOPE3 Varsity. This is the distinguishing factor between other educational NGOs and HOPE3. HOPE3 Varsity helps students overcome language barriers when they move from Tamil medium to starting college in English medium. Volunteers guide and coach students on various technical topics and soft skills." },
    { date: "April 2019", title: "HOPE3 Foundation", body: "Formation of HOPE3 Foundation, marking the official beginning of our mission to empower students." }
  ];

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Navbar />
      <div className={isMobile ? "mobile-scroll-journey" : ""}>
        {/* Banner Block with Quote */}
        <div className="journey-banner-block" style={{ backgroundImage: `url(${bannerImage})` }}>
          <p className="banner-quote">
            The Journey Of A Thousand Miles Begins With One Step
          </p>
          <p className="banner-author">- Lao Tzu</p>
        </div>

        <div className="journey-container">
          <div className="mb-12 text-center">
            <h1 className="cinzel-section-header">HOPE3 Journey</h1>
          </div>

          {/* HOPE3 Story Passage */}
          <div className="hope3-passage">
            <p className="passage-text">
              HOPE3 began modestly, driven by a simple vision to make learning accessible to all.
              Over the years, it has grown steadily, shaping countless student journeys. This transformation
              was made possible by the <strong>unwavering support of volunteers.</strong> Generous donors joined hands,
              strengthening every step of the mission. Each contribution—big or small—added a unique spark of change.
            </p>
            <p className="passage-text">
              Together, they empowered students to <strong>learn, dream, and achieve.</strong> They realized that the
              students who needed help most weren't the ones already topping their classes. They were the ones
              with untapped potential—students who hadn't been taught well, who didn't score high, but who had the
              <strong> hunger to learn.</strong> These were the <strong>"rough cut diamonds,"</strong> and HOPE3 set out to polish them.
            </p>
            <p className="passage-highlight">Today, HOPE3 stands as a catalyst—transforming every student's life.</p>
          </div>
        </div>

        {/* Branded Stats Banner Image - Full Width */}
        <div className="journey-stats-image-container">
          <img src={statsBanner} alt="Impact Statistics" className="journey-stats-banner" />
        </div>

        {/* Milestones Section */}
        <div className="milestones-section relative w-full bg-white text-slate-900 overflow-hidden py-16">

          {/* Animated Background Layers */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white"></div>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-blue-500/20 w-1 h-1 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100 + 50}%`,
                  animationDuration: `${15 + Math.random() * 20}s`,
                  opacity: Math.random() * 0.6
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 md:px-8">
            <div className="mb-8 md:mb-12">
              <h2 className="cinzel-section-header">Our Journey</h2>
            </div>

            {isMobile ? (
              /* Mobile Timeline View */
              <div className="timeline-mobile-wrapper">
                {milestones.map((m, idx) => {
                  const isTop = idx % 2 === 0;
                  const year = m.date.split(' ')[1] || m.date.split(' ')[0];
                  return (
                    <div key={idx} className={`timeline-item ${isTop ? 'timeline-top' : 'timeline-bottom'}`}>
                      <div className="timeline-card">
                        <div className="card-header">
                          <span className="year-badge">{year}</span>
                        </div>
                        <h3 className="milestone-title">{m.title}</h3>
                        <p className="milestone-body">{m.body}</p>
                      </div>
                      <div className="timeline-line"></div>
                      <div className="timeline-dot"></div>
                    </div>
                  );
                })}
                <svg className="timeline-path" width="100%" height="100%" preserveAspectRatio="none">
                  <path
                    d={`M 50,0 ${milestones.map((_, i) => {
                      const y = i * 220 + 110;
                      return i % 2 === 0 ? `Q 30,${y} 50,${y + 55}` : `Q 70,${y} 50,${y + 55}`;
                    }).join(' ')}`}
                    stroke="#14b8a6"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            ) : (
              /* Desktop Hanging Cards View */
              <div className="relative w-full" style={{ minHeight: '600px', paddingTop: '80px' }}>

                {/* Navigation Buttons */}
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110 transition-all -ml-4 lg:-ml-12"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft size={28} />
                </button>

                <div
                  ref={scrollContainerRef}
                  className="relative flex w-full gap-8 transition-all duration-500 ease-out px-1 no-scrollbar flex-row overflow-x-auto overflow-y-hidden pb-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingTop: '0px' }}
                >
                  {/* Straight Line SVG - extends across all cards */}
                  <svg
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{
                      width: `${milestones.length * 328}px`,
                      height: '128px',
                      zIndex: 1
                    }}
                  >
                    <line
                      x1="0"
                      y1="60"
                      x2={milestones.length * 328}
                      y2="60"
                      stroke="#DCEFFC"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>

                  {milestones.map((m, idx) => {
                    const year = m.date.split(' ')[1] || m.date.split(' ')[0];

                    return (
                      <div
                        key={idx}
                        className="relative flex-none"
                        style={{ width: '320px' }}
                      >
                        {/* Vertical String connecting to the straight line */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-teal-500"
                          style={{
                            top: '60px',
                            height: '60px',
                            zIndex: 2
                          }}
                        ></div>

                        {/* Connection dot on the line */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-600 border-2 border-white shadow-md"
                          style={{
                            top: '54px',
                            zIndex: 3
                          }}
                        ></div>

                        {/* Card */}
                        <div
                          className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6"
                          style={{ marginTop: '120px', border: '2px solid #DCEFFC' }}
                        >
                          {/* Year Badge */}
                          <div className="absolute -top-4 left-4 bg-teal-600 text-white px-5 py-2 rounded-full text-base font-bold shadow-lg border-2 border-white">
                            {year}
                          </div>

                          {/* Date in top right corner */}
                          <div className="absolute top-4 right-4 text-xs text-slate-400 font-semibold">
                            {m.date}
                          </div>

                          {/* Card Content */}
                          <div className="pt-4 pr-20">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                              {m.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {m.body}
                            </p>
                          </div>

                          {/* Card Footer - removed date, kept dot */}
                          <div className="mt-4 pt-4 border-t border-slate-200 flex justify-end items-center">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110 transition-all -mr-4 lg:-mr-12"
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={28} />
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-0 left-0 right-0 flex gap-2 mt-6 justify-center">
                  {milestones.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-12 bg-teal-600' : 'w-2 bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <style>{`
            @keyframes float {
              0% { transform: translateY(0) rotate(0deg); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
            }
            .animate-float {
              animation-name: float;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
            
            /* Mobile Timeline Styles */
            .timeline-mobile-wrapper {
              position: relative;
              padding: 20px 0;
              min-height: ${milestones.length * 220}px;
            }
            
            .timeline-path {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 1;
            }
            
            .timeline-item {
              position: relative;
              margin-bottom: 40px;
              padding: 0 20px;
              z-index: 2;
            }
            
            .timeline-item.timeline-top {
              display: grid;
              grid-template-columns: 1fr 40px;
              gap: 15px;
              align-items: start;
            }
            
            .timeline-item.timeline-bottom {
              display: grid;
              grid-template-columns: 40px 1fr;
              gap: 15px;
              align-items: start;
            }
            
            .timeline-card {
              background: white;
              border: 3px solid #14b8a6;
              border-radius: 18px;
              padding: 18px;
              box-shadow: 0 4px 12px rgba(20, 184, 166, 0.12);
            }
            
            .card-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 12px;
            }
            
            .year-badge {
              background: #14b8a6;
              color: white;
              padding: 5px 13px;
              border-radius: 18px;
              font-size: 12px;
              font-weight: 700;
            }
            
            .card-number {
              color: #94a3b8;
              font-size: 13px;
              font-weight: 600;
            }
            
            .milestone-title {
              font-size: 14px;
              font-weight: 700;
              color: #1e293b;
              margin-bottom: 10px;
              line-height: 1.3;
            }
            
            .milestone-body {
              font-size: 11px;
              color: #64748b;
              line-height: 1.5;
            }
            
            .timeline-line {
              width: 2px;
              height: 100%;
              background: #14b8a6;
              position: relative;
            }
            
            .timeline-top .timeline-line {
              margin-top: 40px;
            }
            
            .timeline-bottom .timeline-line {
              order: -1;
              margin-top: 40px;
            }
            
            .timeline-dot {
              width: 10px;
              height: 10px;
              background: #14b8a6;
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 0 0 3px #14b8a6;
              position: absolute;
            }
            
            .timeline-top .timeline-dot {
              right: 15px;
              top: 35px;
            }
            
            .timeline-bottom .timeline-dot {
              left: 15px;
              top: 35px;
            }
          `}</style>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default JourneyTimeline;