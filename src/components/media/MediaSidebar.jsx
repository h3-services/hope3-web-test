import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Facebook, Instagram, Twitter, Heart, UserPlus, TrendingUp, Linkedin } from 'lucide-react';
import hope3Logo from '../../assets/images/pages/home/hope3_logo.png';
import '../../styles/components/MediaSidebar.css';

const TRENDING_POSTS = [
    {
        id: 1,
        title: "Education Support Program",
        category: "Education"
    },
    {
        id: 2,
        title: "Annual Sports Day Celebration",
        category: "Events"
    },
    {
        id: 3,
        title: "Community Awareness Program",
        category: "Awareness"
    },
    {
        id: 4,
        title: "Student Skill Development Initiative",
        category: "Education"
    }
];

const MediaSidebar = () => {
    return (
        <aside className="media-sidebar-aside">
            <div className="sidebar-sticky-wrapper">
                {/* Trending Section */}
                <div className="sidebar-section">
                    <div className="trending-header">
                        <div className="trending-icon-box">
                            <TrendingUp size={20} />
                        </div>
                        <h2 className="trending-title">Trending Now</h2>
                    </div>
                    <div className="trending-divider"></div>

                    <div className="trending-list">
                        {TRENDING_POSTS.map((post, index) => (
                            <div key={post.id} className="trending-item group">
                                <span className="trending-index">
                                    0{index + 1}
                                </span>
                                <div>
                                    <span className="trending-category">
                                        {post.category}
                                    </span>
                                    <h3 className="trending-item-title">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Section */}
                <div className="sidebar-section">
                    <div className="support-buttons">
                        <Link to="/donate" className="btn-donate">
                            <Heart size={20} color="white" />
                            Donate Now
                        </Link>
                        <Link to="/join-hope3" className="btn-join">
                            <UserPlus size={20} />
                            Join Hope3
                        </Link>
                    </div>
                </div>

                {/* Follow Section */}
                <div>
                    <h3 className="follow-header">Follow Hope3</h3>
                    <div className="flex flex-col gap-4">
                        {/* Channel 1 */}
                        <a
                            href="https://www.youtube.com/@hope3foundation13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors"
                        >
                            <img src={hope3Logo} alt="Hope3" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">Hope3 Foundation</h4>
                                <span className="text-[10px] font-semibold text-slate-400 block">@hope3foundation13 • 630 subs</span>
                            </div>
                        </a>

                        {/* Channel 2 */}
                        <a
                            href="https://www.youtube.com/@hope3foundation789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm overflow-hidden">
                                <span className="text-[10px] font-black text-slate-800">HOPE</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">Hope3 Foundation</h4>
                                <span className="text-[10px] font-semibold text-slate-400 block">@hope3foundation789 • 32 subs</span>
                            </div>
                        </a>

                        {/* Channel 3 */}
                        <a
                            href="https://www.youtube.com/@tamilians.l-gs5uu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-sm">
                                <span className="text-white text-xs font-bold">தமி</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">தமிழர்கள் 'tamilians'</h4>
                                <span className="text-[10px] font-semibold text-slate-400 block">@tamilians.l-gs5uu • 132 subs</span>
                            </div>
                        </a>
                    </div>

                    <div className="other-socials">
                        <a href="https://www.linkedin.com/company/hope3-foundation" target="_blank" rel="noopener noreferrer" className="social-round-btn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.facebook.com/hope3foundation" target="_blank" rel="noopener noreferrer" className="social-round-btn">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.instagram.com/hope3foundation" target="_blank" rel="noopener noreferrer" className="social-round-btn">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default MediaSidebar;
