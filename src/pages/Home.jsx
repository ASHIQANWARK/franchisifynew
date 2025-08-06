import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import ChatBot from "../pages/Chatbot";
import WhyFranchisify from "../pages/WhyChooseus";
import About from "../pages/About";
import IndustryGrid from "../pages/IndustryGrid";
import Enquiry from "../pages/Enquiry";
import ShortsSection from "../pages/ShortsSection";
import CEOQuoteCard from "../pages/Ceo";

const Home = () => {
  return (
    <div>
      <Hero />
      <About /> 
      <Services />{/* Make sure this component wraps its content in a <section id="about"> */}
      <IndustryGrid />
      <WhyFranchisify />
      <ShortsSection />  
      <CEOQuoteCard />
      <Team />
      <Enquiry />
      <ChatBot />
    </div>
  );
};

export default Home;
