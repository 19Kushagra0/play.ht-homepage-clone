import React from "react";
import "../7_Feature_2/Feature_2.css";
import { ReactComponent as Accessibility } from "../../asset/icon/7/accessibility.svg";
import { ReactComponent as Api } from "../../asset/icon/7/api.svg";
import { ReactComponent as ChatBubble } from "../../asset/icon/7/chat-bubble.svg";
import { ReactComponent as Gamepad } from "../../asset/icon/7/gamepad.svg";
import { ReactComponent as Ivr } from "../../asset/icon/7/ivr.svg";
import { ReactComponent as Microphone } from "../../asset/icon/7/microphone.svg";
import { ReactComponent as Podcast } from "../../asset/icon/7/podcast.svg";
import { ReactComponent as VoiceLibrary } from "../../asset/icon/7/VoiceLibrary.svg";

export default function Feature_2() {
  return (
    <div className="feature_2">
      <div className="voice-generator-top feature_2-top">
        <h2 className="feature_2-heading feature-heading">
          Try our free AI voice generator text to speech studio
        </h2>
        <span className=" feature-description  feature_2-description">
          Create engaging voice content for audiobooks, YouTube videos, or
          documentaries, with unique AI voices from the best AI voice over
          generator.
        </span>
      </div>
      <div className=" feature_2-top-bottom">
        <div className="feature_2-box">
          <Microphone className="feature_2-image" />
          <h2 className="feature_2-heading">AI Voice Over for Videos</h2>
          <span className="feature_2-discription">
            Power your videos with clear, consistent, and professional
            voiceovers. Perfect for marketing, explainer content, product demos,
            and YouTube videos.
          </span>
        </div>

        <div className="feature_2-box">
          <VoiceLibrary className="feature_2-image" />
          <h2 className="feature_2-heading">Narration</h2>
          <span className="feature_2-discription">
            Narrate your audiobooks with ultra-realistic voices seamlessly and
            effectively. Shorten your production time by generating audio in
            seconds.
          </span>
        </div>

        <div className="feature_2-box">
          <ChatBubble className="feature_2-image" />
          <h2 className="feature_2-heading">Conversational AI</h2>
          <span className="feature_2-discription">
            Voice your conversational assistants, receptionists, and
            telemarketing solutions with ultra-realistic, humanlike voices.
            Create scalable, delightful customer experiences.
          </span>
        </div>

        <div className="feature_2-box">
          <VoiceLibrary className="feature_2-image" />
          <h2 className="feature_2-heading">Custom Voices</h2>
          <span className="feature_2-discription">
            Modify your existing voiceovers, or generate a unique custom voice
            that perfectly fits your brand’s personality for a connected
            customer experience.
          </span>
        </div>

        <div className="feature_2-box">
          <VoiceLibrary className="feature_2-image" />
          <h2 className="feature_2-heading">eLearning</h2>
          <span className="feature_2-discription">
            Curate engaging e-learning material with voices capable of
            pronouncing terminologies and acronyms. Update your training
            material effortlessly by regenerating audio.
          </span>
        </div>

        <div className="feature_2-box">
          <Podcast className="feature_2-image" />
          <h2 className="feature_2-heading">Podcasts</h2>
          <span className="feature_2-discription">
            Create engaging, multi-speaker, conversational podcasts with the
            industry’s first dialog-enabled text-to-speech.
          </span>
        </div>

        <div className="feature_2-box">
          <Gamepad className="feature_2-image" />
          <h2 className="feature_2-heading">Gaming</h2>
          <span className="feature_2-discription">
            Streamline your game’s pre-production with ultra-realistic AI
            voices. The perfect placeholder for voice acting in your Pre-Vis and
            Pitch-Vis needs.
          </span>
        </div>

        <div className="feature_2-box">
          <Ivr className="feature_2-image" />
          <h2 className="feature_2-heading">IVR Systems</h2>
          <span className="feature_2-discription">
            Automate your IVR system’s voice responses with AI voices.
            Revolutionize your customer experience by delivering seamless,
            personalized interactions every time.
          </span>
        </div>

        <div className="feature_2-box">
          <VoiceLibrary className="feature_2-image" />
          <h2 className="feature_2-heading">Dubbing</h2>
          <span className="feature_2-discription">
            Localize your video and voice content in seconds. Automatically dub
            your existing audio into other languages and instantly make your
            videos accessible to a global audience.
          </span>
        </div>

        <div className="feature_2-box">
          <Accessibility className="feature_2-image" />
          <h2 className="feature_2-heading">Accessibility</h2>
          <span className="feature_2-discription">
            Integrate human-like voices in your assistive voice devices and
            applications. Provide ultra-realistic voice experiences to enhance
            accessibility.
          </span>
        </div>

        <div className="feature_2-box">
          <Api className="feature_2-image" />
          <h2 className="feature_2-heading">Voice Generation API</h2>
          <span className="feature_2-discription">
            Make use of PlayAI’s Voice Generation API to power your
            conversational chatbot, live streams, and games. Reduce development
            time and costs.
          </span>
        </div>

        <div className=" feature_2-box  feature_2-box-invisible"></div>
      </div>
    </div>
  );
}

{
}
