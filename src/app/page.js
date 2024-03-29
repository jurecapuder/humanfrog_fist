import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./sections/header";
import Banner from "./sections/banner";
import SatisfiedCustomers from "./sections/satisfiedCustomers";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="bg-white text-logo-blue">
      <Header />
      
      <Banner />
      
      <section>
        <div className="flex flex-col items-center">
          <div className="h-8 bg-gray-300" />

          <h2 className="text-4xl font-bold mb-8">NAŠ PRODAJNI PROGRAM</h2>

          <div className="flex justify-between w-4/5">
            <div className="relative left-0 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-arrow-left"></i>
            </div>
            <div className="card">
              <div style={{ paddingBottom: '56.25%', background: 'black' }} />
              <h3 className="text-2xl font-bold">Product Name</h3>
              <p>Product description</p>
            </div>

            <div className="card">
              <div style={{ paddingBottom: '56.25%', background: 'black' }} />
              <h3 className="text-2xl font-bold">Product Name</h3>
              <p>Product description</p>
            </div>

            <div className="card">
              <div style={{ paddingBottom: '56.25%', background: 'black' }} />
              <h3 className="text-2xl font-bold">Product Name</h3>
              <p>Product description</p>
            </div>

            <div className="card">
              <div style={{ paddingBottom: '56.25%', background: 'black' }} />
              <h3 className="text-2xl font-bold">Product Name</h3>
              <p>Product description</p>
            </div>

            <div className="card">
              <div style={{ paddingBottom: '56.25%', background: 'black' }} />
              <h3 className="text-2xl font-bold">Product Name</h3>
              <p>Product description</p>
            </div>

            <div className="relative right-0 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-arrow-right"></i>
            </div>

          </div>

          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>

          <div className="h-8 bg-gray-300" />
        </div>
      </section>
      
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