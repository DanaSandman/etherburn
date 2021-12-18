export function setUserAccount(userAddress) {

    return async dispatch => {
        try {
            console.log('action', userAddress);
            dispatch({
                type: 'SET_USER_ADDRESS',
                userAddress
            });
        } catch (err) {
            console.log('User Actions: err in loaded Nfts', err);
        }
    };
}