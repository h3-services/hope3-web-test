"use client"

import hope3Logo from '../assets/hope3_logo.png'

function SpinningLogo() {
  const splitText = (text, color) => {
    return text.split('').map((letter, index) => (
      <span key={index} className="letter" style={{ color: color, fontSize: '65px', fontWeight: '950', fontFamily: 'Arial, sans-serif' }}>{letter}</span>
    ));
  };

  return (
    <div className="spinning-logo-container" style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'flex-start' }}>
      <div className="logo-wrapper">
        <img src={hope3Logo} alt="HOPE3 Logo" className="spinning-logo" style={{ width: '200px', height: '200px' }} />
        <div className="logo-text" style={{ fontFamily: 'Keep On Truckin\'', fontSize: '32px', fontWeight: '950', color: 'blue', textAlign: 'center' }}>HOPE3</div>
      </div>

      <div className="text-content">
        <div className="text-education">{splitText('Education', 'red')}</div>
        <div className="text-empowerment">{splitText('Empowerment', 'green')}</div>
        <div className="text-entrepreneurship">{splitText('Entrepreneurship', 'blue')}</div>
      </div>
    </div>
  )
}

export default SpinningLogo
