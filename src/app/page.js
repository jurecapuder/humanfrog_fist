import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./sections/header";
import Banner from "./sections/banner";
import SalesProgram from "./sections/salesProgram";
import Process from "./sections/process";
import About from "./sections/about";
import Represent from "./sections/represent";
import NewsBlock from "./sections/newsBlock";
import KnowledgeBase from "./sections/knowledgeBase";
import SatisfiedCustomers from "./sections/satisfiedCustomers";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="bg-[#EBEDEE] text-logo-blue">
      <Header />

      <Banner />

      <SalesProgram />

      <Process />

      <About />

      <Represent />

      <NewsBlock />

      <KnowledgeBase />

      <SatisfiedCustomers />

      <Footer />
    </div>
  );
}