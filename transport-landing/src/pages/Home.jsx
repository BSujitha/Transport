import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import BookLorry from "../components/BookLorry";
import Contact from "../components/Contact";  
import Footer from "../components/Footer";    

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BookLorry />
      <Contact />    
      <Footer />     
    </>
  );
}

export default Home;
