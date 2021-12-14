import { nftService } from '../../services/nft/nft.service.js';

//LIST
export function loadNfts(filterBy) {
    console.log('filterBy', filterBy);
    return async dispatch => {
        try {
            const nfts = await nftService.loadNfts(filterBy);
             console.log('action',nfts);
            dispatch({ type: 'SET_NFTS', nfts });
        } catch (err) {
            console.log('Nft Actions: err in loaded Nfts', err);
        }
    };
}
// //FILTER
// export function filterNft(filterBy) {
//     console.log('filterBy', filterBy);
//     return async dispatch => {
//       try {
//         const nfts = await nftService.loadNfts(filterBy)
//         console.log('action arts', nfts );
//         dispatch({ type: 'SET_NFTS', nfts });
//       } catch (err) {
//         console.log('NftsActions: err in loadNfts', err)
//       } 
//     }
// }