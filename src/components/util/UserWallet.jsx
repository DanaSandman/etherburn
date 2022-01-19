import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initNotify, initOnboard } from "../../services/blockNative.service.js";
import { setUserAccount } from "../../store/user/user.action.js";
import { setSelectedWallet, setWalletNotify, setWalletOnboard } from "../../store/wallet/wallet.action.js";

export default function UserWallet() {

    const [onboard, setOnboard] = useState();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.userModule.account);

    const onlogin = async () => {
        const walletSelected = await onboard.walletSelect()
        if(walletSelected){
        const readyToTransact = await onboard.walletCheck()
        
        window.localStorage.setItem('isConnected', true)
        console.log('walletSelected',walletSelected);
        console.log('readyToTransact',readyToTransact);
        }
    };
    const onLogout = async () => {
       onboard.walletReset();
       window.localStorage.removeItem('isConnected')
    //    window.location.reload();
    };
    const setAccount = (account) => {
        dispatch(setUserAccount(account));
    };
    const setWallet = (wallet) => {
        window.ethereum = wallet.provider;
        window.localStorage.setItem('selectedWallet', wallet.name)
    };

    useEffect(() => {
        //need to check how to diconnected firs for the mint btn 
       const selectedWallet =  window.localStorage.getItem('selectedWallet');
        if (selectedWallet === undefined || selectedWallet === 'undefined'){
            window.localStorage.setItem('isConnected', false)
        }
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

      {!account && <button className="login connect-btn" onClick={onlogin} >Connect</button>}
        {account && 
        <div className="connected" >
            <button className="logout connect-btn" onClick={onLogout} >{account.slice(0, 6) + '...' + account.slice(38, 42)}</button>
            {/* <button onClick={onboard.accountSelect()}>Switch Account</button> */}
        </div>
        }
    </div>
  )
}