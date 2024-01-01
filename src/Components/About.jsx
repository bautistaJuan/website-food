import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background for the about section" />
      </div>
      <div className="about-section-image-container">
        <img
          src={AboutBackgroundImage}
          alt="Background  for the about section"
        />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Cooking A Homemade Meal Has Become More Important Than Ever
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          facilis ea sit natus deserunt? facere voluptate.
        </p>
        <p className="primary-text">
          Iusto, facilis ea sit natus deserunt. Laborum soluta vitae sapiente
          facere voluptate.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
