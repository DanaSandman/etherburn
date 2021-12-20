import Onboard from 'bnc-onboard';
import Notify from 'bnc-notify';
import Web3 from 'web3';
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserAccount } from "../../store/user/user.action.js";
// maybe i will add wallet reducer and stor to  

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
    // const [notify, setNotify] = useState(null)
    const [isConnected, setIsConnected] = useState(false);
    const currUserAddress = useSelector((state) => state.userModule.currUserAddress)


    const onlogin = async (wallet) => {
        await onboard.walletSelect();
        await onboard.walletCheck();
        setIsConnected(true);
    };
    const onLogout = async () => {
        await onboard.walletReset();
        setIsConnected(false);
    };
    // const changeAccount = async () => {
    //     console.log('change account function');
    //     await onboard.accountSelect();
    //     console.log('change account after' );
    // };
    // const initNotify = () =>{
    //     return Notify({
    //         dappId: dappId,
    //         networkId,
    //         onerror: error => console.log(`Notify error: ${error.message}`)
    //     })
    // };
    const setAccountAddress = (account) => {
        console.log(`${account} is now connected`);
        dispatch(setUserAccount(account));
    };
    const setWallet = (wallet) => {
        console.log(`${wallet.name} is now connected`);
        web3 = new Web3(wallet.provider)
        window.localStorage.setItem('selectedWallet', wallet.name)
        // window.ethereum = wallet.provider;
        // console.log('selectedWallet',selectedWallet);
    };

    useEffect(() => {
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
        // const notify = initNotify();
        // dispatch(setWalletNotify(notify));
    }, []);
    // useEffect(() => {
    //     let previouslySelectedWallet = window.localStorage.getItem('selectedWallet');
    //     previouslySelectedWallet = previouslySelectedWallet !== 'undefined' ? previouslySelectedWallet : undefined;
    //     dispatch(setSelectedWallet(previouslySelectedWallet));

    //     if (previouslySelectedWallet && onboard) {
    //         onboard.walletSelect(previouslySelectedWallet);
    //     }else if (onboard){
    //         dispatch(setWalletOnboard(onboard));
    //     }
    // }, [onboard]);

    // useEffect(() => {
    //     if (onboard) {
    //         dispatch(setWalletOnboard(onboard));
    //     }
    // }, [onboard]);

  return (
    <div>
        {!isConnected && <button className="login" onClick={onlogin} onLogout={onLogout}>Connect</button>}
        {isConnected && <div className="connected" ><button onClick={onLogout}>Disconnect</button>{currUserAddress}</div>}
        {/* <button onClick={changeAccount}>changeAcc</button> */}
    </div>
  )
}
