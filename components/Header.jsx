import NavbarVer1 from "./NavbarVer1.jsx"
import HeroSection from "./HeroSection.jsx"

const Header = () => {
  return (
    <header className="relative h-96" style={{backgroundImage: 'url(/assets/college-background1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="absolute top-4 left-0 right-0 z-10 px-4">
        <NavbarVer1 />
      </div>
      <HeroSection />
    </header>
  )
}

export default Header