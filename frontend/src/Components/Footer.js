import React from "react";
import evangadiLogo from "./Images/evangadi-logo-black.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-logo-container">
        <img
          src={evangadiLogo}
          alt="Evangadi Networks Logo"
          className="footer-logo"
        />
        <div className="social-media-container">
          <a
            href="https://www.facebook.com/evangadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com/evangadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="social-media-icon" />
          </a>
          <a
            href="https://www.youtube.com/evangadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon className="social-media-icon" />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href="#how-it-works">How it Works</a>
          </li>
          <li>
            <a href="#terms-of-use">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact Info</h4>
        <ul>
          <li>Evangadi Networks</li>
          <li>
            <a href="mailto:support@evangadi.com">support@evangadi.com</a>
          </li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </div>
    <p>&copy; 2024 Evangadi Networks</p>
  </footer>
);

export default Footer;
