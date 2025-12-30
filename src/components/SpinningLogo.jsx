"use client"

import '../styles/spinningLogo.css'
import hope3Logo from '../assets/hope3_logo.png'

function SpinningLogo() {

  return (
    <div className="spinning-logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="logo-wrapper">
        <img src={hope3Logo} alt="HOPE3 Logo" className="spinning-logo" style={{ width: '200px', height: '200px' }} />
        <div className="logo-text" style={{ fontFamily: 'Keep On Truckin\'', fontSize: '32px', fontWeight: '950', color: 'blue', textAlign: 'center' }}>HOPE3</div>
      </div>
    </div>
  )
}

export default SpinningLogo
