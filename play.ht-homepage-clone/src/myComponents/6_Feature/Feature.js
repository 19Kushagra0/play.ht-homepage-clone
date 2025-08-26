import React from "react";
import "../6_Feature/Feature.css";

export default function Feature() {
  return (
    <div className="feature">
      <h2 className="feature-heading">
        Powerful and Feature-Rich, Online Text-to-Voice Studio
      </h2>
      <span className="feature-description">
        Type, paste or import text and instantly turn it into audio with our
        online Text to Speech editor. Enhance the audio with speech styles,
        pronunciations and SSML tags.
      </span>
      <img
        className="feature-image"
        src="https://play.ht/assets/img/playht-studio%202.jpg?w=1920&q=75"
        alt=""
      />
      <div className="feature-box-conatainer">
        <div className="feature-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/voice-cricle.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">206 AI Voices</h5>
          <p className="feature-box-discription">
            Choose from a growing library of 206 natural-sounding Text to Speech
            voices across 30+ languages and accents.
          </p>
        </div>
        <div className="feature-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/microphone-2.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">Speech Styles</h5>
          <p className="feature-box-discription">
            Use expressive emotional speaking styles to make the voices sound
            more natural and engaging.
          </p>
        </div>
        <div className="feature-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/people.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">Multi-Voice Feature</h5>
          <p className="feature-box-discription">
            Create conversations in your audio projects by using different
            voices in the same audio file.
          </p>
        </div>
        <div className="feature-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/volume-high.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">Custom Pronunciations</h5>
          <p className="feature-box-discription">
            Define how specific words are pronounced. Save and re-use those
            pronunciations when synthesizing speech.
          </p>
        </div>
        <div className="feature-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/devices.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">Voice Inflections</h5>
          <p className="feature-box-discription">
            Fine-tune the rate, pitch, emphasis and add pauses to create a more
            suitable voice tone
          </p>
        </div>
        <div className="feature-box">
          <img
            className="feature-box-icon"
            src="https://play.ht/assets/img/icons/play-cricle.svg?w=64&q=75"
            alt=""
          />
          <h5 className="feature-box-heading">Preview Mode</h5>
          <p className="feature-box-discription">
            Listen and preview a single paragraph or full text before converting
            it to speech.
          </p>
        </div>
      </div>
    </div>
  );
}
