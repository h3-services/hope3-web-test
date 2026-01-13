import Navbar from "../layouts/Navbar.jsx"
import HeroSection from "../components/home/HeroSection.jsx"
import InfoCardsSection from "../components/home/InfoCardsSection.jsx"
import FeatureCards from "../components/home/FeatureCards.jsx"
import PhilosophySection from "../components/home/PhilosophySection.jsx"
import SpotlightSection from "../components/home/SpotlightSection.jsx"
import NewFooter from "../layouts/Footer.jsx"

function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InfoCardsSection />
      <FeatureCards />
      <PhilosophySection />
      <SpotlightSection />
      <NewFooter />
    </main>
  )
}

export default Home