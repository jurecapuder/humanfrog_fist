"use client";

import React, { useState } from "react";

const questions = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
  { question: "Question 4", answer: "Answer 4" },
  { question: "Question 5", answer: "Answer 5" },
  { question: "Question 6", answer: "Answer 6" },
]; // Replace with your questions and answers

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