import React from 'react';
import '../../styles/Media.css';

const MediaFilterBar = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className="media-filter-bar">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`media-filter-pill ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default MediaFilterBar;
