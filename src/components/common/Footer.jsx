import React, { Fragment } from "react";
//assets
import Logo from "../../assets/img/Logo.png";
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const socialPath = {
    linkedin: "https://www.linkedin.com/company/etherburn/",
    twitter: "https://twitter.com/EtherBurnNFT",
    instegram: "https://www.instagram.com/etherburn.io/",
  };
  return (
    <Fragment>
      <div className="main-footer flex space-between">
        <div className="footer-main-contant">
          <img
            src={Logo}
            alt="footer-logo-img"
            className="footer-logo"
          ></img>
          <p>
            EtherBurn is an NFT collection that captures Ethereum burnt fee
            metadata. Each EtherBurn NFT features a unique 3D design generated
            by an algorithmic combination of timestamps, blocks and burnt fee
            data. Once you’ve minted it, nobody else can get it.
          </p>
        </div>
        <div className="footer-social-media-links flex column">
          <h6>Follow Us</h6>
          <div className="social-links flex space-between">
            <a href={socialPath.linkedin} className="discord-footer-link">
              <FontAwesomeIcon
                className="discord-footer-link"
                icon={faDiscord}
              />
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
          <button className="join-our-discord-btn">
            <a href={socialPath.linkedin}>JOIN OUR DISCORD</a>
          </button>
          <span>© 2021 EtherBurn. </span>
        </div>
      </div>
    </Fragment>
  );
}
