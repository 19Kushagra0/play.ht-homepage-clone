import React from "react";
import "../9_Voices/Voices.css";
import { ReactComponent as Play } from "../../asset/icon/9/play.svg";

export default function Voices() {
  return (
    <div className="voices">
      <div className="leading-top voices-top">
        <h2 className="leading-heading feature_2-heading feature-heading">
          Text to Speech AI Voices
        </h2>
        <span className=" voices-discription leading-discription feature-description  feature_2-description">
          Choose from an expansive library of 800+ natural-sounding AI Voices,
          coupled with humanlike intonation. Unlock a multilingual experience
          with 30+ languages and accents, enhanced by our cutting-edge Machine
          Learning technology
        </span>
      </div>
      <div className="voices-bottom">
        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Conversational Voices</h5>
            <p className="voices-box-right-discription">
              Perfect for entertainment videos, podcasts and audiobooks
            </p>
          </div>
        </div>

        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Narrative Voices</h5>
            <p className="voices-box-right-discription">
              Ideal for audiobooks, explainer videos and documentary videos
            </p>
          </div>
        </div>

        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Explainer Voices</h5>
            <p className="voices-box-right-discription">
              Ideal for entertainment videos, explainer videos, podcasts and
              audiobooks
            </p>
          </div>
        </div>

        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Children Voices</h5>
            <p className="voices-box-right-discription">
              Perfect for audiobooks, explainer videos and e-learning
            </p>
          </div>
        </div>

        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Local Accents</h5>
            <p className="voices-box-right-discription">
              Localize your entertainment videos, adverts and audiobooks
            </p>
          </div>
        </div>

        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Emotions</h5>
            <p className="voices-box-right-discription">
              Ideal for gaming, creative videos and ads
            </p>
          </div>
        </div>

        <div className="voices-box">
          <div className="voices-box-left">
            <button className="voices-box-button">
              <Play className="voices-box-playIcon" />
            </button>
          </div>
          <div className="voices-box-right">
            <h5 className="voices-box-right-heading">Training Voices</h5>
            <p className="voices-box-right-discription">
              Suitable for training videos, L&amp;D and E-learning
            </p>
          </div>
        </div>

        <div className="voices-box voices-box-invisible"></div>
      </div>
    </div>
  );
}
