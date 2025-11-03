import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TopFranchise from "./Top";
import ChatBot from "../pages/Chatbot";
import WhyFranchisify from "../pages/WhyChooseus";

import IndustryGrid from "../pages/IndustryGrid";
import Enquiry from "../pages/Enquiry";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <div>
      <Hero />
      <TopFranchise />
      <Services />{/* Make sure this component wraps its content in a <section id="about"> */}
      <IndustryGrid />
      <WhyFranchisify />
      <Testimonials />
      <Enquiry />
      <ChatBot />
    </div>
  );
};

export default Home;
