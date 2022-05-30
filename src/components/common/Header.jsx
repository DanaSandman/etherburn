import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import UserWallet from "../util/UserWallet.jsx";
//Menu&Burger
import Burger from "./Burger";
import Menu from "./Menu";
 
export function Header() {
  const [open, setOpen] = useState(false);
  const scrollToTop  = () => {
   return scroller.scrollTo("hero-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  };
  return (
    <div className="header">
      <div className="burger">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div className="logo flex align-center ">
        <Link to="/" onClick={scrollToTop}>
          <img className="header-logo" src={logo} alt="ETHERBURN logo" />
        </Link>
      </div>
      <div className="header-connect-btn flex align-center">
        <UserWallet/>
      </div>
    </div>
  );
}
