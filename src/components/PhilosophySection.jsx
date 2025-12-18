"use client"

import { useState } from "react"

const PhilosophySection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState("vision")

  const philosophies = {
    vision: {
      title: "Vision",
      content: "Empowering circumstantially challenged, aspiring talent to realize their true potential and become next generation leaders."
    },
    mission: {
      title: "Mission", 
      content: "Identify and provide financial assistance for higher education for circumstantially challenged, earnest students. Form long term partnerships with educators, subject matter experts, technology and media industries. Connect students with our educational and industry partners through an online mentored, collaborative, immersive learning platform.	Projects of relevance to industry and research.Internship opportunities, Part-time and Full-time Job opportunities with our industry partners.	Guidance and support for entrepreneurial ventures."

    },
    thought: {
      title: "The Question",
      content: "What does it take to make education truly transformative for students from socioeconomically challenged backgrounds? The answer is not just funding college degrees or offering coaching. It’s about creating a parallel system—immersive, relevant, and relentlessly focused on building real-world capability."
    },
    disconnect: {
      title: "The Gap",
      content: "College degrees, especially from non-premier institutions, rarely translate into employability. Students graduate with theoretical knowledge but little practical skill."
    },
    diamonds: {
      title: "The Find",
      content: "The students who need help most aren’t the ones already topping their classes. They are the ones with untapped potential—students who hadn’t been taught well, who didn’t score high, but who had the hunger to learn. HOPE3 selects students and is set out to polish them."
    },
    curriculum: {
      title: "The Model", 
      content: "•	Selected students enter a residential program that covers part-time college education, meals, healthcare, and immersive learning.Students attend college in the mornings. After college, they engage in hands-on learning—coding, building apps, filing RTIs, organizing community events, and participating in internships. The curriculum skips obsolete topics and focuses on relevance. The interest of students varies – from STEM topics to political science to medicine to agriculture."
    },
    confidence: {
      title: "The Promise",
      content: "•	HOPE3 isn’t trying to inspire. It’s trying to equip. The vision is subtle but radical: make education efficient and employable again. Ensure that every hour of study contributes to solving real-world problems. Treat human intelligence as a resource—not to be wasted on memorization, but to be harnessed for impact.The foundation doesn’t promise success. It promises opportunity. It doesn’t select students who are already set to succeed. It selects those who need a jumpstart. And it doesn’t just teach—it transforms."
    },
    proof: {
      title: "The Proof",
      content:"Today, HOPE3 supports around 60 students across Chennai and Karaikudi. The expectations are high. The results are visible—not just in placements, but in confidence, capability, and community impact. They don’t wait for permission. They act. And in doing so, they quietly rewrite the narrative of what education can be.       HOPE3 isn’t trying to inspire. It’s trying to equip. The vision is subtle but radical: make education efficient and employable again. Ensure that every hour of study contributes to solving real-world problems. Treat human intelligence as a resource—not to be wasted on memorization, but to be harnessed for impact.The foundation doesn’t promise success. It promises opportunity. It doesn’t select students who are already set to succeed. It selects those who need a jumpstart. And it doesn’t just teach—it transforms."
    }
  }

  const buttons = Object.keys(philosophies)

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Philosophy of HOPE3
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Buttons */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-l-4 border-blue-500 p-6 space-y-2">
            {buttons.map((key) => (
              <button
                key={key}
                onClick={() => setActivePhilosophy(key)}
                className={`w-full text-center px-4 py-3 rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.15)] text-lg ${
                  activePhilosophy === key
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-[0_6px_20px_rgba(59,130,246,0.3)]'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {philosophies[key].title}
              </button>
            ))}
          </div>
          
          {/* Right Side - Dynamic Content */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-3 w-fit">
              <p className="text-white leading-relaxed text-base animate-fade-in">
                {philosophies[activePhilosophy].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection