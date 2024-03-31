"use client";

import React, { useState } from "react";

const images = [
  { src: "/borealis.png", title: "POLIOLEFINI", description: "Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži." },
  { src: "/synthos.png", title: "TEHNIČNI MATERIALI", description: "Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži." },
  { src: "/chemtrend.png", title: "TRAJNOSTNI MATERIALI", description: "Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži." },
  { src: "/viba.png", title: "BARVILA IN DODATKI", description: "Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži." },
  { src: "/cabot.png", title: "Cabot", description: "Polieten je najpogostejša plastika. Njegova osnovna uporaba je v embalaži." },
];

const SalesProgram = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 5);
  };
  
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + 5) % 5);
  };
  
  const getImages = () => {
    let imgArray = [];
    for (let i = 0; i < 4; i++) {
      imgArray.push(images[(currentIndex - i + images.length) % images.length]);
    }
    return imgArray;
  };

  const getDots = () => {
    let dotsArray = [];
    for (let i = 0; i < 5; i++) {
      dotsArray.push(i);
    }
    return dotsArray;
  };

  return (
    <div className="text-center bg-white pb-10 relative" style={{ margin: "30px 0" }}>
      <h2 className="pt-4 uppercase">Naš Prodajni program</h2>
      <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />

      <div style={{ margin: "0 10%", height: "168px" }} className="relative flex items-center justify-around mt-10">
        <button onClick={handlePrev} className="absolute left-0">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0.832031C15.9323 0.832031 17.7461 1.19661 19.4414 1.92578C21.1367 2.65495 22.6133 3.65755 23.8711 4.93359C25.1471 6.19141 26.1589 7.66797 26.9062 9.36328C27.6354 11.0768 28 12.8997 28 14.832C28 16.7461 27.6354 18.5599 26.9062 20.2734C26.1589 21.9688 25.1471 23.4544 23.8711 24.7305C22.6133 25.9883 21.1367 26.9818 19.4414 27.7109C17.7461 28.4583 15.9323 28.832 14 28.832C12.0677 28.832 10.2539 28.4583 8.55859 27.7109C6.86328 26.9818 5.3776 25.9883 4.10156 24.7305C2.84375 23.4544 1.84115 21.9688 1.09375 20.2734C0.364583 18.5599 0 16.7461 0 14.832C0 12.8997 0.364583 11.0768 1.09375 9.36328C1.82292 7.66797 2.81641 6.19141 4.07422 4.93359C5.35026 3.65755 6.84505 2.65495 8.55859 1.92578C10.2539 1.19661 12.0677 0.832031 14 0.832031ZM14 26.2617C15.5677 26.2617 17.0443 25.9609 18.4297 25.3594C19.8333 24.7578 21.0456 23.9375 22.0664 22.8984C23.1055 21.8594 23.9258 20.6471 24.5273 19.2617C25.1289 17.8763 25.4297 16.3906 25.4297 14.8047C25.4297 13.237 25.1289 11.7513 24.5273 10.3477C23.944 8.96224 23.1328 7.75 22.0938 6.71094C21.0547 5.67188 19.8424 4.85156 18.457 4.25C17.0534 3.64844 15.5677 3.34766 14 3.34766C12.4141 3.34766 10.9284 3.64844 9.54297 4.25C8.13932 4.86979 6.91797 5.69922 5.87891 6.73828C4.85807 7.75911 4.04688 8.97135 3.44531 10.375C2.84375 11.7604 2.54297 13.2461 2.54297 14.832C2.54297 16.3997 2.84375 17.8763 3.44531 19.2617C4.04688 20.6654 4.85807 21.8867 5.87891 22.9258C6.91797 23.9466 8.13932 24.7578 9.54297 25.3594C10.9284 25.9609 12.4141 26.2617 14 26.2617ZM15.75 9.0625L11.2656 13.5469H21.5469V16.0898H11.2656L15.75 20.5742L13.9727 22.3789L6.39844 14.832L13.9727 7.25781L15.75 9.0625Z" fill="#434A8D"/>
          </svg>
        </button>

        <div className="relative flex items-center justify-between mt-10" style={{ width: 'calc(100% - 56px)' }}>
          {getImages().map((image, index, array) => {
            let borderClass = '';
            let marginClass = '';
            if (index === 0) {
              marginClass = 'ml-5'; // Add left margin to the first image
            } else if (index === array.length - 1) {
              marginClass = 'ml-5'; // Add right margin to the last image
            }

            if (index === 1) {
              borderClass = 'border-l border-gray-300 px-3.5';
            } else if (index === 2) {
              borderClass = 'border-r border-l border-gray-300 px-3.5';
            }

            return (
              <div key={index} className={`flex flex-col ${borderClass} ${marginClass}`}>
                <img src={image.src} alt={image.title} className="mx-auto" />
                <div className="text-left w-full">
                  <h2 className="text-[#434A8D] font-bold">{image.title}</h2>
                  <p className="text-[#3C3C3C]">{image.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className="absolute right-0">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0.75C15.9323 0.75 17.7461 1.11458 19.4414 1.84375C21.1367 2.59115 22.6133 3.60286 23.8711 4.87891C25.1471 6.13672 26.1589 7.61328 26.9062 9.30859C27.6354 11.0039 28 12.8177 28 14.75C28 16.6823 27.6354 18.4961 26.9062 20.1914C26.1589 21.8867 25.1471 23.3724 23.8711 24.6484C22.6133 25.9062 21.1367 26.9089 19.4414 27.6562C17.7461 28.3854 15.9323 28.75 14 28.75C12.0677 28.75 10.2539 28.3854 8.55859 27.6562C6.86328 26.9089 5.3776 25.9062 4.10156 24.6484C2.84375 23.3724 1.84115 21.8867 1.09375 20.1914C0.364583 18.4961 0 16.6823 0 14.75C0 12.8177 0.364583 11.0039 1.09375 9.30859C1.84115 7.61328 2.84375 6.13672 4.10156 4.87891C5.3776 3.60286 6.86328 2.59115 8.55859 1.84375C10.2539 1.11458 12.0677 0.75 14 0.75ZM14 26.207C15.5859 26.207 17.0716 25.9062 18.457 25.3047C19.8424 24.7031 21.0547 23.8828 22.0938 22.8438C23.1328 21.8047 23.9531 20.5924 24.5547 19.207C25.1562 17.8216 25.457 16.3359 25.457 14.75C25.457 13.1641 25.1562 11.6784 24.5547 10.293C23.9531 8.90755 23.1328 7.69531 22.0938 6.65625C21.0547 5.61719 19.8424 4.79688 18.457 4.19531C17.0716 3.59375 15.5859 3.29297 14 3.29297C12.4141 3.29297 10.9284 3.59375 9.54297 4.19531C8.15755 4.79688 6.94531 5.61719 5.90625 6.65625C4.86719 7.69531 4.04688 8.90755 3.44531 10.293C2.84375 11.6784 2.54297 13.1641 2.54297 14.75C2.54297 16.3359 2.84375 17.8216 3.44531 19.207C4.04688 20.5924 4.86719 21.8047 5.90625 22.8438C6.94531 23.8828 8.15755 24.7031 9.54297 25.3047C10.9284 25.9062 12.4141 26.207 14 26.207ZM12.2227 8.98047L14.0273 7.17578L21.6016 14.75L14.0273 22.3242L12.2227 20.5195L16.707 16.0078H6.45312V13.4922H16.707L12.2227 8.98047Z" fill="#434A8D"/>
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-12 pb-10">
          {getDots().map((dot, idx) => (
            <div
              key={idx}
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: currentIndex % images.length === idx ? '#151A45' : '#D2D2D2',
                borderRadius: '50%',
                margin: '0 5px'
              }}
            ></div>
          ))}
        </div>

        <div className="flex justify-center mt-5 absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <button className="bg-[#434A8D] text-white font-bold py-2 px-4 rounded-3xl">
            Celotni program
          </button>
        </div>
    </div>
  );
};

export default SalesProgram;