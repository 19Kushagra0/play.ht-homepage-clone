import React, { useState } from "react";
import "./Header.css";
import playAI from "../../asset/icon/1/playAI.svg";
import hamberger from "../../asset/icon/1/hamberger.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-left-container">
        <img className="header-playAI-icon" src={playAI} alt="" />

        <div className="header-left-button-container">
          <button className="header-left-button">
            <span>Products</span>
            <span className="material-symbols-outlined header-image">
              stat_minus_1
            </span>
          </button>
          <button className="header-left-button">
            <span>Resources</span>
            <span className="material-symbols-outlined header-image">
              stat_minus_1
            </span>
          </button>
        </div>
      </div>
      <div className="header-right-container">
        <button className="header-right-button-container">
          <span>Login</span>
        </button>
        <img
          className="hamberger-icon"
          src={hamberger}
          alt="Menu"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img className="header-playAI-icon" src={playAI} alt="Play.ai Logo" />
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mobile-menu-links">
          <button
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            <span>Products</span>
            <span className="material-symbols-outlined header-image">
              stat_minus_1
            </span>
          </button>
          <button
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            <span>Resources</span>
            <span className="material-symbols-outlined header-image">
              stat_minus_1
            </span>
          </button>
        </div>

        <div className="mobile-menu-footer">
          <button
            className="mobile-login-btn"
            onClick={() => setMenuOpen(false)}
          >
            <span>Login</span>
          </button>
          <button
            className="mobile-signup-btn"
            onClick={() => setMenuOpen(false)}
          >
            <span>Sign Up Free</span>
          </button>
        </div>
      </div>
    </div>
  );
}

