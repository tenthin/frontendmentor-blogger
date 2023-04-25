import React from "react";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-top">
          <h1 className="logo">Blogr</h1>
          <ul className="top-ul-1">
            <li>
              Product <KeyboardArrowDownIcon />
            </li>
            <li>
              Company <KeyboardArrowDownIcon />
            </li>
            <li>
              Contact <KeyboardArrowDownIcon />
            </li>
          </ul>
          <ul className="top-ul-2">
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="header-bottom">
          <h2>A Modern publishing platform</h2>
          <p>Grow your audience and your online brand</p>
          <ul>
            <li>Start For Free</li>
            <li>Learn More</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
