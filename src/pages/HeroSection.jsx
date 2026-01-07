"use client"

import { useState, useEffect } from "react"
import heroBackground from '../assets/home/college-graduation-pictures.jpg'

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
        className={`relative z-10 max-w-5xl px-6 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Quote */}
        <blockquote className="text-white text-[28px] md:text-[38px] font-jaini leading-relaxed text-center">
          "Learning gives creativity, creativity leads to thinking,
          thinking provides knowledge, knowledge makes you great."
        </blockquote>
      </div>

      {/* Author – positioned below About Us button */}
      <cite
        className={`absolute z-10 text-white text-[14px] md:text-[16px] font-medium not-italic transition-all duration-1000 ${show ? "opacity-90" : "opacity-0"}`}
        style={{
          top: '55%',
          right: '12%'
        }}
      >
        — Dr. A. P. J. Abdul Kalam
      </cite>

    </section>
  )
}

export default HeroSection