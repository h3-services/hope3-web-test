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
            title: "Nurturing Dreams: Launchpad to Brighter Future",
            description: "At HOPE3, we encourage every student to explore projects close to their heart—big dreams or quiet sparks. These projects pave their way to a brighter future.",
            buttonText: "View Projects",
            link: "/our-projects"
        },
        {
            id: 2,
            title: "Nurturing Potential: Launchpads to Limitless Futures",
            description: "Every deserving student yearns for that one true opportunity to shine—HOPE3 answers with heartfelt learning, devoted mentorship, and unwavering support, turning hidden potential into soaring success.",
            buttonText: "Get Involved",
            link: "/join-hope3"
        },
        {
            id: 3,
            title: "Nurturing Hope: Launchpads to Lasting Change",
            description: "Your heartfelt gift sustains compassionate education, nurturing care, and boundless opportunity for students who need it most. Every contribution crafts a brighter, more secure tomorrow.",
            buttonText: "Make a Gift",
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
