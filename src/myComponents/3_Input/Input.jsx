import React from "react";
import "../3_Input/Input.css";
import lucide from "../../asset/icon/3/lucide.svg";
import play from "../../asset/icon/3/play.svg";

const SoundWaveIcon = () => (
  <svg className="voice-button-image-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
    <path d="M3 10v4M6 6v12M9 3v18M12 9v6M15 5v14M18 8v8M21 11v2" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="voice-button-image-2" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white', marginLeft: '6px' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

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
        <textarea className="input-box" name="" id="" defaultValue="Oh yes, the deep sea: nature's basement. Home to creatures so bizarre, even nightmares are like &quot;Nah, I'll pass.&quot;">
        </textarea>
        <div className="voice-button-container">
          <button className="voice-button-left-container">
            <SoundWaveIcon />

            <span>Dexter</span>
            <ChevronDownIcon />
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

