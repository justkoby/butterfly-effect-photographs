import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfiniteGallery from "../components/InfiniteGallery";
import About from "../components/About";
import Services from "../components/Services";
import VideoShowcase from "../components/VideoShowcase";
import StudioRentals from "../components/StudioRentals";
import InstagramFeed from "../components/InstagramFeed";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Butterfly Effect Photographs | Fine Art Photography & Studio · Accra, Ghana";
  }, []);

  return (
    <>
      <Navbar />
      <main className="home-main">
        {/* Sticky Hero section: pinned during initial scroll */}
        <div className="hero-pinned-wrapper">
          <Hero />
        </div>

        {/* Rising opaque layer that covers hero cleanly */}
        <div className="layered-content-deck">
          <InfiniteGallery />
          <About />
          <Services />
          <VideoShowcase />
          <StudioRentals />
          <InstagramFeed />
          <BookingCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
