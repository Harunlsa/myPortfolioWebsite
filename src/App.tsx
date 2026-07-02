import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DesignDoc from "./DesignDoc";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/design"
          element={
            <div className="bg-[#131313] text-[#e5e2e1] min-h-screen">
              <Navbar />
              <div className="pt-36 pb-12">
                <DesignDoc />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
