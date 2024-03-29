import React from "react";

const About = () => {
  return (
    <div className="flex justify-between">
      <img src="/roke.png" alt="Roke" className="w-1/2" />
      <div className="w-1/2">
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
  );
};

export default About;