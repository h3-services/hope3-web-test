import { useState } from 'react';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import './Founders.css';
import BannerImage from '../assets/leader-banner.webp';

// Founder Images
import palaniImage from '../assets/pillars/palani.png';
import neelImage from '../assets/pillars/neel.png';
import meenachiImage from '../assets/pillars/meenachi.png';
import ganeshImage from '../assets/pillars/ganesh.png';
import manickamImage from '../assets/pillars/manickam.png';

const foundersData = [
    {
        id: 1,
        name: "Mr. Palaniappan (Palani) Vairavan",
        title: "Founder",
        image: palaniImage,
        bio: "Palani is the founder of HOPE3. He also serves on the HOPE3 Board, HOPE3 Varsity, Admissions and Student Relations. Mr. Palaniappan Vairavan is an educator, entrepreneur, and visionary who strongly believes that education is the key to addressing many of today’s societal challenges. He serves as the President of the HOPE3 Foundation and the Dean of the Computer Science Department at HOPE3 Varsity. Since 2016, Palaniappan has been actively volunteering with several educational nonprofit organizations, working to level the playing field for circumstantially challenged students. He was instrumental in the conception of HOPE3, recognizing the need to provide high-quality educational opportunities to talented students who lack adequate resources or exposure. At HOPE3 Varsity, he teaches data structures, algorithms, and web and mobile application development. Professionally, Palaniappan is a Software Engineering manager at Amazon in Washington. He holds a Master of Science degree in Computer Science from East Carolina University. Outside of his professional and educational pursuits, he enjoys playing tennis, pickle ball and spending time outdoors with his family.",
        email: "palani@hope3.org",
        quote: "Education can alleviate most of the key challenges faced by society today.",
        achievements: [
            "President of HOPE3 Foundation",
            "Dean of Computer Science at HOPE3 Varsity",
            "Software Engineering Manager at Amazon",
            "MS in Computer Science from East Carolina University"
        ],
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity']
    },
    {
        id: 2,
        name: "Mr. Neelakandan (Neel) Venkatraman",
        title: "Co-Founder",
        image: neelImage,
        bio: "Neel is the co-founder of HOPE3. He also serves on the HOPE3 Board and HOPE3 Varsity. Neel Venkataraman is passionate about learning and teaching. Neel has been part of the Hope 3 Foundation as a member in governing body since the inception of the non profit organization. Neel is motivated to create a change through personal awareness and social engagement, especially within upcoming generation. In addition to being an advisor to the Hope 3 foundation long term strategy and regular activities, Neel enjoys connecting with students through Soft Skills club, as part of Hope3 Varsity. Professionally, Neel is a Director of Hardware Engineering at Apple. Prior to that Neel was working at Microsoft for more than 17 years. Neelakandan has a Masters in Business Administration degree from University of Wisconsin and Bachelors of Mechanical Engineering from Kumaraguru College of Technology, Coimbatore, India.",
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
        image: meenachiImage,
        bio: "Meenakshi is the founder of HOPE3. He also serves on the HOPE3 Board, HOPE3 Varsity, Admissions and Student Relations. Dr. Meenakshi Sundaram is an educator, scientist, and a yoga, meditation enthusiast. He is one of the founding members of HOPE3 Foundation and is the president of HOPE3 Varsity the educational wing of HOPE3 Foundation. He believes in education that is actionable and education that builds a seeking (research) mindset. Meenakshi actively engages in a wide variety of HOPE3 Varsity classes as a mentor and many a time as a student. He is also a certified breathwork and meditation instructor with the Art of Living Foundation. Meenakshi works in Intel Corporation, Oregon, as a process engineer helping in the manufacturing process of semiconductor chips. He holds a MS and PhD from Cornell University, New York, in Mechanical Engineering, and a M Tech in Computational Science from Indian Institute of Science, Bangalore.",
        email: "meenakshi.sundaram@hope3.org",
        quote: "Education should be actionable and build a seeking (research) mindset.",
        achievements: [
            "Process Engineer at Intel Corporation",
            "PhD within Mechanical Engineering from Cornell University",
            "Certified Breathwork & Meditation Instructor",
            "President of HOPE3 Varsity"
        ],
        categories: ['Founders', 'HOPE3 Board', 'HOPE3 Varsity']
    },
    {
        id: 4,
        name: "Mr. Ganesh Gopalakrishnan",
        title: "HOPE3 Board Member",
        image: ganeshImage,
        bio: "Ganesh serves on the HOPE3 Board, Finance, Admissions and Student Relations. Ganesh has been volunteering for Hope3 from 2020. He is working behind the scenes in the accounting and finance section of the organization. He is also involved in admissions and student relations. As a day job, Ganesh is a Director at AlixPartners LLP.",
        email: "ganesh@hope3.org",
        quote: "Supporting the backbone of HOPE3's mission through financial stewardship.",
        categories: ['HOPE3 Board', 'Finance', 'Admissions', 'Student Relations']
    },
    {
        id: 5,
        name: "Mr. Manickam Chockalingam",
        title: "HOPE3 Board Member",
        image: manickamImage,
        bio: "Manickam serves on the HOPE3 Board, HOPE3 Varsity and Admissions. Manickam is a technology leader and mentor who firmly believes that education and meaningful exposure are powerful catalysts for long-term social impact. Professionally, Manickam serves as a Software Engineering Manager at Axon Enterprise.",
        email: "manickam@hope3.org",
        quote: "Education and meaningful exposure are powerful catalysts for long-term social impact.",
        categories: ['HOPE3 Board', 'HOPE3 Varsity', 'Admissions']
    }
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

const Founders = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredFounders = activeCategory === 'All'
        ? foundersData
        : foundersData.filter(founder => founder.categories.includes(activeCategory));

    return (
        <div className="founders-page">
            <Navbar />

            <div className="banner-block" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="banner-quote">
                    <p className="quote-text">
                        "Empathy And Kindness Are The Greatest Strengths A Leader Can Possess"
                    </p>
                    <p className="quote-author">~ Ratan Tata</p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="founders-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
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
            {activeCategory === 'HOPE3 Board' && (
                <div className="founders-intro-container">
                    <p className="founders-intro-text">
                        {boardIntro}
                    </p>
                </div>
            )}

            <section className="founders-list-section">
                {filteredFounders.length > 0 ? (
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

                                <p className="founder-bio">{founder.bio}</p>

                                <div className="founder-contact">
                                    <a href={`mailto:${founder.email}`} className="founder-email">
                                        <span className="email-icon">✉</span> {founder.email}
                                    </a>
                                </div>

                                <div className="founder-quote-box">
                                    <p className="founder-quote">"{founder.quote}"</p>
                                </div>


                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl text-gray-400 font-medium">Coming Soon</h3>
                        <p className="text-gray-500 mt-2">We are currently updating our {activeCategory} team.</p>
                    </div>
                )}
            </section>


            <NewFooter />
        </div>
    );
};

export default Founders;
