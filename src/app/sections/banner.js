import React from "react";

function Banner() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(/background-image.jpg)` }}>
      <div className="relative w-full h-20">
        <div className="bg-blue-800 opacity-90 flex items-center justify-end w-full h-20">
          <div className="flex items-center border-2 border-[#0E1130] p-2 rounded-md bg-[#0E1130] text-[#8F8F8F]" style={{ marginRight: "10%" }}>
            <input className="bg-transparent outline-none flex-grow w-80" type="text" placeholder="Iskanje po prodajnem programu" />
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1719 0.950195C11.5755 0.950195 12.8971 1.21452 14.1367 1.74316C15.3763 2.29004 16.4518 3.02832 17.3633 3.95801C18.293 4.86947 19.0221 5.94499 19.5508 7.18457C20.0977 8.40592 20.3711 9.71842 20.3711 11.1221C20.3711 12.5257 20.0977 13.8473 19.5508 15.0869C19.0221 16.3265 18.293 17.4111 17.3633 18.3408C16.4518 19.2523 15.3763 19.9723 14.1367 20.501C12.8971 21.0479 11.5755 21.3213 10.1719 21.3213C8.76823 21.3213 7.45573 21.0479 6.23438 20.501C4.99479 19.9723 3.91016 19.2523 2.98047 18.3408C2.06901 17.4111 1.33984 16.3265 0.792969 15.0869C0.264323 13.8473 0 12.5257 0 11.1221C0 9.71842 0.264323 8.40592 0.792969 7.18457C1.33984 5.94499 2.06901 4.86947 2.98047 3.95801C3.91016 3.02832 4.99479 2.29004 6.23438 1.74316C7.45573 1.21452 8.76823 0.950195 10.1719 0.950195ZM10.1719 18.7783C11.2292 18.7783 12.2227 18.5778 13.1523 18.1768C14.082 17.7757 14.8932 17.2288 15.5859 16.5361C16.2786 15.8434 16.8255 15.0322 17.2266 14.1025C17.6276 13.1729 17.8281 12.1885 17.8281 11.1494C17.8281 10.0921 17.6276 9.09863 17.2266 8.16895C16.8255 7.23926 16.2786 6.42806 15.5859 5.73535C14.8932 5.04264 14.082 4.49577 13.1523 4.09473C12.2227 3.69368 11.2292 3.49316 10.1719 3.49316C9.13281 3.49316 8.14844 3.69368 7.21875 4.09473C6.28906 4.49577 5.47786 5.04264 4.78516 5.73535C4.09245 6.42806 3.54557 7.23926 3.14453 8.16895C2.74349 9.09863 2.54297 10.083 2.54297 11.1221C2.54297 12.1794 2.74349 13.1729 3.14453 14.1025C3.54557 15.0322 4.09245 15.8434 4.78516 16.5361C5.47786 17.2288 6.28906 17.7757 7.21875 18.1768C8.14844 18.5778 9.13281 18.7783 10.1719 18.7783ZM19.6328 18.751L28 27.1455L26.1953 28.9502L17.8281 20.6104V18.7783L19.6328 18.751Z" fill="#BFC4F3"/>
            </svg>
          </div>
        </div>
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