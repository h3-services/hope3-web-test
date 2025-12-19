import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import WhyHope3 from './pages/whyHope3.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-hope3" element={<WhyHope3 />} />
      </Routes>
    </Router>
  )
}

export default App