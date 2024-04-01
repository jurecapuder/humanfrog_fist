import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-between">
      <div style={{ width: '40%', marginLeft: '10%' }} className="mr-5">
        <Image src="/roke.png" alt="Roke" className="object-contain" width={700} height={300} />
      </div>
      <div style={{ width: '40%', marginRight: '10%' }} className="ml-5 flex items-center text-left">
        <div>
          <h2 className="text-2xl mb-4" id="o-nas">
            <strong>Fist.</strong> Neomejene možnosti s plastičnimi granulati.
          </h2>

          <ul className="list-disc list-inside">
            <li>Ukvarjamo se z distribucijo plastičnih granulatov sit amet consectetur.</li>
            <li>Aliquet mauris amet morbi tincidunt orci vitae commodo.</li>
            <li>Eget tempor cras curabitur nec pellentesque scelerisque et in. Id turpis dictum egestas id enim at aliquam.</li>
            <li>Eget tempor cras curabitur nec pellentesque scelerisque et in. Id turpis dictum egestas id enim at aliquam.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;