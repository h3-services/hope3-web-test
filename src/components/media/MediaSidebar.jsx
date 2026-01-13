import React from 'react';
import {
    Home, PlayCircle, Users, BookOpen,
    Video, Mic, Heart, LayoutDashboard, Share2, Newspaper, Globe, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/Media.css';

const MediaSidebar = ({ activeView, onSelectView, activeCategory, onSelectCategory }) => {
    const mainItems = [
        { id: 'Dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { id: 'Videos', label: 'Videos', icon: <PlayCircle size={20} /> },
        { id: 'Channels', label: 'Channels', icon: <Share2 size={20} /> },
        { id: 'Posts', label: 'Posts', icon: <Share2 size={20} /> },
        { id: 'News', label: 'News', icon: <Newspaper size={20} /> },
    ];

    const categories = [
        { id: 'All', label: 'All Videos', icon: <Video size={18} /> },
        { id: 'Students', label: 'Students', icon: <Users size={18} /> },
        { id: 'Education', label: 'Education', icon: <BookOpen size={18} /> },
        { id: 'Transformation', label: 'Transformation', icon: <PlayCircle size={18} /> },
        { id: 'Events', label: 'Events', icon: <Video size={18} /> },
        { id: 'Interviews', label: 'Interviews', icon: <Mic size={18} /> },
    ];

    return (
        <aside className="media-sidebar">
            <div className="media-sidebar-section">
                <Link to="/" className="media-sidebar-item web-home-link">
                    <div className="media-sidebar-icon"><Globe size={20} /></div>
                    <span>Web Home</span>
                </Link>
            </div>

            <hr className="sidebar-divider" />

            <div className="media-sidebar-section">
                <h3 className="sidebar-heading">Menu</h3>
                {mainItems.map(item => (
                    <div
                        key={item.id}
                        className={`media-sidebar-item ${activeView === item.id ? 'active' : ''}`}
                        onClick={() => onSelectView(item.id)}
                    >
                        <div className="media-sidebar-icon">{item.icon}</div>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>

            {activeView === 'Videos' && (
                <>
                    <hr className="sidebar-divider" />
                    <div className="media-sidebar-section">
                        <h3 className="sidebar-heading">Video Categories</h3>
                        {categories.map(cat => (
                            <div
                                key={cat.id}
                                className={`media-sidebar-item sub-item ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => onSelectCategory(cat.id)}
                            >
                                <div className="media-sidebar-icon">{cat.icon}</div>
                                <span>{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <hr className="sidebar-divider" />

            <div className="media-sidebar-section">
                <h3 className="sidebar-heading">Quick Channels</h3>
                <a href="https://www.youtube.com/@tamilians.l-gs5uu" target="_blank" rel="noreferrer" className="media-sidebar-item small">
                    <div className="media-sidebar-icon">
                        <div className="channel-dot yt"></div>
                    </div>
                    <span>Tamilians</span>
                </a>
                <a href="https://www.youtube.com/@hope3foundation789" target="_blank" rel="noreferrer" className="media-sidebar-item small">
                    <div className="media-sidebar-icon">
                        <div className="channel-dot blue"></div>
                    </div>
                    <span>Hope3 Foundation</span>
                </a>
            </div>

            <div className="sidebar-footer">
                <p>© 2026 Hope3 Foundation</p>
            </div>
        </aside>
    );
};

export default MediaSidebar;
