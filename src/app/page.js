import React from "react";

import Banner from "./sections/banner";
import SalesProgram from "./sections/salesProgram";
import Process from "./sections/process";
import About from "./sections/about";
import Represent from "./sections/represent";
import NewsBlock from "./sections/newsBlock";
import KnowledgeBase from "./sections/knowledgeBase";
import SatisfiedCustomers from "./sections/satisfiedCustomers";

export default function Home() {
  return (
    <div className="bg-[#EBEDEE] text-logo-blue">
      <Banner />

      <SalesProgram />

      <Process />

      <About />

      <Represent />

      <NewsBlock />

      <KnowledgeBase />

      <SatisfiedCustomers />
    </div>
  );
}