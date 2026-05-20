import React from "react";
import "../8_Leading/Leading.css";

const VoiceCircleIcon = () => (
  <svg className="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
    <path d="M9.5 10v4" />
    <path d="M14.5 10v4" />
  </svg>
);

const MicrophoneIcon = () => (
  <svg className="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8" />
  </svg>
);

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
          <VoiceCircleIcon />
          <h5 className="feature-box-heading ">AI Voice Generator</h5>
          <p className="leading-box-discription feature-box-discription">
            Convert text to speech in over 42 languages with their unique
            accents, inflections, and intonations. Use the generated audio in
            personal or commercial projects.
          </p>
        </div>
        <div className="leading-box">
          <MicrophoneIcon />
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

