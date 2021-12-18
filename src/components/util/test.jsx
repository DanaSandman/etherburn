import {useEffect, useState} from 'react'
import {initNotify, initOnboard} from "./blocknative/service";
import {setUserAccount } from "../../../redux/user/action";
import {useDispatch} from "react-redux";
import {setSelectedWallet, setWalletNotify, setWalletOnboard} from "../../../redux/wallet/action";

const Web3Connector = ({children}) => {

    const [onboard, setOnboard] = useState();
    const dispatch = useDispatch();

    const setAccount = (account) => {
        dispatch(setUserAccount(account));
    }
    const setWallet = (wallet) => {
        window.ethereum = wallet.provider;
        window.localStorage.setItem('selectedWallet', wallet.name)
    }
    useEffect(() => {
        const onboard = initOnboard({
            address: setAccount,
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

    return children;
}

export default Web3Connector;
