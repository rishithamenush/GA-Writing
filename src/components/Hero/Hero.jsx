import React from "react";
import "./Hero.css";
import Button from "../Utilities/Button";

function Hero() {
  return (
    <div className="myHero myContainer text-center flex items-center justify-center">
      <div className="max-w-[800px]">
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold">
          Top-Quality Academic, Research, and Professional{" "}
          <span className="text-yellow-500">Writing Services.</span>
        </h1>
        <p className=" text-center my-5 leading-8 text-[18px]">
          Looking for expert assistance with academic assignments, research
          projects, or professional writing? At G.A. Writing, we deliver
          customized, high-quality content for clients worldwide in Sinhala,
          Tamil, and English. With over six years of experience and a team of
          50+ highly qualified writers (Master’s and PhDs), we ensure excellence
          tailored to your needs.
        </p>
        <Button btnTitle="Explore more" btnUrl="#" />
      </div>
    </div>
  );
}

export default Hero;
