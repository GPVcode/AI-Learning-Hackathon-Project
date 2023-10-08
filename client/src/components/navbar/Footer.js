import React from "react";
import facebookLogo from "../AuthForm/facebook.png";
import githubLogo from "../AuthForm/github.png";
import gmailLogo from "../AuthForm/gmail.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333" }}>
      <div>
        <p style={{ marginLeft: "40vw", color: "white" }}>
          &copy; Copyright 2023 All Rights Reserved.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src={facebookLogo}
              alt="Facebook logo"
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.github.com/" target="_blank">
            <img src={githubLogo} alt="Github logo" width="50" height="50" />
          </a>
          <a href="https://www.gmail.com/" target="_blank">
            <img src={gmailLogo} alt="Gmail logo" width="50" height="50" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
