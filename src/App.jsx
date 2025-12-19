import Header from "./components/Header.jsx"
import HeroSection from "./components/HeroSection.jsx"
import SpinningLogo from "./components/SpinningLogo.jsx"
import FeatureCards from "./components/FeatureCards.jsx"
import PhilosophySection from "./components/PhilosophySection.jsx"
import SpotlightSection from "./components/SpotlightSection.jsx"
import NewFooter from "./components/NewFooter.jsx"

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SpinningLogo />
      <FeatureCards />
      <PhilosophySection />
      <SpotlightSection />
      <NewFooter />
    </main>
  )
}

export default App