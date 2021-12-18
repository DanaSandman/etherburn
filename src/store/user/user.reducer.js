const initialState = {
    currUserAddress: '',
};

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER_ADDRESS':
            console.log('reducer user',action.userAddress);
            return { ...state, currUserAddress: action.userAddress };
            default:
                return state;
    }
}