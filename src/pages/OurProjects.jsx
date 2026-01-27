import React, { useState } from 'react';
import '../styles/OurProjects.css';
import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';

// Use local assets for the gallery
import img1 from '../assets/images/pages/transformation/img1.jpeg';
import img2 from '../assets/images/pages/transformation/img2.jpeg';
import img3 from '../assets/images/pages/transformation/img3.jpeg';
import img4 from '../assets/images/pages/transformation/img4.jpeg';
import img5 from '../assets/images/pages/transformation/img5.jpeg';
import img6 from '../assets/images/pages/transformation/img6.jpeg';
import img7 from '../assets/images/pages/transformation/img7.jpeg';
import img8 from '../assets/images/pages/transformation/img8.jpeg';
import educationImg from '../assets/images/pages/home/education.jpeg';
import empowermentImg from '../assets/images/pages/home/empowerment.jpeg';
import entrepreneurshipImg from '../assets/images/pages/home/enterpreneurship.jpeg';
import graduationImg from '../assets/images/pages/home/college-graduation-pictures.jpg.jpeg';
import chemistryAppImg from '../assets/images/pages/project/chemistryapp- Sham Edward.png';
import nadiBioBandImg from '../assets/images/pages/project/Nadi Bio Band.jpeg';
import nadiBioBand1Img from '../assets/images/pages/project/Nadi Bio Band1.jpeg';
import nadiBioBand2Img from '../assets/images/pages/project/Nadi Bio Band2.jpeg';
import nadiBioBand3Img from '../assets/images/pages/project/Nadi Bio Band3.jpeg';
import nadiBioBand4Img from '../assets/images/pages/project/Nadi Bio Band4.jpeg';
import chemistry1Img from '../assets/images/pages/project/chemistry1.png';
import chemistry2Img from '../assets/images/pages/project/chemistry2.png';
import chemistry3Img from '../assets/images/pages/project/chemistry3.png';
import ourAreaImg from '../assets/images/pages/project/OurArea.png';
import ourArea1Img from '../assets/images/pages/project/ourarea1.png';
import ourArea2Img from '../assets/images/pages/project/ourarea2.png';
import ourArea3Img from '../assets/images/pages/project/ourarea3.png';
import ourArea4Img from '../assets/images/pages/project/ourarea4.png';
import foodSharingImg from '../assets/images/pages/project/plates 2 people.jpeg';
import foodSharing1Img from '../assets/images/pages/project/plates 2 people1.png';
import foodSharing2Img from '../assets/images/pages/project/plates 2 people2.png';
import foodSharing3Img from '../assets/images/pages/project/plates 2 people3.png';

const OurProjects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right'); // 'right' or 'left'
    const modalRef = React.useRef(null);

    const projects = [
        {
            id: 1,
            title: "FindABed Initiative",
            category: "Social Welfare",
            description: "A comprehensive platform connecting homeless individuals with available shelter beds in real-time, providing immediate assistance to those in need.",
            fullDescription: "FindABed is our flagship social welfare initiative that leverages technology to address homelessness. The platform provides real-time information about available shelter beds across multiple locations, enabling quick and efficient assistance for those in need. Our dedicated team of volunteers works around the clock to ensure accurate data and responsive support.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600",
            year: 2018,
            status: "Active",
            team: "25 volunteers",
            gallery: [img1, img2, img3, img4]
        },
        {
            id: 2,
            title: "Varsity Scholarship Program",
            category: "Education",
            description: "Supporting talented students from underprivileged backgrounds with comprehensive scholarships covering tuition, books, and living expenses.",
            fullDescription: "Our Varsity Scholarship Program identifies and supports exceptionally talented students who lack financial resources. We provide comprehensive support including full tuition coverage, book allowances, living stipends, and mentorship programs. Our scholars have gone on to prestigious universities and successful careers.",
            image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600",
            year: 2019,
            status: "Active",
            team: "12 partner schools",
            gallery: [educationImg, graduationImg, img4, img5]
        },
        {
            id: 3,
            title: "Research & Career Development",
            category: "Career",
            description: "Mentoring students in research methodologies and providing career guidance to help them navigate their professional journey.",
            fullDescription: "This program bridges the gap between academic learning and professional success. We provide hands-on research training, industry mentorship, and career counseling. Students learn to conduct independent research, develop professional networks, and make informed career decisions.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
            year: 2020,
            status: "Active",
            team: "30 industry mentors",
            gallery: [empowermentImg, img5, img6, img7]
        },
        {
            id: 4,
            title: "IIT Preparation Program",
            category: "Education",
            description: "Intensive coaching program preparing students for IIT entrance exams with expert guidance and comprehensive study materials.",
            fullDescription: "Our IIT Preparation Program provides world-class coaching to deserving students who dream of attending India's premier engineering institutes. With expert faculty, personalized study plans, and extensive practice resources, we have consistently achieved remarkable success rates.",
            image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600",
            year: 2021,
            status: "Active",
            team: "15 expert coaches",
            gallery: [img7, img8, educationImg, img1]
        },
        {
            id: 5,
            title: "Study Abroad Guidance",
            category: "International",
            description: "Helping students navigate the complex process of studying abroad, from university selection to visa assistance.",
            fullDescription: "Navigating international education can be overwhelming. Our Study Abroad Guidance program provides end-to-end support including university shortlisting, application assistance, scholarship guidance, visa processing, and pre-departure orientation. We have partnerships with universities across 10 countries.",
            image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600",
            year: 2022,
            status: "Active",
            team: "Expert counselors",
            gallery: [graduationImg, img1, img2, img3]
        },
        {
            id: 6,
            title: "Earn While You Learn",
            category: "Employment",
            description: "Creating opportunities for students to gain practical work experience while continuing their education through flexible job programs.",
            fullDescription: "Financial constraints shouldn't hinder education. Our Earn While You Learn program connects students with flexible work opportunities that complement their studies. We partner with companies offering part-time roles, internships, and freelance projects suitable for students.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600",
            year: 2023,
            status: "Active",
            team: "20 partner companies",
            gallery: [empowermentImg, img3, img4, img5]
        },
        {
            id: 7,
            title: "Chemistry Learning App",
            category: "Tech Career",
            description: "An interactive mobile application designed to make chemistry learning engaging and accessible for students through gamification and visual learning.",
            fullDescription: "The Chemistry Learning App revolutionizes how students learn chemistry by combining interactive elements, gamification, and visual learning techniques. The app features molecular visualization, interactive periodic table, chemical reaction simulations, and progress tracking to make chemistry concepts more understandable and engaging for students of all levels.",
            image: chemistryAppImg,
            year: 2024,
            status: "Active",
            team: "Sham Edward (Developer)",
            gallery: [chemistryAppImg, chemistry1Img, chemistry2Img, chemistry3Img]
        },
        {
            id: 8,
            title: "Our Area",
            category: "Social Networking",
            description: "Our Area is a local social networking platform designed to connect people within the same neighborhood. It helps users discover nearby events, shops, and moments through a location-based feed.",
            fullDescription: "Our Area is a local social networking platform designed to connect people within the same neighborhood. It helps users discover nearby events, shops, and moments through a location-based feed. Built with React, TailwindCSS, FastAPI, and Turso, the platform focuses on strengthening real-world community connections by making local updates digital, simple, and engaging.",
            image: ourAreaImg,
            year: 2024,
            status: "Active",
            team: "Siranjeevan (Frontend), Praveen (Backend)",
            gallery: [ourArea1Img, ourArea2Img, ourArea3Img, ourArea4Img]
        },
        {
            id: 9,
            title: "Food Sharing Platform",
            category: "Social Impact",
            description: "What if the food we waste every day could earn value instead? A smarter way to share and sell fresh food, turning extra food into opportunity.",
            fullDescription: "What if the food we waste every day could earn value instead? That's the idea behind this project — a smarter way to share and sell fresh food. Every day, homes and small food businesses end up with extra meals or vegetables that simply go to waste. Not because they want to — but because there's no simple way to share or sell it quickly. A smart, community-driven platform that connects people who have extra fresh food or vegetables with those who want to buy it instantly nearby. No middlemen. No delivery stress. Just simple — Post. Discover. Collect.",
            image: foodSharingImg,
            year: 2024,
            status: "Active",
            team: "Community developers",
            gallery: [foodSharingImg, foodSharing1Img, foodSharing2Img, foodSharing3Img]
        },
        {
            id: 10,
            title: "Nadi Bio Band",
            category: "Health Tech",
            description: "The Nadi Bio Band Smart Band, a wearable device that brings the traditional Ayurvedic pulse diagnosis (Nadi Pariksha) into the digital era.",
            fullDescription: "The Nadi Bio Band Smart Band, a wearable device that brings the traditional Ayurvedic pulse diagnosis (Nadi Pariksha) into the digital era. This innovative wearable combines ancient wisdom with modern technology to provide personalized health insights.",
            image: nadiBioBandImg,
            year: 2024,
            status: "Active",
            team: "8 health tech experts",
            gallery: [nadiBioBand1Img, nadiBioBand2Img, nadiBioBand3Img, nadiBioBand4Img]
        }
    ];

    const categories = ['All', 'Education', 'Career', 'Social Welfare', 'Employment', 'Entrepreneurship', 'International', 'Tech Career', 'Health Tech', 'Social Networking', 'Social Impact'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const impactStats = [
        { value: "1,700+", label: "Students Impacted" },
        { value: "10+", label: "Active Projects" },
        { value: "50+", label: "Partner Organizations" },
        { value: "7", label: "Years of Impact" }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setSlideDirection('right');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Auto-loop effect
    React.useEffect(() => {
        if (!selectedProject) return;

        const interval = setInterval(() => {
            nextImage();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [selectedProject, currentImageIndex]);

    const nextImage = () => {
        if (selectedProject) {
            setSlideDirection('right');
            setCurrentImageIndex((prev) =>
                prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setSlideDirection('left');
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
            );
        }
    };

    const scrollToBottom = () => {
        if (modalRef.current) {
            modalRef.current.scrollTo({
                top: modalRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Navbar />

            {/* Banner Section */}
            <div className="projects-banner">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600"
                    alt="Our Projects Banner"
                    className="banner-image"
                />
                <div className="banner-overlay">
                    <h1 className="banner-title">Our Projects</h1>
                    <p className="banner-subtitle">Empowering Communities Through Innovation</p>
                </div>
            </div>

            <div className="projects-container">

                <p className="projects-intro">
                    At HOPE3, we believe in creating lasting impact through innovative projects that address
                    real-world challenges. From education to employment, our initiatives are designed to
                    empower individuals and transform communities.
                </p>

                {/* Impact Summary */}
                <div className="impact-summary">
                    {impactStats.map((stat, index) => (
                        <div key={index} className="impact-item">
                            <div className="impact-value">{stat.value}</div>
                            <div className="impact-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Filter Buttons */}
                <div className="projects-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className={`projects-grid ${hoveredCard !== null ? 'has-hover' : ''}`}>
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card ${hoveredCard === project.id ? 'is-hovered' : ''}`}
                            onClick={() => openModal(project)}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay"></div>
                                <span className="project-category">{project.category}</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-year">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM19 7H5V6H19V7Z" />
                                        </svg>
                                        Started {project.year}
                                    </div>
                                    <button className="project-link">
                                        Learn More
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal Popup */}
            {selectedProject && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-container" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                            <div className="modal-header-overlay">
                                <span className="modal-category">{selectedProject.category}</span>
                                <h2 className="modal-title">{selectedProject.title}</h2>
                            </div>
                        </div>

                        {/* Scroll Down Button */}
                        <button className="modal-scroll-btn" onClick={scrollToBottom}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                            </svg>
                        </button>

                        <div className="modal-body">
                            <div className="modal-stats-grid">
                                {selectedProject.status && (
                                    <div className="modal-stat">
                                        <div className="modal-stat-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div className="modal-stat-content">
                                            <span className="modal-stat-label">Status</span>
                                            <span className="modal-stat-value">{selectedProject.status}</span>
                                        </div>
                                    </div>
                                )}
                                {selectedProject.team && (
                                    <div className="modal-stat">
                                        <div className="modal-stat-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                            </svg>
                                        </div>
                                        <div className="modal-stat-content">
                                            <span className="modal-stat-label">Team</span>
                                            <span className="modal-stat-value">{selectedProject.team}</span>
                                        </div>
                                    </div>
                                )}
                                {selectedProject.location && (
                                    <div className="modal-stat">
                                        <div className="modal-stat-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                        </div>
                                        <div className="modal-stat-content">
                                            <span className="modal-stat-label">Location</span>
                                            <span className="modal-stat-value">{selectedProject.location}</span>
                                        </div>
                                    </div>
                                )}
                                {selectedProject.impact && (
                                    <div className="modal-stat">
                                        <div className="modal-stat-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                            </svg>
                                        </div>
                                        <div className="modal-stat-content">
                                            <span className="modal-stat-label">Impact</span>
                                            <span className="modal-stat-value">{selectedProject.impact}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">About This Project</h3>
                                <p className="modal-description">{selectedProject.fullDescription}</p>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Project Gallery</h3>
                                <div className="carousel-container">
                                    <button className="carousel-btn prev" onClick={prevImage}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                        </svg>
                                    </button>

                                    <div className="carousel-slide">
                                        {selectedProject.gallery && selectedProject.gallery.map((img, index) => (
                                            <div
                                                key={index}
                                                className={`carousel-image-wrapper ${index === currentImageIndex ? 'active' : ''} ${slideDirection}`}
                                            >
                                                {index === currentImageIndex && (
                                                    <img src={img} alt={`Gallery ${index + 1}`} className="carousel-image" />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <button className="carousel-btn next" onClick={nextImage}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                        </svg>
                                    </button>

                                    <div className="carousel-dots">
                                        {selectedProject.gallery && selectedProject.gallery.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="modal-actions">
                                <button className="modal-btn primary">Get Involved</button>
                                <button className="modal-btn secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <NewFooter />
        </>
    );
};

export default OurProjects;