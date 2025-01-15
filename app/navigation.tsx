import React from "react";

export default function Nav() {
  return (
      <nav className="navContainer">
        <a id="csLogo" href="#">CO</a>
        <div className="navLinksContainer">
          <a className="navLink" href="#">Home</a>
          <a className="navLink" href="#">Work</a>
          <a className="navLink" href="#">Resume</a>
          <a className="navLink" href="#">Contact</a>
        </div>
      </nav>
  );
}
