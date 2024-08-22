// src/components/HomeSection.tsx
import React from "react";
import Content from "./Content";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className=" bg-blue-50 dark:bg-gray-900 text-center"
    >
      <Content />
    </section>
  );
};

export default HomeSection;
