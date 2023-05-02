import React, { useState } from "react";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [productArrowDirection, setProductArrowDirection] = useState("down");
  const [productShowDropdown, setProductShowDropdown] = useState(false);

  const [companyArrowDirection, setCompanyArrowDirection] = useState("down");
  const [companyShowDropdown, setCompanyShowDropdown] = useState(false);

  const [connectArrowDirection, setConnectArrowDirection] = useState("down");
  const [connectShowDropdown, setConnectShowDropdown] = useState(false);
  const [connectDropdown, setConnectDropdown] = useState(false);

  const handleProductClick = () => {
    setProductArrowDirection(productArrowDirection === "down" ? "up" : "down");
    setProductShowDropdown(!productShowDropdown);
  };

  const handleCompanyClick = () => {
    setCompanyArrowDirection(companyArrowDirection === "down" ? "up" : "down");
    setCompanyShowDropdown(!companyShowDropdown);
  };

  const handleConnectClick = () => {
    setConnectArrowDirection(connectArrowDirection === "down" ? "up" : "down");
    setConnectShowDropdown(!connectShowDropdown);
  };

  const handleClick = () => {
    setConnectDropdown(!connectDropdown);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-top">
          <h1 className="logo">Blogr</h1>
          <ul className="top-ul-1">
            <li onClick={handleProductClick}>
              Product
              {/* <KeyboardArrowDownIcon /> */}
              {productArrowDirection === "down" ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </li>
            <li onClick={handleCompanyClick}>
              Company
              {/* <KeyboardArrowDownIcon /> */}
              {companyArrowDirection === "down" ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </li>
            <li onClick={handleConnectClick} className="connect">
              <div onClick={handleClick}>
                Connect
                {/* <KeyboardArrowDownIcon /> */}
                {connectArrowDirection === "down" ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </div>
              {connectDropdown && (
                <ul className="connect-dropdown">
                  <li>Contact</li>
                  <li>Newletter</li>
                  <li>Linkedin</li>
                </ul>
              )}
            </li>
          </ul>
          <ul className="top-ul-2">
            <li className="login">Login</li>
            <li className="signup">Sign Up</li>
          </ul>
          <div className="menuIcon">
            <MenuIcon />
          </div>
        </div>

        <div className="header-bottom">
          <h2>A Modern publishing platform</h2>
          <p>Grow your audience and your online brand</p>
          <ul>
            <li className="light-orange">Start For Free</li>
            <li className="white">Learn More</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
