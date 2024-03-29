import React from "react";
import Image from "next/image";

function Header() {
    return (
        <header className="flex items-center justify-between" style={{ padding: '0 10vw' }}>
        <Image src="/fist.png" alt="Company Logo" width={167} height={79} />
        
        <nav>
          <ul className="flex space-x-10">
            <li><a href="#home"><i className="fas fa-home"></i></a></li> {/* House icon */}
            <li><a href="#prodajni-program">Prodajni program</a></li>
            <li><a href="#zastopamo">Zastopamo</a></li>
            <li><a href="#svet-360">Svet 360&#176;</a></li>
            <li><a href="#baza-znanja">Baza znanja</a></li>
            <li><a href="#o-nas">O nas</a></li>
          </ul>
        </nav>

        <button className="bg-purple-500 text-white rounded-full px-4 py-2">Povpraševanje</button>
        
        <div className="relative inline-flex">
          <Image className="inline-block" src="/slovenian-flag.png" alt="Slovenia Flag" width={32} height={18} />
          <select className="ml-2">
            {/* Add more language options here */}
          </select>
        </div>
      </header>
    )
}

export default Header;