export function setWalletNotify(notify) {
    return async dispatch => {
        try {
            console.log('action', notify);
            dispatch({
                type: 'SET_WALLET_NOTIFY',
                notify
            });
        } catch (err) {
            console.log('wallet Actions: err in loaded Nfts', err);
        }
    };
}
export function setSelectedWallet(wallet) {
    return async dispatch => {
        try {
            console.log('action', wallet);
            dispatch({
                type: 'SET_SELECTED_WALLET',
                wallet
            });
        } catch (err) {
            console.log('wallet Actions: err in loaded Nfts', err);
        }
    };
}
export function setWalletOnboard(wallet) {
    return async dispatch => {
        try {
            console.log('action', wallet);
            dispatch({
                type: 'SET_WALLET_ON_BOARD',
                wallet
            });
        } catch (err) {
            console.log('wallet Actions: err in loaded Nfts', err);
        }
    };
}