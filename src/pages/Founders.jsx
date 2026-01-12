import { useState, useRef, useEffect } from 'react';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import './Founders.css';
import BannerImage from '../assets/leader-banner.webp';


// Founders images
import palaniImage from '../assets/leadersboard/founders/Palani.jpeg';
import neelImage from '../assets/leadersboard/founders/neel.jpeg';
import meenachiImage from '../assets/leadersboard/founders/Meenakshi-02.jpeg';

// Board members
import ganeshImage from '../assets/leadersboard/board/Ganesh (2).jpeg';
import manickamImage from '../assets/leadersboard/board/Manickam (1).jpeg';

// Varsity members
import anirudhImage from '../assets/leadersboard/varsity/Anirudh.jpeg';
import balajiImage from '../assets/leadersboard/varsity/Balaji-01.jpeg';
import amrishImage from '../assets/leadersboard/varsity/Amrish.jpg';
import hemaImage from '../assets/leadersboard/varsity/Hema.jpg';
import karthikeyanImage from '../assets/leadersboard/varsity/Karthikeyan.jpeg';
import nachiappanImage from '../assets/leadersboard/varsity/Nachiappan.jpeg';
import pichumaniImage from '../assets/leadersboard/varsity/Pichumani.jpg';
import ramuImage from '../assets/leadersboard/varsity/Ramu Palaniappan.jpg';
import vijayakumarImage from '../assets/leadersboard/varsity/VijayaKumar.jpg';
import shivakumarImage from '../assets/leadersboard/varsity/shivakumar.png';

// Admissions
import arumugamImage from '../assets/leadersboard/admission/Arumugam.jpeg';
import gokulImage from '../assets/leadersboard/admission/Gokul.jpeg';

// Finance
import raghulImage from '../assets/leadersboard/finance/Raghul-01 (2).jpg';

// Non-Profit Partners
import abdulKalamFoundationImage from '../assets/leadersboard/nonProfitPartners/abdulkalamFoundation.png';
import abdulKalamTrustImage from '../assets/leadersboard/nonProfitPartners/abdulkalamTrust.png';
import mugavariImage from '../assets/leadersboard/nonProfitPartners/mugavariFoundation.png';
import namcoImage from '../assets/leadersboard/nonProfitPartners/namco.png';
import shootingStarsImage from '../assets/leadersboard/nonProfitPartners/shootingstarFundation.png';
import tamilnaduFoundationImage from '../assets/leadersboard/nonProfitPartners/tamilanduFoundation.png';

// Industrial Partners
import anvithaImage from '../assets/industrialPartner/unwita.jpeg';
import arjavaImage from '../assets/industrialPartner/arjava_desk.png';
import cytronicxImage from '../assets/industrialPartner/cytronix.jpeg';
import elarchitekImage from '../assets/industrialPartner/elarchitek.jpeg';
import dnlogoImage from '../assets/industrialPartner/TNlogo.png';

// Placeholder for industrial partners (use a generic image)
const placeholderImage = palaniImage;


const foundersData = [
    {
        id: 1,
        name: "Mr. Palaniappan (Palani) Vairavan",
        title: "President",
        image: palaniImage,
        roleIntro: "Palani is the founder of HOPE3. He also serves on the HOPE3 Board, HOPE3 Varsity, Admissions and Student Relations.",
        bio: "Palani is an educator, entrepreneur, and visionary who strongly believes that education is the key to addressing many of today’s societal challenges. He serves as the President of the HOPE3 Foundation and the Dean of the Computer Science Department at HOPE3 Varsity.",
        email: "palani@hope3.org",
        // quote: "Education is the key to addressing many of today’s societal challenges.",
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity', 'Admissions', 'Student Relations']
    },
    {
        id: 2,
        name: "Mr. Neelakandan (Neel) Venkatraman",
        title: "Co-Founder",
        image: neelImage,
        roleIntro: "Neel is the co-founder of HOPE3. He also serves on the HOPE3 Board and HOPE3 Varsity.",
        bio: "Neel is the co-founder of HOPE3. He also serves on the HOPE3 Board and HOPE3 Varsity. In addition to being an advisor to the Hope 3 foundation long term strategy and regular activities, Neel enjoys connecting with students through Soft Skills club, as part of HOPE3 Varsity.",
        email: "neel@hope3.org",
        // quote: "Creating change through personal and social awareness.",
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity']
    },
    {
        id: 3,
        name: "Dr. Meenakshi Sundaram",
        title: "President of HOPE3 Varsity",
        image: meenachiImage,
        roleIntro: "Meenakshi is one of the founding members of HOPE3 Foundation and is the president of HOPE3 Varsity the educational wing of HOPE3 Foundation. He also serves on the HOPE3 Board, HOPE3 Varsity, Admissions and Student Relations.",
        bio: "Meenakshi actively engages in a wide variety of HOPE3 Varsity classes as a mentor and many a time as a student.",
        email: "meenakshi.sundaram@hope3.org",
        // quote: "Education should be actionable and build a seeking (research) mindset.",
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity', 'Admissions', 'Student Relations']
    },
    {
        id: 4,
        name: "Mr. Ganesh Gopalakrishnan",
        title: "HOPE3 Board Member",
        image: ganeshImage,
        bio: "Ganesh serves on the HOPE3 Board, Finance, Admissions and Student Relations. Ganesh has been volunteering for HOPE3 from 2020. He is working behind the scenes in the accounting and finance section of the organization. He is also involved in admissions and student relations. As a day job, Ganesh is a Director at AlixPartners LLP.",
        email: "ganesh@hope3.org",
        linkedin: "https://www.linkedin.com/in/ganeshagopal/",
        categories: ['HOPE3 Board', 'Finance', 'Admissions', 'Student Relations']
    },
    {
        id: 5,
        name: "Mr. Manickam Chockalingam",
        title: "HOPE3 Board Member",
        image: manickamImage,
        bio: "Manickam serves on the HOPE3 Board, HOPE3 Varsity and Admissions. Manickam is a technology leader and mentor who firmly believes that education and meaningful exposure are powerful catalysts for long-term social impact. Professionally, Manickam serves as a Software Engineering Manager at Axon Enterprise.",
        email: "manickam@hope3.org",
        linkedin: "https://www.linkedin.com/in/manickam-chockalingam-3846223/",
        categories: ['HOPE3 Board', 'HOPE3 Varsity', 'Admissions']
    },
    {
        id: 6,
        name: "Mr. Amrish",
        title: "HOPE3 Varsity Member",
        image: amrishImage,
        bio: "Amrish has been part of HOPE3 Varsity since his college days, where he learnt computer science. He has worked on several projects like Find a Bed, Sorting Analysis, Bright Brains, etc. HOPE3 has played a major role in shaping his career journey. He actively mentors and guides students in their learning and project journeys, continuing the HOPE3 spirit of giving back.",
        linkedin: "https://www.linkedin.com/in/amrish-k-s-1562b5190/",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 27,
        name: "Miss. Ananya Somasundaram",
        title: "Vocabulary Mentor",
        image: placeholderImage,
        bio: "Ananya is in tenth grade, living in Plano, Texas. She selects a word and provides its meaning along with an example sentence in both English and Tamil to help the students expand their vocabulary.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 7,
        name: "Mr. Anirudh Ashok",
        title: "Product Management Leader",
        image: anirudhImage,
        bio: "At HOPE3 Varsity, Anirudh teaches students how to test business ideas using the business model canvas and value proposition design. Professionally, He is a product management leader in Healthcare Technology and the founder of https://FolioForge.org. He is based in Boston, MA, USA.",
        linkedin: "https://www.linkedin.com/in/anirudhashok",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 8,
        name: "Mr. Balaji Ganesan",
        title: "AI Engineer",
        image: balajiImage,
        bio: "Balaji, a Master’s graduate in Software Engineering and currently working as an AI Engineer at Wolken Software. He is based in Seattle, Washington. During his undergraduate studies in India, he was an active member of the HOPE3 Varsity program, where he participated in TypeScript and Data Structures & Algorithms (DSA) training. He also volunteered in several Hope events conducted across Tamilnadu. After completing his undergraduate degree, he conducted a JavaScript course for the next batch of students, mentoring and sharing practical industry knowledge.",
        linkedin: "https://www.linkedin.com/in/balaji-ganesan-492358145",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 19,
        name: "Mrs. Hemalatha Kannappan",
        title: "Vocabulary Facilitator",
        image: hemaImage,
        bio: "She shares an English word with its definition provided by Ananya in a group chat for the students and asks them to use it in a sentence. She then reviews their sentences, verify correctness, and provide feedback when needed. This helps them grow their vocabulary gradually. Hema lives in Plano, Texas.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 20,
        name: "Mr. Karthikeyan Rajendran",
        title: "Senior Software Engineer at Amazon",
        image: karthikeyanImage,
        bio: "Karthikeyan is a Senior Software Engineer at Amazon based in Washington, USA. Passionate about software architecture, AI, and developer productivity, he brings deep technical expertise to his volunteer work. Outside of technology, Karthikeyan is an avid hiker and a martial artist who practices and teaches Silambam. He has been involved with HOPE3 since 2021, mentoring and guiding students through their learning journeys and projects.",
        linkedin: "https://www.linkedin.com/in/karthikeyanrajendran/",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 21,
        name: "Mr. Nachiappan Ramasamy",
        title: "Software Engineer at Google",
        image: nachiappanImage,
        bio: "Nachi is a software engineer at Google based in the Bay Area, California. At Hope3, he volunteers by learning and teaching alongside students through hands-on tech projects. Together, they break down concepts, build solutions, and learn by doing. He believes in learning through practice, teamwork, and shared curiosity.",
        linkedin: "https://www.linkedin.com/in/nachiappan-rm/",
        categories: ['HOPE3 Varsity', 'Media']
    },
    {
        id: 22,
        name: "Mr. Pichumani",
        title: "HOPE3 Varsity Member",
        image: pichumaniImage,
        bio: "Bio coming soon.",
        quote: "Dedicated to student growth.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 23,
        name: "Mrs. Ramu Palaniappan",
        title: "HOPE3 Varsity Member",
        image: ramuImage,
        bio: "Bio coming soon.",
        quote: "Fostering learning environments.",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 24,
        name: "Mr. Sivakumar (Shiva) KS",
        title: "Operations Manager & Mentor",
        image: shivakumarImage,
        bio: "Shiva is a Mentor and Caretaker for HOPE3 students at the Karaikudi facility. He is also the Operations Manager for HOPE3 Services. His vision is to build a Nanban School. He also serves on the Admissions, Student Relations and HOPE3 Media team.",
        categories: ['HOPE3 Varsity', 'Admissions', 'Student Relations', 'Media']
    },
    {
        id: 25,
        name: "Mr. Vijaya Kumar S",
        title: "Associate Software Engineer at Informatica",
        image: vijayakumarImage,
        bio: "Vijaya Kumar is an Associate Software Engineer at Informatica in Bangalore, Karnataka. As part of Hope3 Varsity, he volunteers by supporting students with Java sessions, subject guidance, and placement preparation.",
        linkedin: "https://www.linkedin.com/in/vijaya-kumar--s/",
        categories: ['HOPE3 Varsity']
    },
    {
        id: 17,
        name: "Mr. Arumugam AP",
        title: "Graduate Science Teacher",
        image: arumugamImage,
        bio: "Arumugam is no stranger to helping students. He is a graduate science teacher at govt. higher secondary schools. He provides free NEET coaching to deserving students and free career guidance to thousands of students. He received several awards – Anbu Aasiriyar Award in 2025, Kalvi Ratna for Education and Kalam Award for social services in 2019, among many more. He works with the Admissions team at HOPE3 for student intake.",
        categories: ['Admissions']
    },
    {
        id: 18,
        name: "Mr. Gokul Kittusamy",
        title: "Admissions Facilitator",
        image: gokulImage,
        bio: "Gokul is a Production Engineer from MIT from Anna University. He is the facilitator at HOPE3's Chennai residence, helps identify students in tribal zones and camps, and co-leads a visual communication program. He co-founded Iyal Foundation, bringing practical science education to government schools. He is the founder and CEO of Elarchitek (https://elarchitek.com/) , an electronics kit company with NIT students, sourcing components, building manuals, and distributing 50+ kits to schools. Elarchitek, a 3D printing startup focuses on practical innovation.",
        email: "gokul@hope3.org",
        linkedin: "https://www.linkedin.com/in/gokul-kittusamy-aaa66328b",
        categories: ['Admissions', 'Student Relations']
    },
    {
        id: 26,
        name: "Mr. Raghul Vijayan",
        title: "Validation Test Lead",
        image: raghulImage,
        bio: "Raghul Works as Validation Test Lead at Cognizant for 6 years in Chennai. He takes care of all India related expenses - student fees, administrative expenses. He coordinateds with other supporting NGOs like LIONS, ARPNA to get FCRA funds processed. He also helps take care of Chennai RCD students and alumni relations.",
        categories: ['Finance']
    },
    {
        id: 27,
        name: "Mr. Meiy palaniappan",
        title: "Validation Test Lead",
        image: pichumaniImage,
        bio: "Coming soon",
        categories: ['HOPE3 Varsity']
    },

    // --- Industrial Partners ---
    { id: 101, name: 'Anvitha Insights', title: 'Industrial Partner', image: anvithaImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'], website: 'http://www.unwita.com' },
    { id: 102, name: 'Arjavatech', title: 'Industrial Partner', image: arjavaImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'], website: 'https://arjavatech.com/' },
    { id: 103, name: 'cytronicx', title: 'Industrial Partner', image: cytronicxImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'], website: 'https://www.cytronicx.com/' },
    { id: 104, name: 'Elarchitek', title: 'Industrial Partner', image: elarchitekImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'], website: 'https://elarchitek.com/' },
    { id: 105, name: 'TNNGO', title: 'Industrial Partner', image: dnlogoImage, bio: 'Industrial Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Industrial Partners'], website: 'https://tnngo.org/' },

    // --- Non-Profit Partners ---
    { id: 201, name: 'Abdul Kalam Foundation', title: 'Non-Profit Partner', image: abdulKalamFoundationImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'], website: 'https://apjabdulkalamfoundation.org/' },
    { id: 202, name: 'Abdul Kalam Trust', title: 'Non-Profit Partner', image: abdulKalamTrustImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'], website: 'https://www.drabdulkalamtrust.org/' },
    { id: 203, name: 'Mugavari Foundation', title: 'Non-Profit Partner', image: mugavariImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'], website: 'https://www.mugavarifoundation.org/' },
    { id: 204, name: 'Namco', title: 'Non-Profit Partner', image: namcoImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'], website: 'https://namcoindia.org.in/' },
    { id: 205, name: 'Shooting Stars Foundation', title: 'Non-Profit Partner', image: shootingStarsImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'], website: 'https://shooting-stars-foundation.org/' },
    { id: 206, name: 'Tamilnadu Foundation', title: 'Non-Profit Partner', image: tamilnaduFoundationImage, bio: 'Non-Profit Partner', email: 'partner@hope3.org', quote: 'Partnering for success.', categories: ['Non-Profit Partners'], website: 'https://tnfindia.org/' }
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

// Carousel Component for HOPE3 Varsity (4 cards at a time with auto-play)
const VarsityCarousel = ({ members, onHover, onClick, selectedId }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const itemsPerPage = 4;

    const visibleMembers = members.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (startIndex + itemsPerPage < members.length) {
            setStartIndex(prev => prev + itemsPerPage);
        } else {
            setStartIndex(0);
        }
    };

    const handlePrev = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(prev => prev - itemsPerPage);
        } else if (startIndex > 0) {
            setStartIndex(0);
        }
    };

    // Reset index if filtered members change
    useEffect(() => {
        setStartIndex(0);
    }, [members]);

    // Auto-play every 4 seconds
    useEffect(() => {
        if (!isPaused && members.length > itemsPerPage) {
            const interval = setInterval(() => {
                handleNext();
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [startIndex, isPaused, members.length]);

    return (
        <div
            className="varsity-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
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
                disabled={members.length <= itemsPerPage}
                aria-label="Next"
            >
                ❯
            </button>
        </div >
    );
}; const Founders = () => {
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
            "Mr. Arumugam AP",
            "Mr. Ganesh Gopalakrishnan",
            "Mr. Gokul Kittusamy",
            "Mr. Manickam Chockalingam",
            "Dr. Meenakshi Sundaram",
            "Mr. Palaniappan (Palani) Vairavan"
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
            "Mr. Gokul Kittusamy",
            "Mr. Palaniappan (Palani) Vairavan",
            "Mr. Sivakumar (Shiva) KS"
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
                                        "Mr. Arumugam AP",
                                        "Mr. Ganesh Gopalakrishnan",
                                        "Mr. Gokul Kittusamy",
                                        "Mr. Manickam Chockalingam",
                                        "Dr. Meenakshi Sundaram",
                                        "Mr. Palaniappan (Palani) Vairavan"
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
                                        "Mr. Gokul Kittusamy",
                                        "Mr. Palaniappan (Palani) Vairavan",
                                        "Mr. Sivakumar (Shiva) KS"
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
                                                            onClick={() => {
                                                                if (partner.website) {
                                                                    window.open(partner.website, '_blank', 'noopener,noreferrer');
                                                                } else {
                                                                    handleCategoryChange(category);
                                                                }
                                                            }}
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
                                        <div className={`board-grid ${category === 'HOPE3 Board' || category === 'Student Relations' ? 'board-grid-5' : ''}`}>
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
                        <div className={`board-grid ${activeCategory === 'HOPE3 Board' || activeCategory === 'Student Relations' ? 'board-grid-5' : ''}`}>
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
                                        onClick={() => {
                                            if (partner.website) {
                                                window.open(partner.website, '_blank', 'noopener,noreferrer');
                                            }
                                            setSelectedMemberId(partner.id);
                                        }}
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
                                            {selectedMember.website && (
                                                <a href={selectedMember.website} target="_blank" rel="noopener noreferrer" className="founder-linkedin" style={{ marginLeft: '10px' }}>
                                                    <span className="website-icon">🌐</span> Visit Website
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
                                        {founder.website && (
                                            <a href={founder.website} target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                                                <span className="website-icon">🌐</span> Website
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










