const initialState = {
    selectedWallet: undefined,
    onboard: undefined,
    walletNotify: undefined
};

export function walletReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_SELECTED_WALLET':
            console.log('reducer wallet',action.wallet);
            return { ...state, selectedWallet: action.wallet };
        case 'SET_WALLET_ONBOARD':
            console.log('reducer wallet',action.wallet);
            return { ...state, onboard: action.wallet };
        case 'SET_WALLET_NOTIFY':
            console.log('reducer wallet',action.wallet);
            return { ...state, walletNotify: action.wallet };
            default:
                return state;
    }
}