import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { memo } from "react";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default memo(Home);
