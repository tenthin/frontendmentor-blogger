import React from "react";
import "./Body.css";
import desktopIllustraion from "../../images/illustration-editor-desktop.svg";
import mobile from "../../images/illustration-phones.svg";
import laptop from "../../images/illustration-laptop-desktop.svg";
import editorMobile from "../../images/illustration-editor-mobile.svg";
import mobileLaptop from "../../images/illustration-laptop-mobile.svg";
export default function Body() {
  return (
    <div className="body-container">
      <div className="content">
        <h2>Designed for the Future</h2>
        <img src={desktopIllustraion} alt="" className="editor-desktop" />
        <img src={editorMobile} alt="" className="editor-mobile" />
        <h3>Introducing an extensible editor</h3>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one tings: creating content. The editor supports mannagement of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>

        <h3>Robust content management</h3>
        <p>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories,sections, format,or flow. With this functionality, you're
          in full control.
        </p>
      </div>

      <div class="content-0">
        <div className="content-1">
          <div className="bigCircle">
            <div className="headingPara">
              <h3>State of the Art Infrastructure</h3>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
        <div className="mobile">
          <img src={mobile} alt="" />
        </div>
      </div>

      <div className="content-2">
        <img src={laptop} alt="" className="laptop" />
        <img src={mobileLaptop} alt="" className="mobileLaptop" />
        <div className="context">
          <div className="context-first">
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="context-second">
            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We build a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
