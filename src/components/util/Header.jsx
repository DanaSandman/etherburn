import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

import Login from "./Login.jsx";
import Web3 from "web3";

export function Header() {
  const [open, setOpen] = useState(false);

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

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
        {!isConnected && <Login className="login" onLogin={onLogin} onLogout={onLogout} />}
        {isConnected && <div className="connected">{currentAccount}</div>}
      </div>
    </div>
  );
}
