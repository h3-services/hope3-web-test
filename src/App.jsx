// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import WhyHope3 from './pages/WhyHope3.jsx'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/why-hope3" element={<WhyHope3 />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App


// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WhyHope3 from "./pages/WhyHope3.jsx";
import Hope3Journey from "./pages/Hope3Journey.jsx";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/why-hope3" element={<WhyHope3 />} />
        <Route path="/hope3-journey" element={<Hope3Journey />} />
        <Route path="/hope3-journey" element={<div>HOPE3 Journey Page</div>} />
        <Route path="/our-students" element={<div>Our Students Page</div>} />
        <Route path="/our-projects" element={<div>Our Projects Page</div>} />
        <Route path="/hope3-journey" element={<div>HOPE3 Journey Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/leadership-&-board" element={<div>Leadership & Board Page</div>} />
        <Route path="/financials" element={<div>Financials Page</div>} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
        <Route path="/be-informed" element={<div>Be Informed Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
