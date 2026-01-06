import Navbar from "./navbar.jsx"
import NewFooter from "./NewFooter.jsx"
import { useEffect, useState } from 'react'
import './Hope3Pillers.css'
import palaniImage from '../assets/pillars/palani.png' // Fixed spelling to match existing directory
import neelImage from '../assets/pillars/neel.png'     // Fixed spelling to match existing directory
import meenachiImage from '../assets/pillars/meenachi.png' // Fixed spelling to match existing directory
import SwipeableVideoStack from '../components/SwipeableVideoStack.jsx'

function Leaders() { // Renamed to Leaders to match the route and file name
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const pillars = [
        {
            id: 1,
            name: "Palaniappan Vairavan",
            title: "Founder",
            image: palaniImage,
            bio: "Mr. Palaniappan Vairavan is an educator, entrepreneur, and a visionary who believes that education can alleviate most of the key challenges faced by society today. He is the president of HOPE3 Foundation and the Dean of the Computer Science department of HOPE3 Varsity. Palani has been volunteering with many educational nonprofit organizations since 2016 to level the field for the circumstantially challenged students. He provided the impetus for conception of HOPE3 by identifying the need for providing educational opportunities of the highest quality for the talented students who lack the resources or exposure. He teaches data structures, algorithms, web and mobile app development in HOPE3 Varsity. Professionally he works at Amazon Corporation, Washington as a Senior Software Engineer. He holds a MS in Computer Science from East Carolina University. On the personal front he loves playing tennis and outdoor activities with his family.",
            achievements: [
                "President of HOPE3 Foundation",
                "Dean of Computer Science at HOPE3 Varsity",
                "Senior Software Engineer at Amazon Corporation",
                "MS in Computer Science from East Carolina University"
            ],
            quote: "Education can alleviate most of the key challenges faced by society today.",
            contact: {
                email: "palani@hope3.org"
            }
        },
        {
            id: 2,
            name: "Neelakandan Venkataraman",
            title: "Co-founder",
            image: neelImage,
            bio: "Neelakandan Venkataraman is passionate about learning and teaching. Neelakandan has been part of the Hope 3 Foundation as a member in governing body since the inception of the non profit organization. Neelakandan is motivated to create a change through personal and social awareness – especially within the upcoming generation. In addition to being an advisor to the Hope 3 foundation long term strategy and regular activities, Neelakandan enjoys connecting with students through Soft Skills club, as part of Hope3 Varsity. Professionally, Neelakandan is a Director of Hardware Engineering at Microsoft Devices, designing products like Surface computers, Xbox and Hololens. Prior to joining Microsoft, Neelakandan has been designing automotive and Marine engines in India, Germany and US. Neelakandan has a Masters in Business Administration degree from University of Wisconsin and Bachelors of Mechanical Engineering from Kumaraguru College of Technology, Coimbatore, India.",
            achievements: [
                "Co-founder and Governing Body Member of HOPE3 Foundation",
                "Director of Hardware Engineering at Microsoft Devices",
                "Product designer for Surface, Xbox, and Hololens",
                "MBA from University of Wisconsin"
            ],
            quote: "Creating change through personal and social awareness, especially within the upcoming generation.",
            contact: {
                email: "neel@hope3.org"
            }
        },
        {
            id: 3,
            name: "Dr. Meenakshi Sundaram",
            title: "Co-founder",
            image: meenachiImage,
            bio: "Dr. Meenakshi Sundaram is an educator, scientist, and a yoga, meditation enthusiast. He is one of the founding members of HOPE3 Foundation and is the president of HOPE3 Varsity the educational wing of HOPE3 Foundation. He believes in education that is actionable and education that builds a seeking (research) mindset. Meenakshi actively engages in a wide variety of HOPE3 Varsity classes as a mentor and many a time as a student. He is also a certified breathwork and meditation instructor with the Art of Living Foundation. Meenakshi works in Intel Corporation, Oregon as an process engineer helping in the manufacturing process of semiconductor chips. He holds a MS, PhD from Cornell University, New York in Mechanical Engineering, and a M Tech in Computational Science from Indian Institute of Science, Bangalore.",
            achievements: [
                "Co-founder and President of HOPE3 Varsity",
                "Process Engineer at Intel Corporation",
                "PhD from Cornell University in Mechanical Engineering",
                "Certified breathwork and meditation instructor"
            ],
            quote: "Education should be actionable and build a seeking (research) mindset.",
            contact: {
                email: "meenakshi.sundaram@hope3.org"
            }
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const contentElements = document.querySelectorAll('.founder-section')
            const windowHeight = window.innerHeight

            let currentIndex = 0
            let maxVisibility = 0

            contentElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect()
                const elementTop = rect.top
                const elementBottom = rect.bottom

                const visibleTop = Math.max(0, windowHeight - Math.max(elementTop, 0))
                const visibleBottom = Math.min(windowHeight, Math.max(elementBottom, 0))
                const visibleHeight = Math.max(0, visibleBottom - Math.max(elementTop, 0))

                const visibilityRatio = visibleHeight / windowHeight

                if (visibilityRatio > maxVisibility && visibilityRatio > 0.2) {
                    maxVisibility = visibilityRatio
                    currentIndex = index
                }
            })

            if (currentIndex !== activeImageIndex) {
                setActiveImageIndex(currentIndex)

                const imageContainer = document.querySelector('.sticky-image-container')
                if (imageContainer) {
                    imageContainer.style.opacity = '0.3'
                    imageContainer.style.transform = 'translateY(10px) scale(0.98)'

                    setTimeout(() => {
                        imageContainer.style.opacity = '1'
                        imageContainer.style.transform = 'translateY(0) scale(1)'
                    }, 150)
                }
            }
        }

        let ticking = false
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', throttledScroll)
        setTimeout(() => {
            handleScroll()
        }, 100)

        return () => window.removeEventListener('scroll', throttledScroll)
    }, [activeImageIndex, pillars])

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="pillars-hero py-20 px-6">
                <div className="max-w-6xl mx-auto text-center animate-fade-in">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Meet Our Founders
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Meet the visionary leaders who founded HOPE3 Foundation. Their expertise, passion, and dedication drive our mission to transform lives through quality education and empowerment of circumstantially challenged students.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">

                        <div className="lg:w-2/5">
                            <div className="sticky top-20 h-screen flex items-center justify-center">
                                <div className="sticky-image-container w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 ease-out">
                                    <div className="text-center">
                                        <img
                                            src={pillars[activeImageIndex].image}
                                            alt={pillars[activeImageIndex].name}
                                            className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100 shadow-xl transition-all duration-500"
                                        />
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            {pillars[activeImageIndex].name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {pillars[activeImageIndex].title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/5 space-y-20">
                            {pillars.map((pillar, index) => (
                                <div
                                    key={pillar.id}
                                    className="founder-section min-h-screen flex items-center py-20"
                                    data-index={index}
                                >
                                    <div className="w-full bg-white rounded-3xl shadow-xl p-12">
                                        <div className="space-y-8">
                                            <div className="border-b border-gray-200 pb-6">
                                                <h2 className="text-2xl font-bold text-black mb-3">
                                                    {pillar.name}
                                                </h2>
                                                <p className="text-base text-gray-600">
                                                    {pillar.title}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-semibold text-black mb-4">
                                                    About
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed text-sm">
                                                    {pillar.bio}
                                                </p>
                                            </div>

                                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                                                <h4 className="text-lg font-semibold text-black mb-4">
                                                    Philosophy
                                                </h4>
                                                <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                                                    "{pillar.quote}"
                                                </blockquote>
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-semibold text-black mb-6">
                                                    Key Achievements
                                                </h3>
                                                <div className="grid gap-4">
                                                    {pillar.achievements.map((achievement, achievementIndex) => (
                                                        <div
                                                            key={achievementIndex}
                                                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                                                        >
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                                                                <span className="text-white text-sm font-bold">✓</span>
                                                            </div>
                                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                                {achievement}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-gray-200">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <span className="text-blue-600 font-semibold">@</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Contact</p>
                                                        <a
                                                            href={`mailto:${pillar.contact.email}`}
                                                            className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                                                        >
                                                            {pillar.contact.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Interactive Deck
                        </h2>
                        <p className="text-gray-600">
                            Swipe left or right through our curated video stories
                        </p>
                    </div>

                    <SwipeableVideoStack />

                    <div className="mt-16">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white bg-opacity-80 rounded-full shadow-sm border border-gray-100">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            <p className="text-sm text-gray-600 font-medium">
                                Swipe top card to explore more
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <NewFooter />
        </main>
    )
}

export default Leaders
