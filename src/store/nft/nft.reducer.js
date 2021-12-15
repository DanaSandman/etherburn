const initialState = {
    nfts: [],
};

export function nftReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_NFTS':
            console.log('reducer',action.nfts);
            return { ...state, nfts: action.nfts };
        // case 'SET_ART':
        //     return { ...state, selectedArt: action.art };
        // case 'ADD_ART':
        //     return { ...state, arts: [...state.arts, action.art] };
        // case 'UPDATE_ART':
        //     return { ...state, arts: [...state.arts.filter(art => action.art._id !== art._id), action.art,] };
        // case 'REMOVE_ART':
        //     return { ...state, arts: state.arts.filter(art => art._id !== action.artId) };
            default:
                return state;
    }
}
