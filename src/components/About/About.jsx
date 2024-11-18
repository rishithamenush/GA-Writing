import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import play from "../../assets/play-icon.png";

function About() {
  return (
    <div className="myAbout my-[100px] mx-auto flex flex-col md:flex-row items-center w-[90%] justify-between">
      {/* Title for mobile devices */}
      <h3 className="text-[20px] font-semibold text-[#212EA0] uppercase md:hidden ">
        Why Choose Us?
      </h3>
      <p className="text-[25px] text-center font-bold text-[#000F38] my-4 mx-0 max-w-[400px] md:hidden">
        Nurturing the talent of tomorrow
      </p>
      <div className="myAboutLeft md:basis-[40%] relative mb-3 md:mb-0">
        <img src={about} alt="" className="myAboutImg" />
        <img src={play} alt="" className="myPlayIcon" />
      </div>
      <div className="myAboutRight md:basis-[56%]">
        <h3 className="text-[16px] font-semibold text-[#212EA0] hidden md:block ">
          Why Choose Us?
        </h3>
        <p className="text-[#676767] text-justify my-4 leading-6">
          Choosing the right partner for your academic and professional writing
          needs is crucial. Here’s why we stand out,
        </p>
        <ul className="list-disc list-inside text-[#676767] text-justify leading-6 mb-4">
          <li>
            <strong>Expert Writers</strong>
          </li>
          <li>
            <strong>Specialized Researchers</strong>
          </li>
          <li>
            <strong>High Success Rate</strong>
          </li>
          <li>
            <strong>Timely Delivery</strong>
          </li>
          <li>
            <strong>100% Original & Customized</strong>
          </li>
        </ul>

        <p className="text-[#676767] text-justify leading-6 mb-4">
          Our mission is to empower students and professionals by providing
          top-notch writing services that inspire confidence and success.
          Whether it’s an academic assignment, research proposal, or
          professional report, we are here to make the process seamless and
          stress-free.
        </p>

        {/* <p className="text-[#676767] text-justify mb-[10px] leading-6">
          Lorem ipsum dolor dicta assumenda? Provident laboriosam tempora
          voluptates amet neque, dolorem vitae consequatur officia aspernatur
          dicta dolor nihil cumque repudiandae debitis quidem adipisci.
        </p> */}
      </div>
    </div>
  );
}

export default About;
