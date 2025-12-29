import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Rectangle from "../assets/Rectangle.png";
import Shop from "../components/Shop";
import Experiences from "../components/Experiences";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div
        className="w-full  h-screen bg-cover bg-bottom"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <Navbar />
        <section id="furniture" className="h-full">
          <Hero />
        </section>
      </div>

      <section id="shop">
        <Shop />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="Contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;
