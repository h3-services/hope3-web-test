"use client"

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
        <div
          className={`transition-all duration-1000 mt-16 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <p className="text-black text-lg mb-8">
              Learning gives creativity, creativity leads to thinking,
              thinking provides knowledge, knowledge makes you great.
            </p>
            <span className="absolute left-3/4 -translate-x-1/2 text-[14px] font-medium opacity-90 text-black">
              — Dr. A. P. J. Abdul Kalam
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection