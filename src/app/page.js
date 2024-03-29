import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./sections/header";
import Banner from "./sections/banner";
import SalesProgram from "./sections/salesProgram";
import SatisfiedCustomers from "./sections/satisfiedCustomers";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="bg-white text-logo-blue">
      <Header />
      
      <Banner />
      
      <SalesProgram />
      
      <section>
        {/* Our process */}
      </section>
      
      <section>
        {/* Banner (image on the left, text on the right) */}
      </section>
      
      <section>
        {/* Slider with logos */}
      </section>
      
      <section>
        {/* News block (3 column news) */}
      </section>
      
      <section>
        {/* Knowledge base (accordion) */}
      </section>
      
      <SatisfiedCustomers />
      
      <Footer />
    </div>
  );
}