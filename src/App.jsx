import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Makeup from "./pages/Makeup";
import PortfolioWedding from "./pages/PortfolioWedding";
import PortfolioCategory from "./pages/PortfolioCategory";
import ShootPlanner from "./pages/ShootPlanner";
import StudioRental from "./pages/StudioRental";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-your-shoot" element={<ShootPlanner />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/wedding" element={<PortfolioWedding />} />
        <Route path="/portfolio/:categorySlug" element={<PortfolioCategory />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/studio-rental" element={<StudioRental />} />
      </Routes>
    </Router>
  );
}
