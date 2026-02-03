import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookLorry from "./components/BookLorry";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Contact />
          </>
        } />
        <Route path="/book-lorry" element={<BookLorry />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
