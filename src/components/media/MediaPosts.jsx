import React from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

const MediaPosts = () => {
    const posts = [
        {
            id: 1,
            author: "Hope3 Foundation",
            date: "2 days ago",
            content: "We are thrilled to share the success of our latest student bootcamp! 🚀 Over 50 students participated in intensive technical and soft skills training.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
            link: "https://www.facebook.com/share/p/1CNXzNEgWb/",
            likes: "124",
            comments: "18"
        },
        {
            id: 2,
            author: "Hope3 Foundation",
            date: "1 week ago",
            content: "Check out our new series on 'Transformation' where we interview industry leaders about the future of tech education in India.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
            link: "https://www.facebook.com/share/p/1CvnzBmxdh/",
            likes: "89",
            comments: "12"
        },
        {
            id: 3,
            author: "Hope3 Foundation",
            date: "2 weeks ago",
            content: "A big thank you to all our volunteers and partners for making the FindABed initiative a reality. Together, we are keeping our community safe.",
            image: "https://images.unsplash.com/photo-1559027615-cd9d732ff8bb?auto=format&fit=crop&q=80&w=800",
            link: "https://www.facebook.com/share/p/17y3t71BbK/",
            likes: "215",
            comments: "45"
        }
    ];

    return (
        <div className="media-posts-view">
            <h2 className="view-title">Community Posts</h2>
            <div className="posts-feed">
                {posts.map(post => (
                    <div key={post.id} className="social-post-card">
                        <div className="post-header">
                            <div className="post-author-avatar">H3</div>
                            <div className="post-meta-info">
                                <span className="author-name">{post.author}</span>
                                <span className="post-date">{post.date}</span>
                            </div>
                            <button className="post-options-btn"><MoreHorizontal size={20} /></button>
                        </div>
                        <div className="post-body">
                            <p>{post.content}</p>
                            {post.image && <img src={post.image} alt="Post content" className="post-image" />}
                        </div>
                        <div className="post-stats">
                            <span>{post.likes} likes</span>
                            <span>{post.comments} comments</span>
                        </div>
                        <div className="post-actions">
                            <button className="post-action-btn"><ThumbsUp size={20} /> Like</button>
                            <button className="post-action-btn"><MessageSquare size={20} /> Comment</button>
                            <a href={post.link} target="_blank" rel="noreferrer" className="post-action-btn"><Share2 size={20} /> View original</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaPosts;
