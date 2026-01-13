import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SwipeableVideoStack = () => {
    const videos = [
        {
            id: 1,
            title: "Our Mission",
            description: "Learn about HOPE3's vision",
            videoId: "dQw4w9WgXcQ",
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "Student Stories",
            description: "Hear from our students",
            videoId: "dQw4w9WgXcQ",
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "Founder Insights",
            description: "Meet our founders",
            videoId: "dQw4w9WgXcQ",
            color: "from-orange-500 to-red-600"
        }
    ]

    const [cards, setCards] = useState(videos)

    const handleDragEnd = (event, info) => {
        const threshold = 150

        if (Math.abs(info.offset.x) > threshold) {
            // Move the top card to the back of the stack
            setCards(prev => {
                const newCards = [...prev]
                const topCard = newCards.shift()
                newCards.push(topCard)
                return newCards
            })
        }
    }

    return (
        <div className="relative w-full max-w-md mx-auto h-[500px] flex items-center justify-center">
            <AnimatePresence>
                {cards.map((video, index) => (
                    <motion.div
                        key={video.id}
                        className="absolute w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                        style={{
                            zIndex: cards.length - index,
                        }}
                        initial={{
                            scale: 1 - index * 0.05,
                            rotate: index * 2,
                            y: index * 8,
                        }}
                        animate={{
                            scale: 1 - index * 0.05,
                            rotate: index * 2,
                            y: index * 8,
                        }}
                        drag={index === 0 ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        whileDrag={{
                            scale: 1.05,
                            zIndex: 1000,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        {/* Video Content */}
                        <div className="h-full flex flex-col">
                            {/* Video Player */}
                            <div className="flex-1 bg-gray-100">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Card Info */}
                            <div className={`p-6 bg-gradient-to-r ${video.color}`}>
                                <h3 className="text-white font-bold text-lg mb-1">
                                    {video.title}
                                </h3>
                                <p className="text-white text-sm opacity-90">
                                    {video.description}
                                </p>
                            </div>
                        </div>

                        {/* Drag Indicator */}
                        {index === 0 && (
                            <div className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                            </div>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default SwipeableVideoStack
