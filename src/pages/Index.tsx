import { useEffect } from "react";
import "@/components/landing/landing.css";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HowItWorks from "@/components/landing/HowItWorks";
import DualCTA from "@/components/landing/DualCTA";
import ServiceArea from "@/components/landing/ServiceArea";
import Reviews from "@/components/landing/Reviews";
import Faq from "@/components/landing/Faq";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    const timer = setTimeout(scrollToHash, 300);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="landing min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <HowItWorks />
      <DualCTA />
      <ServiceArea />
      <Reviews />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
