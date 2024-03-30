import React from "react";

const About = () => {
  return (
    <div className="flex justify-between">
      <div style={{ width: '40%', marginLeft: '10%' }} className="mr-5">
        <img src="/roke.png" alt="Roke" className="w-full h-auto object-contain" />
      </div>
      <div style={{ width: '40%', marginRight: '10%' }} className="ml-5 flex items-center text-left">
        <div>
          <h2 className="text-2xl mb-4">
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