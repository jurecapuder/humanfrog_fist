import React from "react";

const newsItems = [
  {
    date: "10. 3. 2023 · NOVICA",
    title: "Strokovnost in trajnost združena v pridobitvi ISO 14001:2015",
    content: "Z veseljem vas obveščamo da smo v podjetju Fist d.o.o uspešno pridobili okolijski standard ISO 14001:2015..."
  },
  {
    date: "10. 3. 2023 · NOVICA",
    title: "Naš partner SABIC s ponosom predstavlja novo trajnostno zmes LNP™ ELCRIN™ WF0051iQ.",
    content: "Ta zmes ne zagotavlja le visoke zmogljivosti za električne aplikacije, temveč prispeva tudi k stalnim okoljskim pobudam."
  },
  {
    date: "10. 3. 2023 · NOVICA",
    title: "Strokovnost in trajnost združena v pridobitvi ISO 14001:2015",
    content: "Z veseljem vas obveščamo da smo v podjetju Fist d.o.o uspešno pridobili okolijski standard ISO 14001:2015..."
  },
];

const NewsBlock = () => {
  return (
    <div>
      <div className="text-center">
        <h2>
          Svet 360&#176;- Novice, nasveti in spoznanja na enem mestu
        </h2>
        <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />
      </div>

      <div className="flex justify-evenly mt-10">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <p>{item.date}</p>
            <h3 className="text-logo-blue">{item.title}</h3>
            <p>{item.content.substring(0, 50)}...</p>
            <a href="#" className="text-fist-oranzna">Več</a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-fist-oranzna text-white py-2 px-4 rounded">
          Ves Svet&#176;
        </button>
      </div>
    </div>
  );
};

export default NewsBlock;