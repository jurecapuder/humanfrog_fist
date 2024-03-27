import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="bg-white text-logo-blue">
      <header className="flex items-center justify-between" style={{ padding: '0 10vw' }}>
        <Image src="/fist.png" alt="Company Logo" width={167} height={79} />
        
        <nav>
          <ul className="flex space-x-10">
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
      
      <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(/background-image.jpg)` }}>
        <div className="w-full h-20 bg-blue-800 opacity-90 flex items-center justify-end mr-28">
          <div className="flex items-center border-2 border-gray-300 p-2 rounded-md">
            <input className="bg-transparent outline-none flex-grow w-80" type="text" placeholder="Iskanje po prodajnem programu" />
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="relative ml-1/10 bg-blue-800 bg-opacity-90 p-4 rounded text-white">
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