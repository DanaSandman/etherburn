import { read } from '../../services/web3.service.js';

export function loadContractData() {
    return async dispatch => {
        try {
            const contractData = await read();
            // console.log('action', contractData);
            dispatch({
                type: 'SET_CONTRACT_DATA',
                contractData
            });
        } catch (err) {
            console.log('Contract Actions: err in loaded Contract Data', err);
        }
    };
}