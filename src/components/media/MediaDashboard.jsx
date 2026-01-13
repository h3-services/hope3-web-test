import React from 'react';
import VideoCard from './VideoCard';
import { Newspaper, Share2, Youtube, Instagram, Facebook } from 'lucide-react';

const MediaDashboard = ({ videos }) => {
    const latestVideos = videos.slice(0, 4);

    return (
        <div className="media-dashboard">
            <section className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title">Latest Videos</h2>
                    <button className="view-all-btn">View All</button>
                </div>
                <div className="media-video-grid">
                    {latestVideos.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </section>

            <div className="dashboard-row">
                <section className="dashboard-section news-preview">
                    <div className="section-header">
                        <h2 className="section-title"><Newspaper size={20} /> Latest News</h2>
                    </div>
                    <div className="news-preview-list">
                        <div className="news-item-mini">
                            <div className="news-date">Jan 12, 2026</div>
                            <h3 className="news-heading">Hope3 Foundation expansion to new regions</h3>
                        </div>
                        <div className="news-item-mini">
                            <div className="news-date">Jan 08, 2026</div>
                            <h3 className="news-heading">Upcoming student boot camp registration open</h3>
                        </div>
                        <div className="news-item-mini">
                            <div className="news-date">Jan 05, 2026</div>
                            <h3 className="news-heading">New partnership with tech giants announced</h3>
                        </div>
                    </div>
                </section>

                <section className="dashboard-section social-preview">
                    <div className="section-header">
                        <h2 className="section-title"><Share2 size={20} /> Connect with Us</h2>
                    </div>
                    <div className="social-grid-mini">
                        <a href="https://youtube.com/@hope3foundation789" target="_blank" rel="noreferrer" className="social-card-mini yt">
                            <Youtube size={24} />
                            <span>YouTube</span>
                        </a>
                        <a href="https://instagram.com/hope3foundation" target="_blank" rel="noreferrer" className="social-card-mini insta">
                            <Instagram size={24} />
                            <span>Instagram</span>
                        </a>
                        <a href="https://facebook.com/hope3foundation" target="_blank" rel="noreferrer" className="social-card-mini fb">
                            <Facebook size={24} />
                            <span>Facebook</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MediaDashboard;
