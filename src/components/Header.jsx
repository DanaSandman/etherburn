import logo from '../assets/img/Logo.png'
import {useState} from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div className="header">
            <span className="header-title">Units Protocol</span>
            <img className="header-logo" src={logo} alt="UNITS Protocol"/>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}