import Feature from "@/components/ui/Feature";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
};

export default LandingPage;
