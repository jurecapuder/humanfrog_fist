"use client";

import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:flex hidden top-0 bg-white items-center justify-between sticky z-50" style={{ width: '100%', padding: '0 10%' }}>
      <img id="home" src="/fist.png" alt="Company Logo" />
      
      <nav>
        <ul className="flex space-x-10">
          <li>
            <a href="#home">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.8906 14.1211L26.1406 15.9531L25.293 15.1328V28.75H2.48828V15.3516L1.88672 15.9531L0.109375 14.0938L14 0.832031L27.8906 14.1211ZM22.75 26.207V12.6992L14 4.33203L5.05859 12.918V26.207H22.75Z" fill="#434A8D"/>
              </svg>  
            </a>
          </li>
          <li><a href="#prodajni-program">Prodajni program</a></li>
          <li><a href="#zastopamo">Zastopamo</a></li>
          <li><a href="#svet-360">Svet 360&#176;</a></li>
          <li><a href="#baza-znanja">Baza znanja</a></li>
          <li><a href="#o-nas">O nas</a></li>
        </ul>
      </nav>

      <button className="bg-purple-500 text-white rounded-full px-4 py-2">Povpraševanje</button>

      <div className="border-l border-gray-300 h-10 mx-4" />  
        
      <div className="relative inline-flex">
        <Image className="inline-block mr-5" src="/slovenian-flag.png" alt="Slovenia Flag" width={32} height={18} />

        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8.09766L0.0117188 2.10938L1.81641 0.304688L6 4.48828L10.1836 0.304688L11.9883 2.10938L6 8.09766Z" fill="#434A8D"/>
        </svg>
      </div>
    </header>
    )
}

export default Header;