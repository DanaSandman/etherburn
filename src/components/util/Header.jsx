import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import OnBoard from "./OnBoard.jsx";
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
        <Link to="/home">
          <img className="header-logo" src={logo} alt="ETHERBURN logo" />
        </Link>
        <span className="header-title">Ether Burn</span>
      </div>
      <div className="header-connect-btn flex align-center">
        <OnBoard/>
      </div>
    </div>
  );
}
