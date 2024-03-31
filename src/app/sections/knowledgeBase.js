"use client";

import React, { useState } from "react";

const questions = [
  { question: "Kakšne vrste plastičnih granulatov ponujate?", answer: "Answer 1" },
  { question: "Zakaj uporabiti čistilni granulat?", answer: "Answer 2" },
  { question: "Kako čistilni granulat deluje na različnih vrstah površin?", answer: "Answer 3" },
  { question: "Kakšne vrste plastičnih granulatov ponujate?", answer: "Answer 4" },
  { question: "Zakaj uporabiti čistilni granulat?", answer: "Answer 5" },
  { question: "Kako čistilni granulat deluje na različnih vrstah površin?", answer: "Answer 6" },
];

const KnowledgeBase = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex bg-[#151A45] text-white p-10 mt-10">
      <div className="w-1/2" style={{ paddingLeft: "10%"}}>
        <h2 id="baza-znanja">BAZA ZNANJA</h2>
        <div className="border-t border-fist-oranzna h-px w-32 mt-5" />
      </div>
      <div className="w-1/2" style={{ paddingRight: "10%"}}>
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className={`question cursor-pointer ${openIndex === index ? "text-fist-oranzna" : ""} text-[#BFC4F3]`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{ lineHeight: "1.5", marginBottom: "24px" }}
            >
              {item.question}
              <span className="arrow float-right">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <div className="text-white" style={{ lineHeight: "1.5", paddingBottom: "20px" }}>{item.answer}</div>
            )}
            <hr className="separator border-t border-black" />
          </div>
        ))}

        <button>
          Več znanja
        </button>
      </div>
    </div>
  );
};

export default KnowledgeBase;