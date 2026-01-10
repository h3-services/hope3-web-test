import { useState, useRef } from 'react';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import './Founders.css';
import BannerImage from '../assets/leader-banner.webp';

// Uniform Image for all cards
import peoplesImage from '../assets/pillars/peoples.png';
const placeholderImage = peoplesImage; // Fallback/alias for partners


const foundersData = [
    {
        id: 1,
        name: "Mr. Palani Vairavan",
        title: "Founder",
        image: peoplesImage,
        roleIntro: "Palani is the founder of HOPE3. He also serves on the HOPE3 Board, HOPE3 Varsity, Admissions and Student Relations.",
        bio: "Mr. Palaniappan Vairavan is an educator, entrepreneur, and visionary who strongly believes that education is the key to addressing many of today’s societal challenges. He serves as the President of the HOPE3 Foundation and the Dean of the Computer Science Department at HOPE3 Varsity. Since 2016, Palaniappan has been actively volunteering with several educational nonprofit organizations, working to level the playing field for circumstantially challenged students. He was instrumental in the conception of HOPE3, recognizing the need to provide high-quality educational opportunities to talented students who lack adequate resources or exposure. At HOPE3 Varsity, he teaches data structures, algorithms, and web and mobile application development. Professionally, Palaniappan is a Software Engineering manager at Amazon in Washington. He holds a Master of Science degree in Computer Science from East Carolina University. Outside of his professional and educational pursuits, he enjoys playing tennis, pickle ball and spending time outdoors with his family.",
        email: "palani@hope3.org",
        quote: "Education can alleviate most of the key challenges faced by society today.",
        achievements: [
            "President of HOPE3 Foundation",
            "Dean of Computer Science at HOPE3 Varsity",
            "Software Engineering Manager at Amazon",
            "MS in Computer Science from East Carolina University"
        ],
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity', 'Admissions', 'Student Relations']
    },
    {
        id: 2,
        name: "Mr. Neelakandan (Neel) Venkatraman",
        title: "Co-Founder",
        image: peoplesImage,
        roleIntro: "Neel is the co-founder of HOPE3. He also serves on the HOPE3 Board and HOPE3 Varsity.",
        bio: "Neel Venkataraman is passionate about learning and teaching. Neel has been part of the Hope 3 Foundation as a member in governing body since the inception of the non profit organization. Neel is motivated to create a change through personal awareness and social engagement, especially within upcoming generation. In addition to being an advisor to the Hope 3 foundation long term strategy and regular activities, Neel enjoys connecting with students through Soft Skills club, as part of Hope3 Varsity. Professionally, Neel is a Director of Hardware Engineering at Apple. Prior to that Neel was working at Microsoft for more than 17 years. Neelakandan has a Masters in Business Administration degree from University of Wisconsin and Bachelors of Mechanical Engineering from Kumaraguru College of Technology, Coimbatore, India.",
        email: "neel@hope3.org",
        quote: "Creating change through personal and social awareness, especially within the upcoming generation.",
        achievements: [
            "Director of Hardware Engineering at Apple",
            "Former Microsoft (17+ years)",
            "MBA from University of Wisconsin",
            "Governing Body Member of HOPE3"
        ],
        categories: ['Founders', 'HOPE3 Board']
    },
    {
        id: 3,
        name: "Dr. Meenakshi Sundaram",
        title: "Co-Founder",
        image: peoplesImage,
        roleIntro: "Meenakshi is the founder of HOPE3. He also serves on the HOPE3 Board, HOPE3 Varsity, Admissions and Student Relations.",
        bio: "Dr. Meenakshi Sundaram is an educator, scientist, and a yoga, meditation enthusiast. He is one of the founding members of HOPE3 Foundation and is the president of HOPE3 Varsity the educational wing of HOPE3 Foundation. He believes in education that is actionable and education that builds a seeking (research) mindset. Meenakshi actively engages in a wide variety of HOPE3 Varsity classes as a mentor and many a time as a student. He is also a certified breathwork and meditation instructor with the Art of Living Foundation. Meenakshi works in Intel Corporation, Oregon, as a process engineer helping in the manufacturing process of semiconductor chips. He holds a MS and PhD from Cornell University, New York, in Mechanical Engineering, and a M Tech in Computational Science from Indian Institute of Science, Bangalore.",
        email: "meenakshi.sundaram@hope3.org",
        quote: "Education should be actionable and build a seeking (research) mindset.",
        achievements: [
            "Process Engineer at Intel Corporation",
            "PhD within Mechanical Engineering from Cornell University",
            "Certified Breathwork & Meditation Instructor",
            "President of HOPE3 Varsity"
        ],
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity', 'Admissions', 'Student Relations']
    },
    {
        id: 4,
        name: "Mr. Ganesh Gopalakrishnan",
        title: "HOPE3 Board Member",
        image: peoplesImage,
        bio: "Ganesh serves on the HOPE3 Board, Finance, Admissions and Student Relations. Ganesh has been volunteering for Hope3 from 2020. He is working behind the scenes in the accounting and finance section of the organization. He is also involved in admissions and student relations. As a day job, Ganesh is a Director at AlixPartners LLP.",
        email: "ganesh@hope3.org",
        quote: "Supporting the backbone of HOPE3's mission through financial stewardship.",
        categories: ['HOPE3 Board', 'Student Relations']
    },
    {
        id: 5,
        name: "Mr. Manickam",
        title: "HOPE3 Board Member",
        image: peoplesImage,
        bio: "Manickam serves on the HOPE3 Board, HOPE3 Varsity and Admissions. Manickam is a technology leader and mentor who firmly believes that education and meaningful exposure are powerful catalysts for long-term social impact. Professionally, Manickam serves as a Software Engineering Manager at Axon Enterprise.",
        email: "manickam@hope3.org",
        quote: "Education and meaningful exposure are powerful catalysts for long-term social impact.",
        categories: ['HOPE3 Board', 'HOPE3 Varsity', 'Admissions']
    },
    {
        id: 6,
        name: "Mr. Amrish",
        title: "HOPE3 Varsity Member",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Empowering the next generation.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 7,
        name: "Mr. Anirudh Ashok",
        title: "Product Management Leader",
        image: peoplesImage,
        bio: "Anirudh volunteers as a key contributor. Professionally, He is a product management leader in Healthcare Technology and the founder of FolioForge.org. He is based in Boston, MA, USA.",
        quote: "Driving healthcare technology forward.",
        linkedin: "https://www.linkedin.com/in/anirudhashok/",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 8,
        name: "Mr. Balaji Ganesan",
        title: "AI Engineer",
        image: peoplesImage,
        bio: "Balaji is a Master’s graduate in Software Engineering and currently working as an AI Engineer at Wolken Software. He is based in Seattle, Washington. During his undergraduate studies in India, he was an active member of the Hope3 Varsity program, participating in TypeScript and Data Structures & Algorithms (DSA) training. He also volunteered in several Hope events across Tamilnadu. After completing his undergraduate degree, he conducted a JavaScript course for the next batch of students, mentoring and sharing practical industry knowledge.",
        quote: "Sharing practical industry knowledge to empower others.",
        linkedin: "https://www.linkedin.com/in/balaji-ganesan-492358145/",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 19,
        name: "Mrs. Hema",
        title: "HOPE3 Varsity Member",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Supporting educational initiatives.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 20,
        name: "Mr. Karthikeyan",
        title: "HOPE3 Varsity Member",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Empowering students for a bright future.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 21,
        name: "Mr. Nachiappan",
        title: "HOPE3 Varsity & Media Team",
        image: peoplesImage,
        bio: "Nachiappan serves on HOPE3 Varsity and HOPE3 Media team. Bio coming soon.",
        quote: "Connecting through media and education.",
        categories: ['HOPE3 Varsity', 'Media']
    },
    {
        id: 22,
        name: "Mr. Pichumani",
        title: "HOPE3 Varsity Member",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Dedicated to student growth.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 23,
        name: "Mrs. Ramu Palaniappan",
        title: "HOPE3 Varsity Member",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Fostering learning environments.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 24,
        name: "Mr. Shivakumar",
        title: "Admissions, Media & Student Relations",
        image: peoplesImage,
        bio: "Shivakumar serves on Admissions, Student Relations and HOPE3 Media team. Bio coming soon.",
        quote: "Building relationships for student success.",
        categories: ['HOPE3 Varsity', 'Admissions', 'Student Relations', 'Media']
    },
    {
        id: 25,
        name: "Mr. Vijaya Kumar",
        title: "HOPE3 Varsity Member",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Commited to educational excellence.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 17,
        name: "Mr. Arumugam",
        title: "Admissions Team",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Identifying grit over grades.",
        categories: ['Admissions']
    },
    {
        id: 18,
        name: "Mr. Gokul Kittusamy",
        title: "Admissions & Facilitator",
        image: peoplesImage,
        bio: "Gokul is a Production Engineer from MIT from Anna University. He is the facilitator at HOPE3's Chennai residence, helps identify students in tribal zones and camps, and co-leads a visual communication program. He co-founded Iyal Foundation, bringing practical science education to government schools. He is the founder and CEO of Elarchitek ( https://elarchitek.com/ ) , an electronics kit company with NIT students, sourcing components, building manuals, and distributing 50+ kits to schools. Elarchitek, a 3D printing startup focuses on practical innovation.",
        email: "gokul@hope3.org",
        quote: "Practical innovation for social impact.",
        linkedin: "https://www.linkedin.com/in/gokul-kittusamy-aaa66328b/",
        categories: ['Admissions']
    },
    {
        id: 26,
        name: "Mr. Raghul",
        title: "Finance Team",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Ensuring financial integrity.",
        categories: ['Finance']
    },
    {
        id: 27,
        name: "Mr. Ganesh",
        title: "Finance Team",
        image: peoplesImage,
        bio: "Bio coming soon.",
        quote: "Supporting HOPE3's mission.",
        categories: ['Finance', 'Admissions']
    },
    // --- Industrial Partners ---
    { id: 101, name: 'Anvitha Insights', title: 'Industrial Partner', image: placeholderImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'] },
    { id: 102, name: 'Arjavatech', title: 'Industrial Partner', image: placeholderImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'] },
    { id: 103, name: 'cytronicx', title: 'Industrial Partner', image: placeholderImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'] },
    { id: 104, name: 'Elarchitek', title: 'Industrial Partner', image: placeholderImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'] },
    { id: 105, name: 'TNNGO', title: 'Industrial Partner', image: placeholderImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'] },

    // --- Non-Profit Partners ---
    { id: 201, name: 'Abdul Kalam Foundation', title: 'Non-Profit Partner', image: placeholderImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'] },
    { id: 202, name: 'Abdul Kalam Trust', title: 'Non-Profit Partner', image: placeholderImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'] },
    { id: 203, name: 'Mugavari Foundation', title: 'Non-Profit Partner', image: placeholderImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'] },
    { id: 204, name: 'Namco', title: 'Non-Profit Partner', image: placeholderImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'] },
    { id: 205, name: 'Shooting Stars Foundation', title: 'Non-Profit Partner', image: placeholderImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'] },
    { id: 206, name: 'Tamilnadu Foundation', title: 'Non-Profit Partner', image: placeholderImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'] }
];

const categories = [
    'All',
    'Founders',
    'HOPE3 Board',
    'HOPE3 Varsity',
    'Finance',
    'Admissions',
    'Student Relations',
    'Media',
    'Industrial Partners',
    'Non-Profit Partners'
];

const foundersIntro = `HOPE3 was founded by Mr. Palani Vairavan, with Mr. Neel Venkatraman and Dr. Meenakshi Sundaram joining the mission. Driven by the conviction that no student should be left behind, they champion every diligent, worthy young person—irrespective of background, language, or origin—granting them a genuine shot at soaring, succeeding, and forging brighter tomorrows. They turned this bold vision into reality, pioneering fresh realms of learning, access, and empowerment for Tamil medium students in Tamil Nadu, India. Imagine unleashing untapped genius in forgotten corners—HOPE3 makes it happen, one transformed life at a time. This unyielding principle pulses at HOPE3's core, shattering barriers and igniting futures for those society overlooks. No more dreams deferred: Every hardworking student rises, equipped to conquer real-world challenges.`;

const boardIntro = `HOPE3 Board is the governance body for HOPE3 Foundation overseeing all aspects of the effective and efficient performance of the Organization. They form the core team that oversees the operations of HOPE3 and Public Relations.`;

const varsityIntro = `HOPE3’s fundamental belief is in education that translates to real world applications, is immersive and is self-driven can generate our next-gen thinkers/leaders. They work and learn with students who carry enthusiasm to learn in spite of coming from challenging backgrounds. HOPE3 Varsity is the key strength to HOPE3’s overall success in transforming lives of students.`;

const admissionsIntro = `Admissions team takes care of the entire interview process starting from initial screening to final Varsity onboarding. They identifie students from underdeveloped villages, forest reserves, and refugee camps—not by their grades, but by their grit. Once selected, students enter a residential program that covers part-time college education, meals, healthcare, and immersive learning.`;

const studentRelationsIntro = `Student Relations mentors the students on various needs and topics. They are involved in the well being of the students, both physically and mentally.`;

const mediaIntro = `The Media team manages all aspects of the HOPE3 on digital space and social media space. They manage all the communications over these spaces.`;

const industrialIntro = `Our Industrial partners provide internship, mentorship, training support and networking opportunities to our students.`;

const nonProfitIntro = `Our non-profit partners provide support to our students and networking.`;


const financeIntro = `Finance team meticulously tracks all income and expenses and makes sure the organization is in compliance with the laws.`;

// Carousel Component for HOPE3 Varsity
const VarsityCarousel = ({ members, onHover, onClick, selectedId }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4; // Show 4 cards

    // Reset index if filtered members change significantly (optional, but good practice)
    // useEffect(() => setStartIndex(0), [members]); 

    const visibleMembers = members.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (startIndex + itemsPerPage < members.length) {
            setStartIndex(prev => prev + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(prev => prev - itemsPerPage);
        } else if (startIndex > 0) {
            setStartIndex(0);
        }
    };

    return (
        <div className="varsity-carousel-wrapper">
            <button
                className="carousel-arrow left"
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous"
            >
                ❮
            </button>
            <div className="varsity-grid-4">
                {visibleMembers.map((founder) => (
                    <div
                        key={founder.id}
                        className={`board-card premium-card ${selectedId === founder.id ? 'selected-card' : ''}`}
                        onClick={() => onClick && onClick(founder.id)}
                        onMouseEnter={() => onHover && onHover(founder.id)}
                    >
                        <div className="card-image-bg">
                            <img src={founder.image} alt={founder.name} />
                        </div>
                        <div className="card-gradient-overlay"></div>
                        <div className="card-content">
                            <h3 className="board-card-name">{founder.name}</h3>
                            <p className="board-card-title">{founder.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-arrow right"
                onClick={handleNext}
                disabled={startIndex + itemsPerPage >= members.length}
                aria-label="Next"
            >
                ❯
            </button>
        </div>
    );
};

const Founders = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedMemberId, setSelectedMemberId] = useState(null);
    const [lastInteractedCategory, setLastInteractedCategory] = useState(null);
    const filterSectionRef = useRef(null);

    const filteredFounders = activeCategory === 'All'
        ? foundersData
        : foundersData.filter(founder => founder.categories.includes(activeCategory));

    if (activeCategory === 'HOPE3 Varsity') {
        const stripPrefix = (name) => name.replace(/^(Mr\.|Mrs\.|Dr\.)\s+/i, '');
        filteredFounders.sort((a, b) => stripPrefix(a.name).localeCompare(stripPrefix(b.name)));
    } else if (activeCategory === 'Admissions') {
        const order = [
            "Mr. Arumugam",
            "Mr. Ganesh",
            "Mr. Gokul Kittusamy",
            "Mr. Manickam",
            "Dr. Meenakshi Sundaram",
            "Mr. Palani Vairavan",
            "Mr. Shivakumar"
        ];
        filteredFounders.sort((a, b) => {
            const indexA = order.indexOf(a.name);
            const indexB = order.indexOf(b.name);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.name.localeCompare(b.name);
        });
    } else if (activeCategory === 'Student Relations') {
        const order = [
            "Mr. Ganesh Gopalakrishnan",
            "Dr. Meenakshi Sundaram",
            "Mr. Palani Vairavan",
            "Mr. Shivakumar"
        ];
        filteredFounders.sort((a, b) => {
            const indexA = order.indexOf(a.name);
            const indexB = order.indexOf(b.name);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.name.localeCompare(b.name);
        });
    }

    // Reset selection when category changes
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setSelectedMemberId(null);
        setLastInteractedCategory(null);

        // Auto-scroll to filter section when category changes
        if (filterSectionRef.current) {
            filterSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const selectedMember = selectedMemberId ? foundersData.find(f => f.id === selectedMemberId) : null;

    return (
        <div className="founders-page">
            <Navbar />

            <div className="banner-block" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="banner-quote">
                    <p className="quote-text">
                        Empathy And Kindness Are The Greatest Strengths A Leader Can Possess
                    </p>
                    <p className="quote-author">~ Ratan Tata</p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="founders-filter" ref={filterSectionRef}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Intro Content - Conditionally Rendered */}
            {(activeCategory === 'All' || activeCategory === 'Founders') && (
                <div className="founders-intro-container">
                    <p className="founders-intro-text">
                        {foundersIntro}
                    </p>
                </div>
            )}
            {(activeCategory === 'HOPE3 Board' || activeCategory === 'HOPE3 Varsity' || activeCategory === 'Finance' || activeCategory === 'Admissions' || activeCategory === 'Student Relations' || activeCategory === 'Media' || activeCategory === 'Industrial Partners' || activeCategory === 'Non-Profit Partners') && (
                <div className="founders-intro-container">
                    <p className="founders-intro-text">
                        {(() => {
                            switch (activeCategory) {
                                case 'HOPE3 Board': return boardIntro;
                                case 'HOPE3 Varsity': return varsityIntro;
                                case 'Finance': return financeIntro;
                                case 'Admissions': return admissionsIntro;
                                case 'Student Relations': return studentRelationsIntro;
                                case 'Media': return mediaIntro;
                                case 'Industrial Partners': return industrialIntro;
                                case 'Non-Profit Partners': return nonProfitIntro;
                                default: return '';
                            }
                        })()}
                    </p>
                </div>
            )}

            <section className="founders-list-section">
                {activeCategory === 'All' ? (
                    // --- ALL CATEGORIES (Grouped Sections) ---
                    <div className="founders-content-area">
                        {categories
                            .filter(category => category !== 'All')
                            .map((category) => {
                                const categoryFounders = foundersData.filter(founder => founder.categories.includes(category));

                                if (category === 'HOPE3 Varsity') {
                                    const stripPrefix = (name) => name.replace(/^(Mr\.|Mrs\.|Dr\.)\s+/i, '');
                                    categoryFounders.sort((a, b) => stripPrefix(a.name).localeCompare(stripPrefix(b.name)));
                                } else if (category === 'Admissions') {
                                    const order = [
                                        "Mr. Arumugam",
                                        "Mr. Ganesh",
                                        "Mr. Gokul Kittusamy",
                                        "Mr. Manickam",
                                        "Dr. Meenakshi Sundaram",
                                        "Mr. Palani Vairavan",
                                        "Mr. Shivakumar"
                                    ];
                                    categoryFounders.sort((a, b) => {
                                        const indexA = order.indexOf(a.name);
                                        const indexB = order.indexOf(b.name);
                                        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                                        if (indexA !== -1) return -1;
                                        if (indexB !== -1) return 1;
                                        return a.name.localeCompare(b.name);
                                    });
                                } else if (category === 'Student Relations') {
                                    const order = [
                                        "Mr. Ganesh Gopalakrishnan",
                                        "Dr. Meenakshi Sundaram",
                                        "Mr. Palani Vairavan",
                                        "Mr. Shivakumar"
                                    ];
                                    categoryFounders.sort((a, b) => {
                                        const indexA = order.indexOf(a.name);
                                        const indexB = order.indexOf(b.name);
                                        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                                        if (indexA !== -1) return -1;
                                        if (indexB !== -1) return 1;
                                        return a.name.localeCompare(b.name);
                                    });
                                }

                                if (categoryFounders.length === 0) return null;

                                // Carousel Categories
                                if (category === 'HOPE3 Varsity' || category === 'Admissions') {
                                    return (
                                        <div key={category} className="category-section">
                                            <h2 className="section-title">{category}</h2>
                                            <VarsityCarousel
                                                members={categoryFounders}
                                                onClick={() => handleCategoryChange(category)}
                                            />

                                        </div>
                                    );
                                }
                                // Partner Categories (Logo/Company centric Marquee)
                                if (category === 'Industrial Partners' || category === 'Non-Profit Partners') {
                                    // Duplicate items for seamless scroll
                                    const marqueeItems = [...categoryFounders, ...categoryFounders];
                                    return (
                                        <div key={category} className="category-section">
                                            <h2 className="section-title">{category}</h2>
                                            <div className="partner-marquee-container">
                                                <div className="partner-marquee-track">
                                                    {marqueeItems.map((partner, idx) => (
                                                        <div
                                                            key={`${partner.id}-${idx}`}
                                                            className="marquee-item"
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => handleCategoryChange(category)}
                                                        >
                                                            <div className="marquee-logo-container">
                                                                <img src={partner.image} alt={partner.name} />
                                                            </div>
                                                            <span className="marquee-item-name">{partner.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }


                                return (
                                    <div key={category} className="category-section">
                                        <h2 className="section-title">{category}</h2>
                                        <div className={`board-grid ${category === 'HOPE3 Board' ? 'board-grid-5' : (category === 'Student Relations' ? 'board-grid-4' : '')}`}>
                                            {categoryFounders.map((founder) => (
                                                <div
                                                    key={`${category}-${founder.id}`}
                                                    className="board-card premium-card"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => handleCategoryChange(category)}
                                                >
                                                    <div className="card-image-bg">
                                                        <img src={founder.image} alt={founder.name} />
                                                    </div>
                                                    <div className="card-gradient-overlay"></div>
                                                    <div className="card-content">
                                                        <h3 className="board-card-name">{founder.name}</h3>
                                                        <p className="board-card-title">{founder.title}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                );
                            })}

                    </div>
                ) : (activeCategory === 'HOPE3 Varsity' || activeCategory === 'Admissions') ? (
                    // --- CAROUSEL MODE (Varsity & Admissions) ---
                    <div className="board-interaction-container">
                        <VarsityCarousel
                            members={filteredFounders}
                            onHover={setSelectedMemberId}
                            onClick={setSelectedMemberId}
                            selectedId={selectedMemberId}
                        />

                        {/* Inline Details Panel */}
                        {selectedMember && (
                            <div className="board-details-inline">
                                <button className="details-close-btn" onClick={() => setSelectedMemberId(null)}>✕</button>
                                <div className="inline-detail-content">
                                    <div className="inline-detail-left">
                                        <img src={selectedMember.image} alt={selectedMember.name} />
                                    </div>
                                    <div className="inline-detail-right">
                                        <h2 className="inline-detail-name">{selectedMember.name}</h2>
                                        <span className="inline-detail-title">{selectedMember.title}</span>
                                        {selectedMember.roleIntro && (
                                            <p className="role-intro-highlight">{selectedMember.roleIntro}</p>
                                        )}
                                        <p className="inline-detail-bio">{selectedMember.bio}</p>
                                        <div className="founder-contact">
                                            {selectedMember.email && (
                                                <a href={`mailto:${selectedMember.email}`} className="founder-email">
                                                    <span className="email-icon">✉</span> {selectedMember.email}
                                                </a>
                                            )}
                                            {selectedMember.linkedin && (
                                                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                                                    <span className="linkedin-icon">🔗</span> LinkedIn
                                                </a>
                                            )}
                                        </div>
                                        {selectedMember.categories.includes('Founders') && (
                                            <div className="founder-quote-box">
                                                <p className="founder-quote">"{selectedMember.quote}"</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (['HOPE3 Board', 'Finance', 'Student Relations', 'Media'].includes(activeCategory)) ? (
                    // --- GRID MODE (Common Layout) ---
                    <div className="board-interaction-container">
                        <div className={`board-grid ${activeCategory === 'HOPE3 Board' ? 'board-grid-5' : (activeCategory === 'Student Relations' ? 'board-grid-4' : '')}`}>
                            {filteredFounders.map((founder) => (
                                <div
                                    key={founder.id}
                                    className={`board-card premium-card ${selectedMemberId === founder.id ? 'selected-card' : ''}`}
                                    onClick={() => setSelectedMemberId(founder.id)}
                                    onMouseEnter={() => setSelectedMemberId(founder.id)}
                                >
                                    <div className="card-image-bg">
                                        <img src={founder.image} alt={founder.name} />
                                    </div>
                                    <div className="card-gradient-overlay"></div>
                                    <div className="card-content">
                                        <h3 className="board-card-name">{founder.name}</h3>
                                        <p className="board-card-title">{founder.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Inline Details Panel */}
                        {selectedMember && (
                            <div className="board-details-inline">
                                <button className="details-close-btn" onClick={() => setSelectedMemberId(null)}>✕</button>
                                <div className="inline-detail-content">
                                    <div className="inline-detail-left">
                                        <img src={selectedMember.image} alt={selectedMember.name} />
                                    </div>
                                    <div className="inline-detail-right">
                                        <h2 className="inline-detail-name">{selectedMember.name}</h2>
                                        <span className="inline-detail-title">{selectedMember.title}</span>
                                        {selectedMember.roleIntro && (
                                            <p className="role-intro-highlight">{selectedMember.roleIntro}</p>
                                        )}
                                        <p className="inline-detail-bio">{selectedMember.bio}</p>
                                        <div className="founder-contact">
                                            {selectedMember.email && (
                                                <a href={`mailto:${selectedMember.email}`} className="founder-email">
                                                    <span className="email-icon">✉</span> {selectedMember.email}
                                                </a>
                                            )}
                                            {selectedMember.linkedin && (
                                                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                                                    <span className="linkedin-icon">🔗</span> LinkedIn
                                                </a>
                                            )}
                                        </div>
                                        {selectedMember.categories.includes('Founders') && (
                                            <div className="founder-quote-box">
                                                <p className="founder-quote">"{selectedMember.quote}"</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (activeCategory === 'Industrial Partners' || activeCategory === 'Non-Profit Partners') ? (
                    // --- PARTNER MARQUEE VIEW (Industrial & Non-Profit) ---
                    <div className="board-interaction-container">
                        <div className="partner-marquee-container">
                            <div className="partner-marquee-track">
                                {[...filteredFounders, ...filteredFounders].map((partner, idx) => (
                                    <div
                                        key={`${partner.id}-${idx}`}
                                        className={`marquee-item ${selectedMemberId === partner.id ? 'selected-marquee-item' : ''}`}
                                        onClick={() => setSelectedMemberId(partner.id)}
                                        onMouseEnter={() => setSelectedMemberId(partner.id)}
                                    >
                                        <div className="marquee-logo-container">
                                            <img src={partner.image} alt={partner.name} />
                                        </div>
                                        <span className="marquee-item-name">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Inline Details Panel for Partners in Filtered view */}
                        {selectedMember && (
                            <div className="board-details-inline partner-details">
                                <button className="details-close-btn" onClick={() => setSelectedMemberId(null)}>✕</button>
                                <div className="inline-detail-content">
                                    <div className="inline-detail-left">
                                        <img src={selectedMember.image} alt={selectedMember.name} />
                                    </div>
                                    <div className="inline-detail-right">
                                        <h2 className="inline-detail-name">{selectedMember.name}</h2>
                                        <span className="inline-detail-title">{selectedMember.title}</span>
                                        <p className="inline-detail-bio">{selectedMember.bio}</p>
                                        <div className="founder-contact">
                                            {selectedMember.email && (
                                                <a href={`mailto:${selectedMember.email}`} className="founder-email">
                                                    <span className="email-icon">✉</span> {selectedMember.email}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // --- STANDARD LIST VIEW (For any unlikely leftovers) ---
                    filteredFounders.length > 0 ? (
                        filteredFounders.map((founder, index) => (
                            <div
                                key={founder.id}
                                className={`founder-card-row ${index % 2 !== 0 ? 'reversed' : ''}`}
                            >
                                <div className="founder-image-col">
                                    <div className="founder-image-wrapper">
                                        <img src={founder.image} alt={founder.name} />
                                    </div>
                                </div>

                                <div className="founder-content-col">
                                    <h2 className="founder-name">{founder.name}</h2>
                                    <span className="founder-title">{founder.title}</span>

                                    {founder.roleIntro && (
                                        <p className="role-intro-highlight">{founder.roleIntro}</p>
                                    )}
                                    <p className="founder-bio">{founder.bio}</p>

                                    <div className="founder-contact">
                                        {founder.email && (
                                            <a href={`mailto:${founder.email}`} className="founder-email">
                                                <span className="email-icon">✉</span> {founder.email}
                                            </a>
                                        )}
                                        {founder.linkedin && (
                                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                                                <span className="linkedin-icon">🔗</span> LinkedIn
                                            </a>
                                        )}
                                    </div>

                                    {founder.categories.includes('Founders') && (
                                        <div className="founder-quote-box">
                                            <p className="founder-quote">"{founder.quote}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-2xl text-gray-400 font-medium">Coming Soon</h3>
                            <p className="text-gray-500 mt-2">We are currently updating our {activeCategory} team.</p>
                        </div>
                    )
                )}
            </section>


            <NewFooter />
        </div>
    );
};

export default Founders;
