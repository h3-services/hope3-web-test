import React from 'react';
import '../../styles/Media.css';

const VideoCard = ({ video }) => {
    return (
        <div className="video-card" onClick={() => window.open(video.link, '_blank')}>
            <div className="video-thumbnail-container">
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <div className="video-duration">{video.duration}</div>
            </div>
            <div className="video-info">
                <div className="video-avatar"></div> {/* Placeholder for channel avatar */}
                <div className="video-details">
                    <h3 className="video-title">{video.title}</h3>
                    <div className="video-meta">{video.channel}</div>
                    <div className="video-meta">{video.views} • {video.date}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
