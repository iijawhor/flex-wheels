import React from "react";
import "./Footer.css";
import "./FooterResponsive.css";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <Container className="footerContainer">
      <hr className="footerLine" />
      <div className="footerBox">
        <div className="footerLogo">
          <Logo />
        </div>
        <div className="socialConnects">
          <div className="social">
            <TwitterIcon style={{ color: "#1DA1F2", fontSize: "30px" }} />
          </div>
          <div className="social">
            <GitHubIcon style={{ color: "#0077b5", fontSize: "30px" }} />
          </div>
          <div className="social">
            <LinkedInIcon style={{ color: "#1DA1F2", fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
