import React from "react";
import "../8_Leading/Leading.css";

export default function Leading() {
  return (
    <div className="leading">
      <div className="leading-top">
        <h2 className="leading-heading feature_2-heading feature-heading">
          Industry leading AI voice products
        </h2>
        <span className=" leading-discription feature-description  feature_2-description">
          Our suite of AI voice products for independent creators to enterprise
        </span>
      </div>
      <div className="leading-bottom">
        <div className="leading-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/voice-cricle.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading ">AI Voice Generator</h5>
          <p className="leading-box-discription feature-box-discription">
            Convert text to speech in over 42 languages with their unique
            accents, inflections, and intonations. Use the generated audio in
            personal or commercial projects.
          </p>
        </div>
        <div className="leading-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/microphone-2.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">AI Podcasts</h5>
          <p className="feature-box-discription">
            Create natural sounding, conversational podcasts that sound like two
            people having a conversation. The first multi-turn, multi-voice AI
            voice generator.
          </p>
        </div>
        <div className="leading-box leading-box-invisible"></div>
      </div>
    </div>
  );
}
