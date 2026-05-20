import React from "react";
import "../6_Feature/Feature.css";

// Premium inline SVGs matching the voice theme and styled with color #6366f1
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

const PeopleIcon = () => (
  <svg className="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const VolumeHighIcon = () => (
  <svg className="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const DevicesIcon = () => (
  <svg className="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const PlayCircleIcon = () => (
  <svg className="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

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
        src="/studio_mockup.png"
        alt="AI Sound Studio Editor Mockup"
      />
      <div className="feature-box-conatainer">
        <div className="feature-box">
          <VoiceCircleIcon />
          <h5 className="feature-box-heading">206 AI Voices</h5>
          <p className="feature-box-discription">
            Choose from a growing library of 206 natural-sounding Text to Speech
            voices across 30+ languages and accents.
          </p>
        </div>
        <div className="feature-box">
          <MicrophoneIcon />
          <h5 className="feature-box-heading">Speech Styles</h5>
          <p className="feature-box-discription">
            Use expressive emotional speaking styles to make the voices sound
            more natural and engaging.
          </p>
        </div>
        <div className="feature-box">
          <PeopleIcon />
          <h5 className="feature-box-heading">Multi-Voice Feature</h5>
          <p className="feature-box-discription">
            Create conversations in your audio projects by using different
            voices in the same audio file.
          </p>
        </div>
        <div className="feature-box">
          <VolumeHighIcon />
          <h5 className="feature-box-heading">Custom Pronunciations</h5>
          <p className="feature-box-discription">
            Define how specific words are pronounced. Save and re-use those
            pronunciations when synthesizing speech.
          </p>
        </div>
        <div className="feature-box">
          <DevicesIcon />
          <h5 className="feature-box-heading">Voice Inflections</h5>
          <p className="feature-box-discription">
            Fine-tune the rate, pitch, emphasis and add pauses to create a more
            suitable voice tone
          </p>
        </div>
        <div className="feature-box">
          <PlayCircleIcon />
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

