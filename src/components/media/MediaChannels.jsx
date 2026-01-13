import React from 'react';
import { Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react';

const MediaChannels = () => {
    const channels = [
        {
            name: "Hope3 Foundation",
            platform: "YouTube",
            icon: <Youtube className="platform-icon yt" />,
            handle: "@hope3foundation789",
            description: "Our main channel for students bootcamp and organizational updates.",
            link: "https://www.youtube.com/@hope3foundation789",
            color: "#FF0000"
        },
        {
            name: "Tamilians",
            platform: "YouTube",
            icon: <Youtube className="platform-icon yt" />,
            handle: "@tamilians.l-gs5uu",
            description: "Educational content and series in Tamil.",
            link: "https://www.youtube.com/@tamilians.l-gs5uu",
            color: "#FF0000"
        },
        {
            name: "Hope3 Foundation",
            platform: "Instagram",
            icon: <Instagram className="platform-icon insta" />,
            handle: "@hope3foundation",
            description: "Catch our daily updates and student stories on Instagram.",
            link: "https://instagram.com/hope3foundation",
            color: "#E1306C"
        },
        {
            name: "Hope3 Foundation",
            platform: "Facebook",
            icon: <Facebook className="platform-icon fb" />,
            handle: "hope3foundation",
            description: "Join our community on Facebook for events and discussions.",
            link: "https://facebook.com/hope3foundation",
            color: "#1877F2"
        }
    ];

    return (
        <div className="media-channels-view">
            <h2 className="view-title">Our Channels</h2>
            <div className="channels-grid">
                {channels.map((channel, index) => (
                    <a key={index} href={channel.link} target="_blank" rel="noreferrer" className="channel-large-card">
                        <div className="channel-card-top" style={{ borderTop: `4px solid ${channel.color}` }}>
                            {channel.icon}
                            <div className="channel-card-info">
                                <h3>{channel.name}</h3>
                                <span>{channel.handle}</span>
                            </div>
                        </div>
                        <p className="channel-desc">{channel.description}</p>
                        <div className="channel-card-footer">
                            <span>Go to {channel.platform}</span>
                            <ExternalLink size={16} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MediaChannels;
