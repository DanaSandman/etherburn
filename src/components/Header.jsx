import logo from '../assets/img/Logo.png'
import { Link } from "react-router-dom";

import {useState} from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div className="header">
            <Link to="/home">
            <img className="header-logo" src={logo} alt="ETHERBURN logo"/>
            </Link>
            <span className="header-title">Units Protocol</span>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}