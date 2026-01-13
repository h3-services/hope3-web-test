"use client"

import { useState, useEffect } from "react"
import heroBackground from '../../assets/home/college-graduation-pictures.jpg'

const HeroSection = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative w-full h-[75vh] min-h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div
        className={`relative z-10 max-w-5xl px-6 flex flex-col items-center transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Quote */}
        <blockquote
          className="text-white text-[18px] md:text-[26px] leading-tight text-center w-full uppercase"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: '700'
          }}
        >
          Learning gives creativity, creativity leads to thinking,
          thinking provides knowledge, knowledge makes you great.
        </blockquote>

        {/* Author */}
        <cite className="mt-6 text-white text-[16px] md:text-[20px] font-bold not-italic w-full text-right md:pr-10">
          — Dr. A. P. J. Abdul Kalam
        </cite>
      </div>

    </section>
  )
}

export default HeroSection