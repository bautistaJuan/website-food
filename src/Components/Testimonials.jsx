import React from "react";
import ProfilePic from "../Assets/juan-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsa
          architecto harum ratione ex id eius. Optio rerum obcaecati impedit.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Juan Vega" />
        <p>
          Architecto harum ratione ex id eius. Optio rerum obcaecati impedit.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Juan Vega</h2>
      </div>
    </div>
  );
};

export default Testimonials;
