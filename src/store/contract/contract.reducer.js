const initialState = {
    contractData: {}
};

export function contractReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_CONTRACT_DATA':
            console.log('reducer',action.contractData);
            return { ...state, contractData: action.contractData };
            default:
                return state;
    }
};
