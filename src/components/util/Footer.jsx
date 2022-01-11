import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//assets
import FullLogo from "../../assets/img/FullLogo.png";
import LinkedinFooter from "../../assets/img/footer/LinkedinFooter.png";
import TwitterFooter from "../../assets/img/footer/TwitterFooter.png";
import FacebookFooter from "../../assets/img/footer/FacebookFooter.png";
import InstegramFooter from "../../assets/img/footer/InstegramFooter.png";
import YoutubeFooter from "../../assets/img/footer/YoutubeFooter.png";

export function Footer() {
  const socialPath = {
    linkedin: "https://www.linkedin.com/company/flype-protocol/",
    twitter: "https://twitter.com/FlypeAnalytics",
    facebook: "https://www.facebook.com/Flype.fi",
    instegram: "https://flype-website.herokuapp.com/#/home",
    youtube: "https://flype-website.herokuapp.com/#/home",
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
              <img src={TwitterFooter} alt="twitter-footer-icon"></img>
            </a>
            <a href={socialPath.facebook} className="facebook-footer-link">
              <img src={FacebookFooter} alt="facebook-footer-icon"></img>
            </a>
            <a href={socialPath.instegram} className="instegram-footer-link">
              <img src={InstegramFooter} alt="instegram-footer-icon"></img>
            </a>
            <a href={socialPath.youtube} className="youtube-footer-link">
              <img src={YoutubeFooter} alt="youtube-footer-icon"></img>
            </a>
          </div>
          <span>© 2021 EtherBurn. </span>
        </div>
        <div className="footer-links flex">
          <section>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/collection">Collection</Link>
              </li>
              <li>
                <Link to="/#">OpenSea</Link>
              </li>
              <li>
                <Link to="/#">FAQ</Link>
              </li>
              <li>
                <Link to="/#" onClick={()=>{window.scrollTo(0, 3780)}}>RoadMap</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
