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
    <div className="relative" style={{ margin: "0 10%" }}>
      <div className="text-center">
        <h4 id="svet-360" className="text-[#151A45] uppercase" style={{ paddingTop: "50px" }}>
          Svet 360&#176;- Novice, nasveti in spoznanja na enem mestu
        </h4>
        <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />
      </div>

      <div className="flex justify-between mt-10">
        {newsItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex-1 flex-shrink ${index === 1 ? 'border-r border-l border-gray-300' : ''}`}
            style={{ padding: '0 26.5px' }}
          >
            <h3 className="text-[#8F8F8F] text-sm">{item.date}</h3>
            <h2 className="text-[#434A8D] font-bold mt-2" style={{ fontSize: '20px', lineHeight: '20px' }}>{item.title}</h2>
            <p>{item.content}</p>
            <p className="cursor-pointer text-[#434A8D]">več</p>
          </div>
        ))}
      </div>

    <div className="text-center mt-10">
      <button className="bg-[#434A8D] text-white py-2 px-4 rounded-3xl">
        Ves Svet 360&#176;
      </button>
    </div>
    </div>
  );
};

export default NewsBlock;