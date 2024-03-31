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
      <h4 id="baza-znanja" className="font-roboto text-left text-base font-bold leading-7 tracking-wider">BAZA ZNANJA</h4>
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

        <button className="flex bg-[#434A8D] text-white py-2 px-4 rounded-3xl">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0.75C15.9323 0.75 17.7461 1.11458 19.4414 1.84375C21.1367 2.59115 22.6133 3.60286 23.8711 4.87891C25.1471 6.13672 26.1589 7.61328 26.9062 9.30859C27.6354 11.0039 28 12.8177 28 14.75C28 16.6823 27.6354 18.4961 26.9062 20.1914C26.1589 21.8867 25.1471 23.3724 23.8711 24.6484C22.6133 25.9062 21.1367 26.9089 19.4414 27.6562C17.7461 28.3854 15.9323 28.75 14 28.75C12.0677 28.75 10.2539 28.3854 8.55859 27.6562C6.86328 26.9089 5.3776 25.9062 4.10156 24.6484C2.84375 23.3724 1.84115 21.8867 1.09375 20.1914C0.364583 18.4961 0 16.6823 0 14.75C0 12.8177 0.364583 11.0039 1.09375 9.30859C1.84115 7.61328 2.84375 6.13672 4.10156 4.87891C5.3776 3.60286 6.86328 2.59115 8.55859 1.84375C10.2539 1.11458 12.0677 0.75 14 0.75ZM14 26.207C15.5859 26.207 17.0716 25.9062 18.457 25.3047C19.8424 24.7031 21.0547 23.8828 22.0938 22.8438C23.1328 21.8047 23.9531 20.5924 24.5547 19.207C25.1562 17.8216 25.457 16.3359 25.457 14.75C25.457 13.1641 25.1562 11.6784 24.5547 10.293C23.9531 8.90755 23.1328 7.69531 22.0938 6.65625C21.0547 5.61719 19.8424 4.79688 18.457 4.19531C17.0716 3.59375 15.5859 3.29297 14 3.29297C12.4141 3.29297 10.9284 3.59375 9.54297 4.19531C8.15755 4.79688 6.94531 5.61719 5.90625 6.65625C4.86719 7.69531 4.04688 8.90755 3.44531 10.293C2.84375 11.6784 2.54297 13.1641 2.54297 14.75C2.54297 16.3359 2.84375 17.8216 3.44531 19.207C4.04688 20.5924 4.86719 21.8047 5.90625 22.8438C6.94531 23.8828 8.15755 24.7031 9.54297 25.3047C10.9284 25.9062 12.4141 26.207 14 26.207ZM12.2227 8.98047L14.0273 7.17578L21.6016 14.75L14.0273 22.3242L12.2227 20.5195L16.707 16.0078H6.45312V13.4922H16.707L12.2227 8.98047Z" fill="white"/>
          </svg>
          
          <div className="ml-2">
            Več znanja
          </div>
        </button>
      </div>
    </div>
  );
};

export default KnowledgeBase;