"use client"

import { Button } from "./ui/button"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">


      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Abdul Kalam Quote */}
          <div className={`transition-all duration-1000 mt-16 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <blockquote className="content text-white italic font-light mb-4" >
              "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great."
            </blockquote>
            <cite className="text-white text-sm">- Dr. A.P.J. Abdul Kalam</cite>
          </div>

          {/* HOPE3 Vision
          <div className={`transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl heading text-white mb-4">
              HOPE3
            </h1>
            <p className="text-xl md:text-2xl heading text-white/90 mb-6">
              Education • Empowerment • Entrepreneurship
            </p>
            <p className="content text-white/80 max-w-2xl mx-auto">
              Transforming communities through integrated development programs
            </p>
          </div> */}

          {/* CTA Button */}
          {/* <div className={`transition-all duration-1000 delay-500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore HOPE3
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection