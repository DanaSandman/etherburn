const initialState = {
    account: '',
};

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER_ADDRESS':
            console.log('reducer user',action.userAddress);
            return { ...state, account: action.userAddress };
            default:
                return state;
    }
}