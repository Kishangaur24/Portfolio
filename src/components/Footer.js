import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <a href=""><InstagramIcon /></a> 
        <TwitterIcon />
        <FacebookIcon />
      <a href="https://www.linkedin.com/in/kishan-gaur-04a628240/" target="_blank"> <LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Kishangaur448@gmail.com</p>
    </div>
  );
}

export default Footer;
