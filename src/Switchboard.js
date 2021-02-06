import React, { useState } from "react";
import Header from "./Header";
import "./Switchboard.css";

function Switchboard() {
  const [orgSlug, setOrgSlug] = useState("");

  return (
    <div className="game">
      <Header />

      <div className="constrain">
        <div className="switchboard-controls">
          <label htmlFor="org-slug">github.com/</label>
          <input
            id="org-slug"
            type="text"
            className="nes-input"
            onChange={(event) => setOrgSlug(event.target.value)}
            value={orgSlug}
          />
          <a href={`/${orgSlug}`} className="nes-btn is-primary">
            Go
          </a>
        </div>
      </div>
    </div>
  );
}

export default Switchboard;