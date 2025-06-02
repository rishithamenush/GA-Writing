import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import Slide from "./Slide";

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  /**
   * Shifts the testimonial slider 25% to the left (backwards).
   * If the slider is already at the start, it does nothing.
   */
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className="myTestimonials my-10 md:my-20 mx-auto px-5 md:px-20 relative">
      <img
        src={next_icon}
        alt="Next"
        className="myNextBtn bg-[#212ea0] transition delay-100"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="myBackBtn bg-[#212ea0] transition delay-500"
        onClick={slideBackward}
      />
      <div className="mySlider overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[200%] overflow-x-hidden transition delay-500"
        >
          <Slide
            slideImg={male}
            slideName="Sanjay De Silva"
            slideJob="Client"
            slideDesc="Skilled writers, excellent communication, and timely delivery. Highly recommend for academic writing needs."
          />
          <Slide
            slideImg={female}
            slideName="Crishani De Silva"
            slideJob="Client"
            slideDesc="Great service! They helped me out during a tough time and delivered high-quality work on time."
          />
          <Slide
            slideImg={male}
            slideName="Raveen Nanayakkara"
            slideJob="Client"
            slideDesc="Quick turnaround and high standards. I'll definitely come back for future assignments."
          />
          <Slide
            slideImg={male}
            slideName="Pamuditha Viraj"
            slideJob="Client"
            slideDesc="Outstanding work! Delivered beyond expectations. Highly thankful for their professionalism."
          />
          <Slide
            slideImg={female}
            slideName="Kalpana Wickramarathna"
            slideJob="Client"
            slideDesc="Brilliant service with great communication. Will definitely use their help again!"
          />
          <Slide
            slideImg={female}
            slideName="Aruni Mahanama"
            slideJob="Client"
            slideDesc="They saved me at the last minute with exceptional support. Great team and great work!"
          />
          <Slide
            slideImg={male}
            slideName="Jayanath Ranatunga"
            slideJob="Client"
            slideDesc="This is the best place to get reliable help for completing tasks professionally and on time."
          />
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
