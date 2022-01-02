import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import "./styles/App.scss";
//pages
import { Home } from "./pages/Home.jsx";
import { Collection } from "./pages/Collection.jsx";
// import { NftDetails } from "./pages/NftDetails.jsx";
//components
import { Header } from "./components/util/Header.jsx";
import { Footer } from "./components/util/Footer.jsx";

<<<<<<< HEAD
// import Login from "./components/util/Login.jsx";
// import Web3 from "web3";

export function App() {
  // const [isConnected, setIsConnected] = useState(false);
  // const [currentAccount, setCurrentAccount] = useState(null);
  // const [balance, setBalance] = useState(0);
=======
// import Web3 from "web3";

export function App() {
  // const [currentAccount, setCurrentAccount] = useState(null);
>>>>>>> 594d23eefece9b0e44a3f4933b0e68b74d719f1d

  // const onLogin = async (provider) => {
  //   const web3 = new Web3(provider);
  //   const accounts = await web3.eth.getAccounts();
  //   if (accounts.length === 0) {
  //     console.log("Please connect to MetaMask!");
  //   } else if (accounts[0] !== currentAccount) {
  //     setCurrentAccount(accounts[0]);
  //     const accBalanceEth = web3.utils.fromWei(
  //       await web3.eth.getBalance(accounts[0]),
  //       "ether"
<<<<<<< HEAD
  //     );

  //     setBalance(Number(accBalanceEth).toFixed(6));
  //     setIsConnected(true);
  //   }
=======
  //     )}
>>>>>>> 594d23eefece9b0e44a3f4933b0e68b74d719f1d
  // };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
<<<<<<< HEAD
=======
                // <Home currentAccount={currentAccount} />
                <Home />
              }
            />
            <Route
              path="/home"
              element={
                // <Home currentAccount={currentAccount} />
>>>>>>> 594d23eefece9b0e44a3f4933b0e68b74d719f1d
                <Home />
              }
            />
            <Route path="/collection" element={<Collection />} />
            {/* <Route path="/nft/:tokenId" element={<NftDetails />} /> */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
