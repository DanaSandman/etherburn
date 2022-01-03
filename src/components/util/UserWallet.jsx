import React, { useEffect, useState } from "react";
import { initNotify, initOnboard } from "../../services/blockNative.service.js";
import { setUserAccount } from "../../store/user/user.action.js";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedWallet, setWalletNotify, setWalletOnboard } from "../../store/wallet/wallet.action.js";

export default function UserWallet() {

    // const [isConnected, setIsConnected] = useState(false);
    
    const [onboard, setOnboard] = useState();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.userModule.account);
    // const onboard = useSelector((content) => content.walletModule.onboard);

    const onlogin = async () => {
        const walletSelected = await onboard.walletSelect()
        if(walletSelected){
        const readyToTransact = await onboard.walletCheck()
        
        window.localStorage.setItem('isConnected', true)
        // setIsConnected(true);
        console.log('walletSelected',walletSelected);
        console.log('readyToTransact',readyToTransact);
        }
    };
    const onLogout = async () => {
       onboard.walletReset();
    //    setIsConnected(false);
    //    window.localStorage.removeItem('account address')
    //    window.localStorage.removeItem('selectedWallet')
       window.localStorage.removeItem('isConnected')
       window.location.reload();
   };

    const setAccount = (account) => {
        dispatch(setUserAccount(account));
    };

    // const setChainId = (chainId) => {
    //     chainId = chainId ? supportedNetworks[chainId] ? chainId : UNSUPPORTED_NETWORK : DEFAULT_CHAIN_ID;
    //     dispatch(setUserChainId(chainId));
    // }
    // const setBalance = (balance) => {
    //     dispatch(setUserBalance(balance));
    // }

    const setWallet = (wallet) => {
        window.ethereum = wallet.provider;
        window.localStorage.setItem('selectedWallet', wallet.name)
    };

    useEffect(() => {
        const onboard = initOnboard({
            address: setAccount,
            // network: setChainId,
            // balance: setBalance,
            wallet: setWallet
        })
        setOnboard(onboard)
    }, []);

    useEffect(() => {
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

      {!account && <button className="login" onClick={onlogin} >Connect</button>}
        {account && 
        <div className="connected" >
            <button onClick={onLogout} >Disconnect</button>
            {account}
            {/* <button onClick={onboard.accountSelect()}>Switch Account</button> */}
        </div>
        }
    </div>
  )
}