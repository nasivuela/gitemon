import React, { useState } from "react";
import "./Switchboard.css";

function Switchboard() {
  const [orgSlug, setOrgSlug] = useState("");
  const navigate = (event) => {
    event.preventDefault();

    window.location.href = `/${orgSlug}`;
  };

  return (
    <div className="constrain">
      <form onSubmit={navigate}>
        <div className="switchboard-controls">
          <label className="switchboard-control" htmlFor="org-slug">
            github.com/
          </label>
          <input
            id="org-slug"
            type="text"
            className="nes-input switchboard-control switchboard-input"
            onChange={(event) => setOrgSlug(event.target.value)}
            value={orgSlug}
          />
          <a
            href={`/${orgSlug}`}
            className="nes-btn is-primary switchboard-control"
          >
            Go
          </a>
        </div>
      </form>
    </div>
  );
}

export default Switchboard;
