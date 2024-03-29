import React from "react";

const images = ["/borealis.png", "/synthos.png", "/chemtrend.png", "/viba.png"]; // Add your images here

const Represent = () => {
  return (
    <div className="text-center">
      <h2>ZASTOPAMO</h2>
      <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />

      <div className="flex justify-around mt-10">
        {images.map((img, idx) => (
          <div className="slide" key={idx}>
            <img src={img} alt="Customer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Represent;