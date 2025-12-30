"use client"

import { useState, useEffect } from "react"

const HeroSection = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(/src/assets/college-graduation-pictures.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div
        className={`relative z-10 max-w-5xl px-6 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Quote */}
        <blockquote className="text-white text-[28px] md:text-[38px] font-jaini leading-relaxed text-center">
          “Learning gives creativity, creativity leads to thinking,
          thinking provides knowledge, knowledge makes you great.”
        </blockquote>

        {/* Author – aligned like screenshot */}
        <cite className="block mt-4 text-white text-[14px] md:text-[16px] font-medium not-italic opacity-90 text-right">
          — Dr. A. P. J. Abdul Kalam
        </cite>
      </div>

    </section>
  )
}

export default HeroSection