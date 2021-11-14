import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-wrapper grey darken-4 header-spacing">
      <div class="row">
        <div class="col s6 m6 l6">
          <h4>ERIK RAITH</h4>
        </div>
        <div class="col s6 m6 l6">
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="https://drive.google.com/file/d/1r5uF5ylc3iBMrDTMSyeQIgcYOZzRFVq6/view?usp=sharing">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
