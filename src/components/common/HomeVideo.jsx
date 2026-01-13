import React from 'react'
import homePageVideo from '../../assets/videos/home-page3.mp4'

const HomeVideo = () => {
    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <video
                className="w-full h-full object-cover"
                playsInline
                autoPlay
                loop
                muted
            >
                <source src={homePageVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HomeVideo
