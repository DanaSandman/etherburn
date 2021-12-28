import {
    nftService
} from '../../services/nft/nft.service.js';

//LIST
export function loadNfts(filterBy) {
    if (!filterBy) {
        filterBy = '{}';
    }
    console.log('filterBy', filterBy);
    return async dispatch => {
        try {
            const nfts = await nftService.loadNfts(filterBy);
            console.log('action', nfts);
            dispatch({
                type: 'SET_NFTS',
                nfts
            });
        } catch (err) {
            console.log('Nft Actions: err in loaded Nfts', err);
        }
    };
}
//DETAILS
export function setNft(tokenId) {
    return async dispatch => {
        try {
            console.log('action tokenId', tokenId);
            const nft = await nftService.getById(tokenId);
            console.log('action nft res', nft);
            dispatch({ type: 'SET_NFT', nft });
        } catch (err) {
            console.log('nft Actions: err in selected nft', err);
        }
    };
}