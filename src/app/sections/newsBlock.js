import React from "react";

const newsItems = [
  { date: "10.3.2023", title: "Title 1", content: "Content 1" },
  { date: "10.3.2023", title: "Title 2", content: "Content 2" },
  { date: "10.3.2023", title: "Title 3", content: "Content 3" },
]; // Replace with your news data

const NewsBlock = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Novice</h2>
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