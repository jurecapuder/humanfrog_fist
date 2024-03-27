import React from "react";
// import your custom styles here

export default function Home() {
  return (
    <div className="App p-30">
      <header className="flex justify-between items-center">
        <img src="/fist.png" alt="Company Logo" /> {/* Replace with your actual logo */}
        
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home"><i className="fas fa-home"></i></a></li> {/* House icon */}
            <li><a href="#prodajni-program">Prodajni program</a></li>
            <li><a href="#zastopamo">Zastopamo</a></li>
            <li><a href="#svet-360">Svet 360</a></li>
            <li><a href="#baza-znanja">Baza znanja</a></li>
            <li><a href="#o-nas">O nas</a></li>
          </ul>
        </nav>
        
        <button className="bg-purple-500 text-white rounded-full px-4 py-2">Povpraševanje</button>
        
        <div className="relative inline-flex">
          <img className="inline-block" src="si.png" alt="Slovenia Flag" /> {/* Replace with your actual flag image */}
          <select className="ml-2">
            {/* Add more language options here */}
          </select>
        </div>
      </header>
      
      <section>
        {/* GL banner with autoplay video */}
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