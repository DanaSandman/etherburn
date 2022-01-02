import Onboard from 'bnc-onboard';
// import Notify from 'bnc-notify';
import Web3 from 'web3';
import { useState, useEffect, useLayoutEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserAccount } from "../../store/user/user.action.js";

let web3 = null;
const FORMATIC_KEY = "";
const PORTIC_KEY = "";
const INFURA_KEY = "";

const dappId = '187fa55a-7d23-4eb8-b72c-4c19f9a5be2d';
// const networkId = 1; //Ethereum
const networkId = 4; //Rinkeby

export default function OnBoard() {

    const dispatch = useDispatch();
    const [onboard, setOnboard] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const addressConnected = useSelector((state) => state.userModule.currUserAddress)

    // useLayoutEffect(() => {
    //     const ADD =  window.localStorage.getItem('account address');
    //     if (ADD === undefined  || ADD === 'undefined'){
    //         setIsConnected(false)
    //     }
    // }, [])
    useEffect(() => {
       const isConnected = window.localStorage.getItem('isConnected');
       if (isConnected) setIsConnected(true);
        const onboard = Onboard({
            dappId: dappId,  
            networkId: networkId,
            subscriptions: {
            address: setAccountAddress,
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
        console.log('onboard',onboard);
    }, []);

    // useEffect(() => {
    //     let previouslySelectedAcc = window.localStorage.getItem('account address');
    //     previouslySelectedAcc = previouslySelectedAcc !== 'undefined' ? previouslySelectedAcc : undefined;
    //     dispatch(setUserAccount(previouslySelectedAcc));
    //     if (previouslySelectedAcc && onboard) {
    //         onboard.walletSelect(previouslySelectedAcc);
    //     }else if (onboard){
    //         dispatch(setUserAccount(onboard));
    //     }
    // }, [onboard]);

    const onlogin = async () => {
        await onboard.walletSelect();
        const readyToTransact = await onboard.walletCheck()
        if (readyToTransact) console.log('readddddy');
        const isConnected = window.localStorage.getItem('account address');
        if (isConnected){
        window.localStorage.setItem('isConnected', true)
        setIsConnected(true)
        };
    };
    const onLogout = async () => {
        await onboard.walletReset();
        setIsConnected(false);
        dispatch(setUserAccount(''));
        window.localStorage.removeItem('account address')
        window.localStorage.removeItem('selectedWallet')
        window.localStorage.removeItem('isConnected')
    };
    const setAccountAddress = (account) => {
        console.log(`${account} is now connected`);
        dispatch(setUserAccount(account));
        window.localStorage.setItem('account address', account)
    };
    const setWallet = (wallet) => {
        
        console.log(`${wallet.name} is now connected`);
        web3 = new Web3(wallet.provider)
        window.localStorage.setItem('selectedWallet', wallet.name)
    };
  return (
    <div>
        {!isConnected && <button className="login" onClick={onlogin} >Connect</button>}
        {isConnected && <div className="connected" ><button onClick={onLogout}>Disconnect</button>{addressConnected}</div>}
    </div>
  )
}