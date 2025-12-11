import Navbar from "./Navbar"
//  import NavbarVer1 from "./NavbarVer1"
import HeroSection from "./HeroSection"

const Header = () => {
  return (
    <header className="relative">
      <div className="absolute top-4 left-0 right-0 z-10 px-4">
        <Navbar />
        {/* <NavbarVer1 /> */}
      </div>
      <HeroSection />
    </header>
  )
}

export default Header
