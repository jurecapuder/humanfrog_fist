import React from "react";

function Banner() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(/background-image.jpg)` }}>
      <div className="w-full h-20 bg-blue-800 opacity-90 flex items-center justify-end mr-28">
        <div className="flex items-center border-2 border-gray-300 p-2 rounded-md">
          <input className="bg-transparent outline-none flex-grow w-80" type="text" placeholder="Iskanje po prodajnem programu" />
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="flex">
        <div className="w-[456px] bg-blue-800 bg-opacity-90 pl-4 text-white flex flex-col items-center pt-20 pb-10">
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
        <div className="flex-grow"></div>
      </div>
    </section>
  )
}

export default Banner;