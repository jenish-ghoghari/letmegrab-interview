import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import OurService from "./OurServices/OurService";
import ProductCard from "./ProductCard";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OurService />
      <ProductCard />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
