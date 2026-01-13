import React, { useState } from 'react';
import Navbar from '../layouts/Navbar';
import MediaSidebar from '../components/media/MediaSidebar';
import MediaFilterBar from '../components/media/MediaFilterBar';
import VideoCard from '../components/media/VideoCard';
import '../styles/Media.css';

// Importing dummy components (will be created in next steps)
import MediaDashboard from '../components/media/MediaDashboard';
import MediaChannels from '../components/media/MediaChannels';
import MediaPosts from '../components/media/MediaPosts';
import MediaNews from '../components/media/MediaNews';

// Real data for videos
const VIDEOS = [
    {
        id: "IDMC34rzWwk",
        title: "Hope3 Foundation students boot camp review",
        thumbnail: "https://img.youtube.com/vi/IDMC34rzWwk/maxresdefault.jpg",
        duration: "12:45",
        channel: "Hope3 Foundation",
        views: "1.2K views",
        date: "1 year ago",
        category: "Students",
        link: "https://youtu.be/IDMC34rzWwk?si=68AuuoiTRqWbg7rA"
    },
    {
        id: "74NKASH2-Rk",
        title: "Hope3 Foundation Vision - Meenakshi Sundaram Manivannan",
        thumbnail: "https://img.youtube.com/vi/74NKASH2-Rk/maxresdefault.jpg",
        duration: "8:30",
        channel: "Hope3 Foundation",
        views: "850 views",
        date: "1 year ago",
        category: "Transformation",
        link: "https://youtu.be/74NKASH2-Rk?si=onQPGqySN3n-AtGq"
    },
    {
        id: "j6pTv_lYMDE",
        title: "FindABed App | Keep Our Community Safe | Hope3 Foundation",
        thumbnail: "https://img.youtube.com/vi/j6pTv_lYMDE/maxresdefault.jpg",
        duration: "2:20",
        channel: "Hope3 Foundation",
        views: "3.5K views",
        date: "2 years ago",
        category: "Events",
        link: "https://youtu.be/j6pTv_lYMDE?si=ecxnP2QJ07nGiou3"
    },
    {
        id: "yBdzHOTwJrQ",
        title: "What is Hope3 Foundation - Palani Vairavan",
        thumbnail: "https://img.youtube.com/vi/yBdzHOTwJrQ/maxresdefault.jpg",
        duration: "5:15",
        channel: "Hope3 Foundation",
        views: "5K views",
        date: "1 year ago",
        category: "Interviews",
        link: "https://youtu.be/yBdzHOTwJrQ?si=5Y20bH8HABwIwYIS"
    },
    {
        id: "z_n0PqhIuKA",
        title: "Hope3 Foundation Impact Story",
        thumbnail: "https://img.youtube.com/vi/z_n0PqhIuKA/maxresdefault.jpg",
        duration: "4:00",
        channel: "Hope3 Foundation",
        views: "900 views",
        date: "3 weeks ago",
        category: "Join Us",
        link: "https://youtu.be/z_n0PqhIuKA?si=yiNPUHhVNpPjdIIM"
    },
    {
        id: "t1J9s87Zh7o",
        title: "Hope3 Foundation... ஏன்?... எதற்கு?...",
        thumbnail: "https://img.youtube.com/vi/t1J9s87Zh7o/maxresdefault.jpg",
        duration: "6:45",
        channel: "Hope3 Foundation",
        views: "2.1K views",
        date: "1 month ago",
        category: "Education",
        link: "https://youtu.be/t1J9s87Zh7o?si=0IjyLKeYIMK-nYlb"
    },
    {
        id: "oYm3MR3DU3A",
        title: "What happens when we type a URL in a browser (Tamil) | HTML Series",
        thumbnail: "https://img.youtube.com/vi/oYm3MR3DU3A/maxresdefault.jpg",
        duration: "10:30",
        channel: "Tamilians",
        views: "15K views",
        date: "2 days ago",
        category: "Education",
        link: "https://youtu.be/oYm3MR3DU3A?si=f25e6JXPFfMYYlLN"
    },
    {
        id: "7ZDF4-hB5Ec",
        title: "Hope3 foundation - An Introduction",
        thumbnail: "https://img.youtube.com/vi/7ZDF4-hB5Ec/maxresdefault.jpg",
        duration: "3:45",
        channel: "Hope3 Foundation",
        views: "1.2K views",
        date: "3 years ago",
        category: "Transformation",
        link: "https://youtu.be/7ZDF4-hB5Ec?si=70Wm8WdZcvL9Uunl"
    },
    {
        id: "QJwI015C0Xc",
        title: "Day 6 - Hope3 Interviews",
        thumbnail: "https://img.youtube.com/vi/QJwI015C0Xc/maxresdefault.jpg",
        duration: "15:20",
        channel: "Hope3 Foundation",
        views: "320 views",
        date: "1 week ago",
        category: "Interviews",
        link: "https://youtu.be/QJwI015C0Xc?si=LX98T7fQXnfM27ok"
    },
    {
        id: "92O3fLSeq_U",
        title: "Day 9 Fantastic stuff",
        thumbnail: "https://img.youtube.com/vi/92O3fLSeq_U/maxresdefault.jpg",
        duration: "18:45",
        channel: "Hope3 Foundation",
        views: "450 views",
        date: "5 days ago",
        category: "Interviews",
        link: "https://youtu.be/92O3fLSeq_U?si=7c0FvbXoJbVZ1p86"
    },
    {
        id: "j0tT9uEe6RQ",
        title: "What happens if you get TATTOOED | HOPE3 VARSITY",
        thumbnail: "https://img.youtube.com/vi/j0tT9uEe6RQ/maxresdefault.jpg",
        duration: "5:10",
        channel: "Hope3 Foundation",
        views: "1.1K views",
        date: "2 weeks ago",
        category: "Education",
        link: "https://youtu.be/j0tT9uEe6RQ?si=3vqAP6xg5XWS-rGV"
    },
    {
        id: "0M9n5jpyB1Y",
        title: "Selvakumar Sir's Inspirational Speech",
        thumbnail: "https://img.youtube.com/vi/0M9n5jpyB1Y/maxresdefault.jpg",
        duration: "25:00",
        channel: "Hope3 Foundation",
        views: "2.5K views",
        date: "2 months ago",
        category: "Transformation",
        link: "https://youtu.be/0M9n5jpyB1Y?si=rknBxwVIe3yTJKYy"
    },
    {
        id: "dPwQJX9u2h8",
        title: "CORONA Analysis and Prediction",
        thumbnail: "https://img.youtube.com/vi/dPwQJX9u2h8/maxresdefault.jpg",
        duration: "12:30",
        channel: "Hope3 Foundation",
        views: "1.8K views",
        date: "3 years ago",
        category: "Education",
        link: "https://youtu.be/dPwQJX9u2h8?si=mOwrpipU6KNAFbB-"
    },
    {
        id: "4-_0bEY3kBA",
        title: "Logarithms | Laws of Logarithms | Graphs | Applications",
        thumbnail: "https://img.youtube.com/vi/4-_0bEY3kBA/maxresdefault.jpg",
        duration: "22:15",
        channel: "Tamilians",
        views: "8.2K views",
        date: "1 year ago",
        category: "Education",
        link: "https://youtu.be/4-_0bEY3kBA?si=TgViLGAGCnMMK-kU"
    },
    {
        id: "I48fBAaapC8",
        title: "Functions | Find the domain and range | Tamil | Calculus",
        thumbnail: "https://img.youtube.com/vi/I48fBAaapC8/maxresdefault.jpg",
        duration: "19:40",
        channel: "Tamilians",
        views: "6.5K views",
        date: "6 months ago",
        category: "Education",
        link: "https://youtu.be/I48fBAaapC8?si=7U51m00WuuTKxCeh"
    }
];

const CATEGORIES = ["All", "Students", "Events", "Education", "Interviews", "Transformation", "Join Us"];

const Media = () => {
    const [activeView, setActiveView] = useState("Videos");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredVideos = activeCategory === "All"
        ? VIDEOS
        : VIDEOS.filter(v => v.category === activeCategory);

    const renderContent = () => {
        switch (activeView) {
            case "Dashboard":
                return <MediaDashboard videos={VIDEOS} />;
            case "Channels":
                return <MediaChannels />;
            case "Posts":
                return <MediaPosts />;
            case "News":
                return <MediaNews />;
            case "Videos":
            default:
                return (
                    <>
                        <MediaFilterBar
                            categories={CATEGORIES}
                            activeCategory={activeCategory}
                            onSelectCategory={setActiveCategory}
                        />
                        <div className="media-video-grid">
                            {filteredVideos.map(video => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                        </div>
                    </>
                );
        }
    };

    return (
        <>
            <Navbar />
            <div className="media-page-container">
                <MediaSidebar
                    activeView={activeView}
                    onSelectView={setActiveView}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />

                <main className="media-content">
                    {renderContent()}
                </main>
            </div>
        </>
    );
};

export default Media;
