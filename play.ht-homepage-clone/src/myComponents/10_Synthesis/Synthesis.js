import React from "react";
import "../10_Synthesis/Synthesis.css";
import { ReactComponent as Play } from "../../asset/icon/9/play.svg";

export default function Synthesis() {
  return (
    <div className="synthesis">
      <div className="synthesis-top leading-top voices-top">
        <h2 className="leading-heading feature_2-heading feature-heading">
          Multi-Lingual Speech Synthesis
        </h2>
        <span className=" voices-discription leading-discription feature-description  feature_2-description">
          Preserve a speaker’s voice and native accent while translating and
          dubbing across languages with our Cross-Language Voice Cloning and
          Multilingual Speech Synthesis
        </span>
      </div>
      <div className="synthesis-down">
        <div className="synthesis-box">
          <div className="synthesis-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="synthesis-right">
            <div className="synthesis-right-text">Ayla Speaking English</div>
          </div>
        </div>

        <div className="synthesis-box">
          <div className="synthesis-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="synthesis-right">
            <div className="synthesis-right-text">Ayla Speaking French</div>
          </div>
        </div>

        <div className="synthesis-box">
          <div className="synthesis-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="synthesis-right">
            <div className="synthesis-right-text">Ayla Speaking Japanese</div>
          </div>
        </div>

        <div className="synthesis-box">
          <div className="synthesis-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="synthesis-right">
            <div className="synthesis-right-text">
              Carla Speaking Portuguese
            </div>
          </div>
        </div>

        <div className="synthesis-box">
          <div className="synthesis-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="synthesis-right">
            <div className="synthesis-right-text">Carla Speaking English</div>
          </div>
        </div>

        <div className="synthesis-box">
          <div className="synthesis-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="synthesis-right">
            <div className="synthesis-right-text">Carla Speaking German</div>
          </div>
        </div>
      </div>
      <p className="synthesis-text">
        Create any voice, transfer speaking styles and use it to generate speech
        using our state-of-the-art Voice Cloning feature.
      </p>
    </div>
  );
}
