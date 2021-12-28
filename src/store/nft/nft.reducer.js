const initialState = {
    nfts: [],
    selectedNft: null,
};

export function nftReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_NFTS':
            console.log('reducer',action.nfts);
            return { ...state, nfts: action.nfts };
        case 'SET_NFT':
                return { ...state, selectedNft: action.nft };
            default:
                return state;
    }
}
