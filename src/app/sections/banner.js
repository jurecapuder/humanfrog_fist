import React from "react";

function Banner() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(/background-image.jpg)` }}>
      <div className="w-full h-20 bg-blue-800 opacity-90 flex items-center justify-end" style={{ padding: '0 10%'}}>
        <div className="flex items-center border-2 border-gray-300 p-2 rounded-md">
          <input className="bg-transparent outline-none flex-grow w-80" type="text" placeholder="Iskanje po prodajnem programu" />
          <i className="fas fa-search"></i>
        </div>
        <div className="absolute h-20 w-full bg-blue-900 opacity-90" style={{ left: '10%' }}></div>
      </div>

      <div className="flex justify-center" style={{ padding: '0 10%' }}>
        <div className="bg-blue-800 bg-opacity-90 pl-4 text-white flex flex-col items-start pt-4 pb-10 px-4" style={{ maxWidth: 'calc(50% - 20px)' }}>
          <h2 className="text-4xl">Naši plastični granulati</h2>
          <h2 className="text-4xl font-bold">Vaši trajnostno<br />naravni izdelki</h2>
          <div className="w-1/2 h-1 bg-orange-500 my-4"></div>
          <p className="text-lg">Ukvarjamo se z distribucijo plastičnih granulatov sit amet consectetur. Aliquet mauris amet morbi tincideunt ori c vitae commodo.</p>
          <div className="flex mt-4">
            <button className="bg-[#BFC4F3] text-logo-blue font-bold rounded-full px-4 py-2 mr-4">Prodajni program</button>
            <button className="border-2 border-[#BFC4F3] text-[#BFC4F3] rounded-full px-4 py-2">Povpraševanje</button>
          </div>
          <div className="mt-8">
            <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 38.0977L8.01172 32.1094L9.81641 30.3047L14 34.4883L18.1836 30.3047L19.9883 32.1094L14 38.0977Z" fill="#BFC4F3"/>
              <rect x="0.5875" y="46.9125" width="46.325" height="26.825" rx="13.4125" transform="rotate(-90 0.5875 46.9125)" stroke="#BFC4F3" stroke-width="1.175"/>
              <line x1="14" y1="30" x2="14" y2="11" stroke="#BFC4F3" stroke-width="2" stroke-dasharray="2 2"/>
            </svg>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
    </section>
  )
}

export default Banner;