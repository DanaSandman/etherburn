import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import UserWallet from "../util/UserWallet.jsx";
//Menu&Burger
import React, { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
 
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="burger">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div className="logo flex align-center ">
        <Link to="/" onClick={window.scrollTo(0,0)}>
          <img className="header-logo" src={logo} alt="ETHERBURN logo" />
        </Link>
      </div>
      <div className="header-connect-btn flex align-center">
        <UserWallet/>
      </div>
    </div>
  );
}
