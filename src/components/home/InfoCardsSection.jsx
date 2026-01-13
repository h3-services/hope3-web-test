import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/infoCards.css'

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
            description: "At HOPE3, we turn education into opportunity through meaningful projects that empower individuals and strengthen communities.",
            buttonText: "View Projects",
            link: "/our-projects"
        },
        {
            id: 2,
            title: "Be the Reason a Student Rises",
            description: "Every student deserves a fair chance to succeed. HOPE3 supports growth through learning, mentorship, and guidance.",
            buttonText: "Get Involved",
            link: "/join-hope3"
        },
        {
            id: 3,
            title: "Your Gift Changes Lives",
            description: "Your support fuels education and care for students in need, helping build a brighter and more secure future.",
            buttonText: "Donate Now",
            link: "/donate"
        }
    ]

    const scrollRef = useRef(null)

    useEffect(() => {
        const isMobile = window.innerWidth <= 768
        if (isMobile && scrollRef.current) {
            let currentIndex = 0
            const interval = setInterval(() => {
                if (scrollRef.current) {
                    const nextIndex = (currentIndex + 1) % cards.length
                    currentIndex = nextIndex
                    const cardElements = scrollRef.current.children
                    if (cardElements[currentIndex]) {
                        const targetScroll = cardElements[currentIndex].offsetLeft - (scrollRef.current.offsetWidth - cardElements[currentIndex].offsetWidth) / 2
                        scrollRef.current.scrollTo({
                            left: targetScroll,
                            behavior: 'smooth'
                        })
                    }
                }
            }, 5000)

            return () => clearInterval(interval)
        }
    }, [cards.length])

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
                <div className="info-cards-grid" ref={scrollRef}>
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
