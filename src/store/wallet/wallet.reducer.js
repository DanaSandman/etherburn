const initialState = {
    notify: '',
    selectedWallet:'',
    walletOnBoard: '',

};

export function walletReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_WALLET_NOTIFY':
            console.log('reducer wallet notify',action.notify);
            return { ...state, notify: action.notify };
        case 'SET_SELECTED_WALLET':
            console.log('reducer wallet selected',action.wallet);
            return { ...state, selectedWallet: action.wallet };
        case 'SET_WALLET_ON_BOARD':
            console.log('reducer wallet onboard',action.wallet);
            return { ...state, walletOnBoard: action.wallet };
            default:
                return state;
    }
}