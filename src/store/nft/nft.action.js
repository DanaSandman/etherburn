import { nftService } from '../../services/nft/nft.service.js';

//LIST
export function loadNfts() {

    return async dispatch => {
        try {
            const nfts = await nftService.loadNfts();
             console.log('action',nfts);
            dispatch({ type: 'SET_NFTS', nfts });
        } catch (err) {
            console.log('Nft Actions: err in loaded Nfts', err);
        }
    };
}