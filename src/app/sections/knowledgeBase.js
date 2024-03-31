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
    <div className="flex bg-[#151A45] text-white mt-10 mb-10 pl-10 pr-10">
      <div className="w-1/2">
        <h2 className="text-center">Baza znanja</h2>
        <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />
      </div>
      <div className="w-1/2">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className={`question cursor-pointer ${openIndex === index ? "text-fist-oranzna" : ""}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{ lineHeight: "1.5" }}
            >
              {item.question}
              <span className="arrow float-right">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <div className="text-black" style={{ lineHeight: "1.5" }}>{item.answer}</div>
            )}
            <hr className="separator border-t border-black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;