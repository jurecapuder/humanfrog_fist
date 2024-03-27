import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="App px-28">
      <header className="flex items-center justify-between">
        <Image src="/fist.png" alt="Company Logo" width={167} height={79} />
        
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home"><i className="fas fa-home"></i></a></li> {/* House icon */}
            <li><a href="#prodajni-program">Prodajni program</a></li>
            <li><a href="#zastopamo">Zastopamo</a></li>
            <li><a href="#svet-360">Svet 360&#176;</a></li>
            <li><a href="#baza-znanja">Baza znanja</a></li>
            <li><a href="#o-nas">O nas</a></li>
          </ul>
        </nav>
        
        <button className="bg-purple-500 text-white rounded-full px-4 py-2">Povpraševanje</button>
        
        <div className="relative inline-flex">
          <Image className="inline-block" src="/slovenian-flag.png" alt="Slovenia Flag" width={32} height={18} />
          <select className="ml-2">
            {/* Add more language options here */}
          </select>
        </div>
      </header>
      
      <section>
        <div className="relative">
          <div className="h-20 bg-blue-800 opacity-50"></div>
          
          <div className="absolute right-0 top-0 mr-28 mt-10">
            <div className="flex items-center border-2 border-gray-300 p-2 rounded-md">
              <input className="bg-transparent outline-none flex-grow" type="text" placeholder="Iskanje po prodajnem programu" />
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        {/* Our sales program (slider) */}
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
      
      <section>
        {/* Satisfied customers (slider with logos) */}
      </section>
      
      <footer>
        {/* Footer */}
      </footer>
    </div>
  );
}