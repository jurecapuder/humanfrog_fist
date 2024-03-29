import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-logo-blue text-white grid grid-cols-4 gap-4 p-8">
      <div>
      <Image src="/fist.png" alt="Company Logo" width={167} height={79} />
      </div>
      <div>
        <h3>Company Name</h3>
        <p>Address</p>
        <p>Phone</p>
      </div>
      <div>
        <h3>Prodajni Program</h3>
        <ul>
          <li><i className="fas fa-arrow-right"></i> Subsection 1</li>
          {/* Repeat the above line for each subsection */}
        </ul>
      </div>
      <div>
        <h3>Spremljajte Nas</h3>
        <a href="https://www.linkedin.com/company/fist-d-o-o/"><img src="/linkedin.png" alt="LinkedIn" /> LinkedIn</a>
        <a href="https://www.youtube.com/@Fist_doo"><img src="/youtube.png" alt="YouTube" /> YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;