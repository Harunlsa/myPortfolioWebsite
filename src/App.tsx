import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DesignDoc from "./DesignDoc";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-on-background transition-colors duration-300">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/design"
              element={
                <div className="pt-36 pb-12">
                  <DesignDoc />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
