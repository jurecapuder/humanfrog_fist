"use client";

import React, { useState } from "react";

const images = ["/gorenje.png", "/bsh.png", "/gorenje.png", "/bsh.png"]; // Add your images here

function SatisfiedCustomers() {
  const [current, setCurrent] = useState(0);

  function goLeft() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function goRight() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  return (
    <div className="text-center">
      <h2>NAŠE ZADOVOLJNE STRANKE</h2>
      <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />

      <div className="slider">
        {images.map((img, idx) => (
          <div className={idx === current ? "slide active" : "slide"} key={idx}>
            {idx === current && (<img src={img} alt="Customer" />)}
          </div>
        ))}
        <button onClick={goLeft}>Go Left</button>
        <button onClick={goRight}>Go Right</button>
      </div>
    </div>
  );
}

export default SatisfiedCustomers;