import React from "react";
import "./Header.css";
import playAI from "../../asset/icon/1/playAI.svg";
import hamberger from "../../asset/icon/1/hamberger.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left-container">
        <img className="header-playAI-icon" src={playAI} alt="" />

        <div className="header-left-button-container">
          <button className="header-left-button">
            <span>Products</span>
            <span class="material-symbols-outlined header-image">
              stat_minus_1
            </span>
          </button>
          <button className="header-left-button">
            <span>Resources</span>
            <span class="material-symbols-outlined header-image">
              stat_minus_1
            </span>
          </button>
        </div>
      </div>
      <div className="header-right-container">
        <button className="header-right-button-container">
          <span>Login</span>
        </button>
        <img className="hamberger-icon" src={hamberger} alt="" />
      </div>
    </div>
  );
}
