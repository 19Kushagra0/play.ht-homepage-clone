import React from "react";
import "../12_About/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-top">
        <h2 className="about-top-text">
          Learn About our AI Voice Generation & Text-to-Speech Technology
        </h2>
      </div>

      <div className="about-bottom">
        <div className="about-container">
          <h3 className="about-container-left">
            How does Text Processing work in AI voice synthesis?
          </h3>
          <div className="about-container-right">
            <span className="about-image material-symbols-outlined">add_2</span>
          </div>
        </div>

        <div className="about-container">
          <h3 className="about-container-left">What is Voice Modeling?</h3>
          <div className="about-container-right">
            <span className="about-image material-symbols-outlined">add_2</span>
          </div>
        </div>

        <div className="about-container">
          <h3 className="about-container-left">
            How fast is Real-Time Conversion?
          </h3>
          <div className="about-container-right">
            <span className="about-image material-symbols-outlined">add_2</span>
          </div>
        </div>

        <div className="about-container">
          <h3 className="about-container-left">
            Can I customize the AI voices?
          </h3>
          <div className="about-container-right">
            <span className="about-image material-symbols-outlined">add_2</span>
          </div>
        </div>

        <div className="about-container">
          <h3 className="about-container-left">What is Voice Cloning?</h3>
          <div className="about-container-right">
            <span className="about-image material-symbols-outlined">add_2</span>
          </div>
        </div>

        <div className="about-container">
          <h3 className="about-container-left">
            Does PlayAI support API Integration?
          </h3>
          <div className="about-container-right">
            <span className="about-image material-symbols-outlined">add_2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
