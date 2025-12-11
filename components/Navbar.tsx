"use client"

import { Button } from "./ui/button"
import { ChevronDown, Briefcase, Target, Wrench, Users, Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-0 w-full z-50 bg-white/20 backdrop-blur-[10px] border border-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center mr-6">
            <img 
              src="/assets/hope3_logo.png" 
              alt="HOPE3 Logo" 
              className="w-10 h-10 rounded-lg cursor-pointer transition-transform duration-300 hover:rotate-12"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            <NavLink icon={<Briefcase className="w-4 h-4" />} text="Our Work" />
            <NavLink icon={<Target className="w-4 h-4" />} text="Our Impact" />
            
            {/* HOPE3 Logo */}
            <img 
              src="/assets/hope3.png" 
              alt="HOPE3" 
              className="h-10 w-auto mx-6"
            />

            <NavLink icon={<Briefcase className="w-4 h-4" />} text="Services" />
            <NavLink icon={<Target className="w-4 h-4" />} text="About Us" />
            
          </div>

          {/* Get Involved Dropdown */}
          <div className="hidden sm:block relative ml-6">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-3 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-blue-50 hover:via-white hover:to-blue-50 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 border-2 border-gray-200 hover:border-blue-300 ${dropdownOpen ? 'px-3 py-3 scale-105' : 'px-5 py-3'}`}
            >
              <div className="w-7 h-7 border-2 border-black rounded-full flex items-center justify-center">
                <img 
                  src="/assets/imd2.png" 
                  alt="Get Involved" 
                  className="w-4 h-4"
                />
              </div>
              {!dropdownOpen && (
                <>
                  <span className="font-semibold text-sm tracking-wide">Get Involved</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                </>
              )}
            </button>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/20 backdrop-blur-[10px] border border-white/30 rounded-2xl shadow-lg p-3 z-50">
                <button className="w-full text-left px-4 py-3 mb-2 text-gray-700 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-200 flex items-center gap-3">
                  <span className="text-blue-600">👤</span> Apply
                </button>
                <button className="w-full text-left px-4 py-3 mb-2 text-gray-700 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-200 flex items-center gap-3">
                  <span className="text-green-600">💰</span> Donate
                </button>
                <button className="w-full text-left px-4 py-3 text-gray-700 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-200 flex items-center gap-3">
                  <span className="text-purple-600">🤝</span> Join Us
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/30 space-y-3">
            <NavLink icon={<Briefcase className="w-4 h-4" />} text="Our Work" />
            <NavLink icon={<Target className="w-4 h-4" />} text="Our Impact" />
            <button className="flex items-center gap-1.5 text-black hover:text-gray-700 transition-colors py-2">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">Services</span>
            </button>
            <button className="flex items-center gap-1.5 text-black hover:text-gray-700 transition-colors py-2">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">About Us</span>
            </button>
            <Button variant="default" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-blue-50 hover:via-white hover:to-blue-50 rounded-full px-5 py-3 mt-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-gray-200 hover:border-blue-300">
              <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                <img 
                  src="/assets/img1.png" 
                  alt="Get Involved" 
                  className="w-3 h-3"
                />
              </div>
              <span className="font-semibold text-sm tracking-wide">Get Involved</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <button className="flex items-center gap-1.5 text-black hover:text-gray-700 transition-colors py-2">
      {icon}
      <span className="text-sm font-medium whitespace-nowrap">{text}</span>
      <ChevronDown className="w-3.5 h-3.5" />
    </button>
  )
}

export default Navbar
