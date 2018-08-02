import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

const Footer = () => (
  <footer className="grid-container-footer">
    <div className="left-side">
      <div className="content" />
    </div>
    <div className="center">
      <div className="content">Copyright 2018</div>
    </div>
    <div className="right-side">
      <div className="socialMediaIcon">
        <a href="https://instagram.com/codingmastery">
          <FontAwesomeIcon
            className="content"
            icon={["fab", "instagram"]}
            color="white"
            fixedWidth
          />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
