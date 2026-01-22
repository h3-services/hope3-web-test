const Hope3VectorLogo = ({ width = 140, height = 50 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .hope3-text {
              font-family: 'Inter', 'Helvetica Neue', sans-serif;
              font-size: 24px;
              font-weight: 600;
              fill: #2563EB;
            }
            .hope3-o-hidden {
              fill: transparent;
            }
          `}
        </style>
      </defs>
      
      {/* Text with hidden O */}
      <text x="0" y="32" className="hope3-text">
        H<tspan className="hope3-o-hidden">O</tspan>PE3
      </text>
      
      {/* Abstract human figure replacing 'O' */}
      <g transform="translate(22, 8)">
        {/* Head - Blue */}
        <circle cx="12" cy="8" r="4" fill="#2563EB" />
        
        {/* Body - Green */}
        <rect x="9" y="12" width="6" height="12" rx="3" fill="#10B981" />
        
        {/* Left arm - Teal */}
        <rect x="4" y="15" width="6" height="3" rx="1.5" fill="#0D9488" />
        
        {/* Right arm - Teal */}
        <rect x="14" y="15" width="6" height="3" rx="1.5" fill="#0D9488" />
        
        {/* Left leg - Red */}
        <rect x="7" y="24" width="3" height="8" rx="1.5" fill="#EF4444" />
        
        {/* Right leg - Red */}
        <rect x="14" y="24" width="3" height="8" rx="1.5" fill="#EF4444" />
      </g>
    </svg>
  )
}

export default Hope3VectorLogo