import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//assets
import FullLogo from "../../assets/img/FullLogo.png";
import LinkedinFooter from "../../assets/img/LinkedinFooter.png";

export function Footer() {
  const socialPath = {
    linkedin: "https://www.linkedin.com/company/flype-protocol/",
    twitter: "https://twitter.com/EtherBurnNFT",
    instegram: "https://flype-website.herokuapp.com/#/home",
  };
  return (
    <Fragment>
      <div className="main-footer flex space-between">
        <div className="footer-main-contant">
          <img
            src={FullLogo}
            alt="footer-logo-img"
            className="footer-logo"
          ></img>
          <p>
            Flype is a decentralized exchange for LP Tokes. Community driven
            protocol governed by FLYP Stakers. Vote for key protocol parameters
            and take part in the protocol's governance. Come and join our
            growing community to learn more about our ongoing developments and
            future plans, share your feedback and feature requests with us.
          </p>
        </div>
        <div className="footer-social-media-links flex column">
          <h6>Follow Us</h6>
          <div className="social-links flex space-between">
            <a href={socialPath.linkedin} className="linkedin-footer-link">
              <img src={LinkedinFooter} alt="linkedin-footer-icon"></img>
            </a>
            <a
              href={socialPath.twitter}
              className="twitter-footer-link"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </a>
            <a href={socialPath.instegram} className="instegram-footer-link">
              <i className="fa fa-instagram" />
            </a>
          </div>
          <span>© 2021 EtherBurn. </span>
        </div>
      </div>
    </Fragment>
  );
}
