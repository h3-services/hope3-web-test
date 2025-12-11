const HeroSection = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/college-background1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-900/60"></div>
      </div>

      {/* Silhouette Overlay */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>


    </section>
  )
}

export default HeroSection
