import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./sections/header";
import SatisfiedCustomers from "./sections/satisfiedCustomers";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="bg-white text-logo-blue">
      <Header />
      
      <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(/background-image.jpg)` }}>
        <div className="w-full h-20 bg-blue-800 opacity-90 flex items-center justify-end mr-28">
          <div className="flex items-center border-2 border-gray-300 p-2 rounded-md">
            <input className="bg-transparent outline-none flex-grow w-80" type="text" placeholder="Iskanje po prodajnem programu" />
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="px-28 w-1/3 relative bg-blue-800 bg-opacity-90 pl-4 text-white flex flex-col items-center">
          <h2 className="text-4xl font-bold">Naši plastični granulati</h2>
          <h2 className="text-4xl font-bold">Vaši trajnostno<br />naravni izdelki</h2>
          <div className="w-1/2 h-1 bg-orange-500 my-4"></div>
          <p className="text-lg">Ukvarjamo se z distribucijo plastičnih granulatov sit amet consectetur. Aliquet mauris amet morbi tincideunt ori c vitae commodo.</p>
          <div className="flex mt-4">
            <button className="bg-blue-800 text-white rounded-full px-4 py-2 mr-4">Prodajni program</button>
            <button className="border-2 border-blue-800 text-blue-800 rounded-full px-4 py-2">Povpraševanje</button>
          </div>
          <div className="mt-8">
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
      </section>
      
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