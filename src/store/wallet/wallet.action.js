export function setSelectedWallet(wallet) {

    return async dispatch => {
        try {
            console.log('action', wallet);
            dispatch({
                type: 'SET_SELECTED_WALLET',
                wallet
            });
        } catch (err) {
            console.log('Wallet Actions: err in set selected wallet', err);
        }
    };
}

export function setWalletNotify(wallet) {

    return async dispatch => {
        try {
            console.log('action', wallet);
            dispatch({
                type: 'SET_WALLET_NOTIFY',
                wallet
            });
        } catch (err) {
            console.log('Wallet Actions: err set wallet notify', err);
        }
    };
}

export function setWalletOnboard(wallet) {

    return async dispatch => {
        try {
            console.log('action', wallet);
            dispatch({
                type: 'SET_WALLET_ONBOARD',
                wallet
            });
        } catch (err) {
            console.log('Wallet Actions: err in set wallet onboard', err);
        }
    };
}