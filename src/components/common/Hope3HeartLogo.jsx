const Hope3HeartLogo = ({ width = 140, height = 50 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .hope3-text {
              font-family: 'Inter', 'Helvetica Neue', sans-serif;
              font-size: 24px;
              font-weight: 700;
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
      
      {/* Heart/Diamond shape replacing 'O' */}
      <g transform="translate(22, 12)">
        {/* Heart/Diamond shape with multiple colors */}
        <path d="M12 4 L8 8 L12 20 L16 8 Z" fill="#EF4444" />
        <path d="M12 4 L16 8 L20 4 L16 0 Z" fill="#10B981" />
        <path d="M12 4 L8 8 L4 4 L8 0 Z" fill="#0D9488" />
        <circle cx="12" cy="8" r="2" fill="#2563EB" />
      </g>
    </svg>
  )
}

export default Hope3HeartLogo