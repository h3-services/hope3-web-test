import React from 'react';
import { Bookmark, Clock, Share } from 'lucide-react';

const MediaNews = () => {
    const newsArticles = [
        {
            id: 1,
            title: "Hope3 Foundation and Local Universities Launch Joint Research Program",
            summary: "A new collaborative effort aimed at bridging the gap between academic research and industrial application for rural students.",
            date: "Jan 12, 2026",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
            category: "Announcement"
        },
        {
            id: 2,
            title: "Registration Now Open for Summer Technical Bootcamp in Karaikudi",
            summary: "Applications are now live for our flagship 30-day intensive coding and personality development program.",
            date: "Jan 08, 2026",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
            category: "Education"
        },
        {
            id: 3,
            title: "Hope3 Alumni Spotlight: From Rural Village to Global Tech Hub",
            summary: "Celebrating the journey of Selva, who secured a position at a major tech company after completing the Hope3 program.",
            date: "Jan 05, 2026",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
            category: "Stories"
        },
        {
            id: 4,
            title: "New Health Awareness Video Series Premieres on Youtube",
            summary: "Hope3 Varsity launches its first series focused on public health education for the younger generation.",
            date: "Dec 28, 2025",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
            category: "Media"
        }
    ];

    return (
        <div className="media-news-view">
            <h2 className="view-title">Latest Updates</h2>
            <div className="news-list">
                {newsArticles.map(article => (
                    <article key={article.id} className="news-card-horizontal">
                        <div className="news-img-container">
                            <img src={article.image} alt={article.title} />
                            <span className="news-badge">{article.category}</span>
                        </div>
                        <div className="news-content-main">
                            <div className="news-meta-top">
                                <span><Clock size={14} /> {article.date}</span>
                                <div className="news-quick-actions">
                                    <button><Bookmark size={16} /></button>
                                    <button><Share size={16} /></button>
                                </div>
                            </div>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <button className="read-more-link">Read full story &rarr;</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default MediaNews;
