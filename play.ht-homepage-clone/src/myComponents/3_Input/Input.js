import React from "react";
import "../3_Input/Input.css";
import lucide from "../../asset/icon/3/lucide.svg";
import play from "../../asset/icon/3/play.svg";

export default function Input() {
  return (
    <div className="input">
      <div className="input-button-container">
        <button className="input-button input-button1">English</button>
        <button className="input-button input-button2">Arabic (العربية)</button>
        <button className="input-button input-button3">Portuguese</button>
        <button className="input-button input-button4">Spanish</button>
        <button className="input-button input-button5">Hindi</button>
        <button className="input-button input-button6">Turkish</button>
      </div>

      <div className="input-container">
        <textarea className="input-box" name="" id="">
          Oh yes, the deep sea: nature's basement. Home to creatures so bizarre,
          even nightmares are like "Nah, I'll pass."
        </textarea>
        <div className="voice-button-container">
          <button className="voice-button-left-container">
            <img
              className="voice-button-image-1"
              src="https://play.ai/img/icons/whiteSoundWave.svg"
              alt=""
            />

            <span>Dexter</span>
            <img
              className="voice-button-image-2"
              src="https://play.ai/img/icons/ChevronDown.svg"
              alt=""
            />
          </button>
          <div className="voice-button-right-container">
            <button className="voice-right-button1">
              <img className="voice-button-image-1" src={lucide} alt="" />
            </button>
            <button className="voice-right-button2">
              <img className="voice-button-image-1" src={play} alt="" />

              <span>Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
