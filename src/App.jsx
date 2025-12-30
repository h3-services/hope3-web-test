import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WhyHope3 from "./pages/whyHope3.jsx";
import Hope3Journey from "./pages/Hope3Journey.jsx";
import OurStudents from "./pages/OurStudents.jsx";
import Donate from "./pages/Donate.jsx";
import JoinHope3 from "./pages/JoinHope3.jsx";

// Use basename for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-hope3" element={<WhyHope3 />} />
        <Route path="/hope3-journey" element={<Hope3Journey />} />
        <Route path="/hope3-journey" element={<div>HOPE3 Journey Page</div>} />
        <Route path="/our-students" element={<OurStudents />} />
        <Route path="/our-projects" element={<div>Our Projects Page</div>} />
        <Route path="/hope3-journey" element={<div>HOPE3 Journey Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/leadership-&-board" element={<div>Leadership & Board Page</div>} />
        <Route path="/financials" element={<div>Financials Page</div>} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
        <Route path="/be-informed" element={<div>Be Informed Page</div>} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join-hope3" element={<JoinHope3 />} />
      </Routes>
    </Router>
  );
}

export default App;
