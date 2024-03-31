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
    <div className="knowledge-base flex">
      <div className="left-column w-1/3">
        <h2 className="text-center">Baza znanja</h2>
        <div className="border-t border-fist-oranzna h-px w-32 mx-auto mt-5" />
      </div>
      <div className="right-column w-2/3">
        {questions.map((item, index) => (
          <div key={index}>
            <div
              className={`question cursor-pointer ${openIndex === index ? "text-fist-oranzna" : ""}`}
              onClick={() => setOpenIndex(index)}
            >
              {item.question}
              <span className="arrow float-right">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <div className="text-black">{item.answer}</div>
            )}
            <hr className="separator border-t border-black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;