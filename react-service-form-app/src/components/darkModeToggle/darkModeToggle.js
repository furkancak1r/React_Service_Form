import React from "react";
import "./darkModeToggle.css";
export default function DarkModeToggle() {
  return (
    <div>
      <input type="checkbox" className="sr-only" id="darkmode-toggle" />
      <label htmlFor="darkmode-toggle" className="toggle">
        <span>Toggle dark mode</span>
      </label>
    </div>
  );
}
