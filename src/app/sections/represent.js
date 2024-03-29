"use client";

import React, { useState } from "react";

const images = ["/borealis.png", "/synthos.png", "/chemtrend.png", "/viba.png"]; // Add your images here

const Represent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const getImages = () => {
    let imgArray = [];
    for (let i = 0; i < 4; i++) {
      imgArray.push(images[(currentIndex + i) % images.length]);
    }
    return imgArray;
  };

  return (
    <div className="text-center">
      <h2>ZASTOPAMO</h2>
      <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />

      <div className="flex justify-around mt-10">
        {getImages().map((img, idx) => (
          <div className="slide" key={idx}>
            <img src={img} alt="Customer" />
          </div>
        ))}
      </div>

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Represent;