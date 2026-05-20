import React from "react";
import "../13_Fotter/Fotter.css";

export default function Fotter() {
  return (
    <div className="fotter">
      <div className="fotter-top">
        <div className="fotter-container">
          <h5>Products</h5>
          <span>Playground</span>
        </div>
        <div className="fotter-container">
          <h5>Resouces</h5>
          <span>TTS API docs</span>
          <span>TTS API playgroung</span>
          <span>TTS API Agent docs</span>
        </div>
        <div className="fotter-container">
          <h5>Company</h5>
          <span>Help guides</span>
          <span>Terms</span>
          <span>Pivacy</span>
        </div>
      </div>
      <div className="fotter-bottom">© 2025 PlayHT</div>
    </div>
  );
}
