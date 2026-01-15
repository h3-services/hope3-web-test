import React, { useState } from 'react';
import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';
import { Search, Grid, List, Calendar, User, ChevronRight, X, Clock } from 'lucide-react';
import MediaSidebar from '../components/media/MediaSidebar';
import '../styles/Media.css';

// Import local images
import ruralStudentImg from '../assets/images/pages/news/rural_student_smartphone.png';
import governmentSchoolImg from '../assets/images/pages/news/government_school_classroom.png';
import studentsCodingImg from '../assets/images/pages/news/students_coding_laptops.png';
import mentorshipImg from '../assets/images/pages/news/mentorship_session.png';

// Sample data with local images
const FEATURED_NEWS = {
    id: 1,
    title: "A boy who couldn't use an iPhone is now building apps for it",
    excerpt: "A student who once had no access to modern technology is now developing mobile applications. With the right guidance and support, opportunity turned into achievement.",
    image: ruralStudentImg,
    category: "Impact",
    author: "Palani Vairavan",
    date: "Jan 16, 2026"
};

const SMALL_NEWS = [
    {
        id: 2,
        title: "Government school students are now clearing IIT exams and entering IIT Madras",
        excerpt: "Students from government schools, once limited by resources, are now achieving top results and earning places at premier institutions through focused training and mentorship.",
        image: governmentSchoolImg,
        category: "Education",
        author: "Armin Vans",
        date: "Jan 8, 2026"
    },
    {
        id: 3,
        title: "Students who had never used a laptop are now building large-scale applications",
        excerpt: "From learning basic computer skills to developing real-world software projects, these students are now confident creators in the digital world.",
        image: studentsCodingImg,
        category: "Skill Development",
        author: "John Doe",
        date: "Jan 5, 2026"
    },
    {
        id: 4,
        title: "They lacked resources, but they never lacked dreams",
        excerpt: "Financial limitations did not stop their ambition. Through mentorship, encouragement, and continuous support, dreams are turning into real opportunities.",
        image: mentorshipImg,
        category: "Mentorship",
        author: "Sarah Smith",
        date: "Jan 3, 2026"
    }
];

const MEDIA_ITEMS = [
    {
        id: 1,
        title: "Education Support Program",
        excerpt: "An overview of how HOPE3 Foundation supports students through education initiatives.",
        image: "https://img.youtube.com/vi/IDMC34rzWwk/maxresdefault.jpg",
        category: "Education",
        author: "HOPE3 Foundation",
        date: "Jan 15, 2026",
        link: "https://youtu.be/IDMC34rzWwk?si=68AuuoiTRqWbg7rA"
    },
    {
        id: 2,
        title: "Annual Sports Day Celebration",
        excerpt: "Students participate in sports activities that encourage teamwork and confidence.",
        image: "https://img.youtube.com/vi/74NKASH2-Rk/maxresdefault.jpg",
        category: "Events",
        author: "HOPE3 Foundation",
        date: "Jan 14, 2026",
        link: "https://youtu.be/74NKASH2-Rk?si=onQPGqySN3n-AtGq"
    },
    {
        id: 3,
        title: "English Communication Training Session",
        excerpt: "A training program focused on improving spoken English and communication skills.",
        image: "https://img.youtube.com/vi/j6pTv_lYMDE/maxresdefault.jpg",
        category: "Education",
        author: "HOPE3 Foundation",
        date: "Jan 12, 2026",
        link: "https://youtu.be/j6pTv_lYMDE?si=ecxnP2QJ07nGiou3"
    },
    {
        id: 4,
        title: "Community Awareness Program",
        excerpt: "An initiative aimed at spreading social awareness and understanding among communities.",
        image: "https://img.youtube.com/vi/yBdzHOTwJrQ/maxresdefault.jpg",
        category: "Awareness",
        author: "Tamilians",
        date: "Jan 10, 2026",
        link: "https://youtu.be/yBdzHOTwJrQ?si=5Y20bH8HABwIwYIS"
    },
    {
        id: 5,
        title: "Supporting Rural Students Through Education",
        excerpt: "Highlighting educational assistance provided to students from rural backgrounds.",
        image: "https://img.youtube.com/vi/z_n0PqhIuKA/maxresdefault.jpg",
        category: "Education",
        author: "HOPE3 Foundation",
        date: "Jan 08, 2026",
        link: "https://youtu.be/z_n0PqhIuKA?si=yiNPUHhVNpPjdIIM"
    },
    {
        id: 6,
        title: "Student Development & Skill Training Program",
        excerpt: "Empowering students with essential skills for personal and professional growth.",
        image: "https://img.youtube.com/vi/t1J9s87Zh7o/maxresdefault.jpg",
        category: "Education",
        author: "HOPE3 Foundation",
        date: "Jan 05, 2026",
        link: "https://youtu.be/t1J9s87Zh7o?si=0IjyLKeYIMK-nYlb"
    },
    {
        id: 7,
        title: "HOPE3 Foundation Field Activities",
        excerpt: "A look at on-ground activities carried out by volunteers and team members.",
        image: "https://img.youtube.com/vi/oYm3MR3DU3A/maxresdefault.jpg",
        category: "Community",
        author: "HOPE3 Foundation",
        date: "Jan 03, 2026",
        link: "https://youtu.be/oYm3MR3DU3A?si=f25e6JXPFfMYYlLN"
    },
    {
        id: 8,
        title: "Awareness & Outreach Initiative",
        excerpt: "Reaching communities through education-focused outreach programs.",
        image: "https://img.youtube.com/vi/7ZDF4-hB5Ec/maxresdefault.jpg",
        category: "Awareness",
        author: "HOPE3 Foundation",
        date: "Jan 01, 2026",
        link: "https://youtu.be/7ZDF4-hB5Ec?si=70Wm8WdZcvL9Uunl"
    }
];

const CATEGORIES = ["All", "Impact Stories", "Events", "Education", "Awareness", "Community", "Updates"];

const Media = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [viewMode, setViewMode] = useState("grid");
    const [playingVideoId, setPlayingVideoId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMedia = MEDIA_ITEMS.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Magazine Hero Section */}
            <main className="news-hero-section">
                <div className="news-hero-grid-container">
                    <div className="hero-main-layout">
                        {/* LEFT: Big Feature Card */}
                        <div className="hero-card-base animate-fade-in-up">
                            <img src={FEATURED_NEWS.image} alt="" className="hero-image-fill" />
                            <div className="hero-black-overlay"></div>
                            <div className="hero-text-content">
                                <span className="hero-category-badge">{FEATURED_NEWS.category}</span>
                                <h2 className="text-xl lg:text-2xl font-bold">{FEATURED_NEWS.title}</h2>
                                <p className="hero-extra-content">{FEATURED_NEWS.excerpt}</p>
                            </div>
                        </div>

                        {/* RIGHT: Side Stack */}
                        <div className="hero-side-layout">
                            {/* Top card */}
                            <div className="hero-card-base animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                <img src={SMALL_NEWS[0].image} alt="" className="hero-image-fill" />
                                <div className="hero-black-overlay"></div>
                                <div className="hero-text-content">
                                    <span className="hero-category-badge">{SMALL_NEWS[0].category}</span>
                                    <h3 className="text-lg font-bold leading-tight">{SMALL_NEWS[0].title}</h3>
                                    <p className="hero-extra-content">{SMALL_NEWS[0].excerpt}</p>
                                </div>
                            </div>

                            {/* Bottom 2 squares */}
                            <div className="hero-bottom-row">
                                <div className="hero-card-base animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <img src={SMALL_NEWS[1].image} alt="" className="hero-image-fill" />
                                    <div className="hero-black-overlay"></div>
                                    <div className="hero-text-content">
                                        <span className="hero-category-badge">{SMALL_NEWS[1].category}</span>
                                        <h4 className="text-sm font-bold leading-tight">{SMALL_NEWS[1].title}</h4>
                                    </div>
                                </div>
                                <div className="hero-card-base animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                    <img src={SMALL_NEWS[2].image} alt="" className="hero-image-fill" />
                                    <div className="hero-black-overlay"></div>
                                    <div className="hero-text-content">
                                        <span className="hero-category-badge">{SMALL_NEWS[2].category}</span>
                                        <h4 className="text-sm font-bold leading-tight">{SMALL_NEWS[2].title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Category Filters Section */}
            <section className="media-filter-section">
                <div className="max-w-[1400px] mx-auto px-[40px] flex items-center justify-between">
                    {/* Centered Filters */}
                    <div className="flex-1 flex justify-center flex-wrap gap-2">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`media-filter-btn ${activeCategory === category ? 'active' : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* View Toggle Buttons */}
                    <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200 ml-4 shadow-inner">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-blue-600 shadow-md ring-1 ring-blue-600 scale-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'}`}
                            title="Grid View"
                        >
                            <Grid
                                size={20}
                                color={viewMode === 'grid' ? "white" : "currentColor"}
                                className={viewMode === 'grid' ? "stroke-[2.5]" : "stroke-2"}
                            />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-blue-600 shadow-md ring-1 ring-blue-600 scale-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'}`}
                            title="List View"
                        >
                            <List
                                size={20}
                                color={viewMode === 'list' ? "white" : "currentColor"}
                                className={viewMode === 'list' ? "stroke-[2.5]" : "stroke-2"}
                            />
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="media-content-section">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* LEFT: News Feed Column */}
                    <div className="md:col-span-3 order-1">
                        {filteredMedia.length > 0 ? (
                            <div className={viewMode === 'grid' ? "news-feed-grid" : "flex flex-col gap-6"}>
                                {filteredMedia.map(item => (
                                    <div
                                        key={item.id}
                                        className={viewMode === 'grid'
                                            ? "media-card animate-fade-in-up"
                                            : "flex flex-col sm:flex-row gap-5 p-5 bg-white border border-[#e5e7eb] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all animate-fade-in-up group"}
                                    >
                                        {/* Image/Video wrapper */}
                                        <div
                                            className={`${viewMode === 'grid' ? "media-card-image-wrap" : "w-full sm:w-48 h-32 shrink-0 overflow-hidden"} relative group cursor-pointer`}
                                            onClick={() => setPlayingVideoId(item.id)}
                                        >
                                            {playingVideoId === item.id ? (
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${item.link.split('youtu.be/')[1]?.split('?')[0]}?autoplay=1`}
                                                    title={item.title}
                                                    className="w-full h-full absolute inset-0 object-cover"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <>
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className={viewMode === 'grid' ? "" : "w-full h-full object-cover transition-transform duration-500"}
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-blue-600 border-b-[8px] border-b-transparent ml-1"></div>
                                                        </div>
                                                    </div>
                                                    {viewMode === 'grid' && (
                                                        <span className="media-card-badge">
                                                            {item.category}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        {/* Content body */}
                                        <div className={viewMode === 'grid' ? "media-card-body" : "flex flex-col justify-center grow"}>
                                            {viewMode === 'list' && (
                                                <span className="text-xs font-bold text-[#3b82f6] uppercase tracking-wider mb-2 block">
                                                    {item.category}
                                                </span>
                                            )}

                                            <h3 className={viewMode === 'grid' ? "media-card-title" : "text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors"}>
                                                {item.title}
                                            </h3>

                                            {viewMode === 'grid' && <p className="media-card-excerpt">{item.excerpt}</p>}
                                            {viewMode === 'list' && <p className="text-sm text-slate-500 mb-3 line-clamp-2">{item.excerpt}</p>}

                                            <div className={viewMode === 'grid' ? "media-card-footer" : "media-card-footer border-t-0 p-0 mt-auto"}>
                                                {viewMode === 'grid' ? (
                                                    <>
                                                        <span className="media-author">
                                                            <User size={14} className="text-[#3b82f6]" /> {item.author}
                                                        </span>
                                                        <span className="media-date">
                                                            <Clock size={14} /> {item.date}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="media-date !pl-0 !before:hidden">
                                                            {item.date}
                                                        </span>
                                                        <span className="media-author border-l border-gray-300 pl-3 ml-1">
                                                            {item.author}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-50 border border-gray-100 rounded-2xl">
                                <h3 className="text-gray-400 text-base font-bold uppercase tracking-widest m-0">No results found</h3>
                                <p className="text-gray-400 mt-2">Try adjusting your category filter</p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Sticky Sidebar Box */}
                    <MediaSidebar />
                </div>
            </section>

            <NewFooter />
        </div>
    );
};

export default Media;
