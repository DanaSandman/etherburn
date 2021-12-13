import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./styles/App.scss";
//pages
import { Home } from "./pages/Home.jsx";
import { Collection } from "./pages/Collection.jsx";
//components
import { Header } from './components/util/Header.jsx';
import { Footer } from "./components/util/Footer.jsx";

import  Login  from './components/util/Login.jsx';
import Web3 from "web3";

export function App() {
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
    <Router>
      <div className="app">
        <Header />
        <main>
        {/* {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
        {isConnected && ( */}
          <Routes>
            <Route path="/" element={<Home currentAccount={currentAccount} balance={balance} />} />
            <Route path="/home" element={<Home currentAccount={currentAccount} balance={balance} />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
          {/* )} */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}
