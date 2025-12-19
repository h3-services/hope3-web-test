import NavbarVer1 from "./navbar.jsx"

const Header = () => {
  return (
    <header className="relative h-96" style={{backgroundImage: 'url(/src/assets/college-graduation-pictures.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="absolute top-4 left-0 right-0 z-10 px-4">
        <NavbarVer1 />
      </div>
    </header>
  )
}

export default Header