import Navbar from "./navbar.jsx"
import HeroSection from "./HeroSection.jsx"
import InfoCardsSection from "../components/InfoCardsSection.jsx"
import FeatureCards from "./FeatureCards.jsx"
import PhilosophySection from "./PhilosophySection.jsx"
import SpotlightSection from "./SpotlightSection.jsx"
import NewFooter from "./NewFooter.jsx"

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