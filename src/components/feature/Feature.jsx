import React from "react";
import './feature.css';

const Feature = ({title, text}) => {
  return (
  <div className="gpt3__features-container__feature">
    <dvi className= "gpt3__features-container__feature-title ">
      <div />
      <h1>{title}</h1>
    </dvi>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
};

export default Feature;