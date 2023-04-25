import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1>Blogr</h1>
      <div className="footer-menu">
        <div className="col-1">
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="col-2">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-3">
          <h3>Connect</h3>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
