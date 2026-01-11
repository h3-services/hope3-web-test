import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/infoCards.css'

const InfoCardsSection = () => {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const videoRef = useRef(null)
    const baseUrl = import.meta.env.BASE_URL || '/'
    const videoPath = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}videos/background.mp4`

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true
            videoRef.current.muted = true

            const attemptPlay = () => {
                videoRef.current.play().then(() => {
                    setVideoLoaded(true)
                }).catch(err => {
                    console.warn("Autoplay was prevented, waiting for interaction.", err)
                })
            }

            attemptPlay()
        }
    }, [])

    const cards = [
        {
            id: 1,
            title: "Creating Change Through Action",
            description: "At HOPE3, we design impactful projects that turn education into opportunity. Our initiatives empower individuals and uplift communities for lasting change.",
            buttonText: "View Projects",
            link: "/our-projects"
        },
        {
            id: 2,
            title: "Be the Reason a Student Rises",
            description: "Every deserving student deserves a real chance to succeed. HOPE3 transforms potential into progress through learning, mentorship, and support.",
            buttonText: "Get Involved",
            link: "/join-hope3"
        },
        {
            id: 3,
            title: "Your Gift Changes Lives",
            description: "Your support sustains education, care, and opportunity for students in need. Every contribution helps build a brighter, more secure future.",
            buttonText: "Donate Now",
            link: "/donate"
        }
    ]

    return (
        <section className={`info-cards-section ${videoLoaded ? 'video-ready' : 'video-loading'}`}>
            <video
                ref={videoRef}
                className={`info-cards-video-bg ${videoLoaded ? 'loaded' : 'loading'}`}
                autoPlay
                muted
                playsInline
                onPlaying={() => setVideoLoaded(true)}
            >
                <source src={videoPath} type="video/mp4" />
            </video>
            <div className="info-cards-overlay"></div>

            <div className="info-cards-container">
                <div className="info-cards-grid">
                    {cards.map((card) => (
                        <div key={card.id} className="info-card">
                            <h3 className="info-card-title">{card.title}</h3>
                            <p className="info-card-description">{card.description}</p>
                            <Link to={card.link} className="info-card-button">
                                <span>→</span>
                                <span>{card.buttonText}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InfoCardsSection
