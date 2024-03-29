import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-logo-blue text-white grid grid-cols-4 gap-4 p-8">
      <div className="flex flex-col justify-end">
      <Image src="/fist.png" alt="Company Logo" width={167} height={79} />
      </div>
      <div>
        <h3>Fist d.o.o.</h3>

        <p>
            Brodišče 4, 1236 Trzin <br />
            Slovenija
        </p>

        <p>
            T +386 1 562 11 53 <br />
            E info@fist.si
        </p>
      </div>
      <div>
        <h3>Prodajni Program</h3>
        <ul>
          <li><i className="fas fa-arrow-right"></i> Polietileni </li>
          
          <li><i className="fas fa-arrow-right"></i> Folijski materiali </li>

          <li><i className="fas fa-arrow-right"></i> Stireli </li>

          <li><i className="fas fa-arrow-right"></i> Barvila in dodatki </li>

          <li><i className="fas fa-arrow-right"></i> Polipropileni </li>

          <li><i className="fas fa-arrow-right"></i> Tehnični granulati </li>
        </ul>
      </div>

      <div>
        <h3>Spremljajte Nas</h3>

        <a href="https://www.linkedin.com/company/fist-d-o-o/" className="flex items-center gap-2">
            <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
            />
            
            LinkedIn
        </a>
        <a href="https://www.youtube.com/@Fist_doo" className="flex items-center gap-2">
            <Image
                src="/youtube.png"
                alt="YouTube"
                width={28}
                height={28}
            />

            YouTube
        </a>
      </div>
    </footer>
  );
};

export default Footer;