import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/HomePage/ServicesSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import PricingSection from "../components/HomePage/PricingSection";
import ContactUs from "./ContactUs";
import AboutSection from "../components/HomePage/AboutSection";



const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
