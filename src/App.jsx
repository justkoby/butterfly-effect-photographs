import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Makeup from "./pages/Makeup";
import PortfolioWedding from "./pages/PortfolioWedding";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/portfolio/wedding" element={<PortfolioWedding />} />
      </Routes>
    </Router>
  );
}
