import Onboard from 'bnc-onboard';
import Notify from 'bnc-notify';
import Web3 from 'web3';
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserAccount } from "../../store/user/user.action.js";
import {setSelectedWallet, setWalletNotify, setWalletOnboard} from "../../store/wallet/wallet.action.js";



let web3;

const FORMATIC_KEY = "";
const PORTIC_KEY = "";
const INFURA_KEY = "";

const API_KEY = '187fa55a-7d23-4eb8-b72c-4c19f9a5be2d';
const networkId = 1; //Ethereum
// const networkId = 4; //Rinkeby

export default function OnBoard() {

    const dispatch = useDispatch();
    const [onboard, setOnboard] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const currUserAddress = useSelector((state) => state.userModule.currUserAddress)

    const login = async () => {
        await onboard.walletSelect();
        await onboard.walletCheck();
        setIsConnected(true);
    };
    const initNotify = () =>{
        return Notify({
            dappId: API_KEY,
            networkId,
            onerror: error => console.log(`Notify error: ${error.message}`)
        })
    };
    const onLogout = () => {
        setIsConnected(false);
      };
    const setAccount = (account) => {
        console.log(`${account} is now connected`);
        dispatch(setUserAccount(account));
    };
    const setWallet = (wallet) => {
        console.log(`${wallet.name} is now connected`);
        window.ethereum = wallet.provider;
        window.localStorage.setItem('selectedWallet', wallet.name)
    };

    useEffect(() => {
        const onboard = Onboard({
            dappId: API_KEY,  
            networkId: networkId,
            subscriptions: {
            address: setAccount,
            wallet: setWallet
            },
            walletSelect: {
                wallets:[
                    {
                        walletName: "metamask",
                        preferred: true
                    },
                    // {
                    //     walletName: 'walletConnect',
                    //     infuraKey: INFURA_KEY,
                    //     preferred: true
                    // },
                    {
                        walletName: "coinbase",
                        preferred: true
                    },
                    // {
                    //     walletName: "formatic",
                    //     apiKey: FORMATIC_KEY,
                    //     preferred: true
                    // },
                    // {
                    //     walletName: "portis",
                    //     apiKey: PORTIC_KEY,
                    //     preferred: true
                    // }
                ]
            }
        })
        setOnboard(onboard);
        const notify = initNotify();
        dispatch(setWalletNotify(notify));
    }, []);

    useEffect(() => {
        let previouslySelectedWallet = window.localStorage.getItem('selectedWallet');
        previouslySelectedWallet = previouslySelectedWallet !== 'undefined' ? previouslySelectedWallet : undefined;
        dispatch(setSelectedWallet(previouslySelectedWallet));

        if (previouslySelectedWallet && onboard) {
            onboard.walletSelect(previouslySelectedWallet);
        }
    }, [onboard]);

    useEffect(() => {
        if (onboard) {
            dispatch(setWalletOnboard(onboard));
        }
    }, [onboard]);

  return (
    <div>
        {!isConnected && <button className="login" onClick={login} onLogout={onLogout}>Connect</button>}
        {isConnected && <div className="connected" >{currUserAddress}</div>}
    </div>
  )
}
