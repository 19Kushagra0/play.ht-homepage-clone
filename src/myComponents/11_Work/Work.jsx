import React from "react";
import "../11_Work/Work.css";

export default function Work() {
  return (
    <div className="work">
      <div className=" work-top synthesis-top leading-top voices-top">
        <h2 className="leading-heading feature_2-heading feature-heading">
          Multi-Lingual Speech Synthesis
        </h2>
        <span className=" voices-discription leading-discription feature-description  feature_2-description">
          Preserve a speaker’s voice and native accent while translating and
          dubbing across languages with our Cross-Language Voice Cloning and
          Multilingual Speech Synthesis
        </span>
      </div>
      <div className="work-bottom">
        <div className="work-box">
          <div className="work-box-top">Text Processing</div>
          <div className="work-box-bottom">
            Text is analyzed and processed to understand context, syntax, and
            semantics. This ensures accurate pronunciation, tone, and rhythm for
            smooth voiceovers.
          </div>
        </div>

        <div className="work-box">
          <div className="work-box-top">Voice Modeling</div>
          <div className="work-box-bottom">
            State-of-the-art machine learning models trained on diverse datasets
            to replicate human-like voices capture nuances like intonation,
            pacing, and emotion.
          </div>
        </div>

        <div className="work-box">
          <div className="work-box-top">Real-Time Conversion</div>
          <div className="work-box-bottom">
            With ultra-low latency, the system generates speech almost
            instantly, making it suitable for live applications such as
            streaming or real-time narration.
          </div>
        </div>

        <div className="work-box">
          <div className="work-box-top">Customizability</div>
          <div className="work-box-bottom">
            Users can select from a variety of natural-sounding voices and
            languages. Adjustments can be made to pitch, speed, and more to
            match specific needs.
          </div>
        </div>

        <div className="work-box">
          <div className="work-box-top">Voice Cloning</div>
          <div className="work-box-bottom">
            Optionally, users can clone their own voice and enjoy the same
            quality, intonation, pacing, and emotion.
          </div>
        </div>

        <div className="work-box">
          <div className="work-box-top">API Integration</div>
          <div className="work-box-bottom">
            PlayAI's API allows seamless integration into various platforms.
            It’s optimized for fast and responsive performance, enhancing user
            experiences with natural audio delivery.
          </div>
        </div>
      </div>
    </div>
  );
}
