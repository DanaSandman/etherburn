import { httpService } from '../http.service.js';

export const nftService = {
    loadNfts,
    updateNft
};

async function loadNfts(filterBy) {
    return await httpService.get('nft', filterBy);   
   }

async function updateNft(tokenId) {
    return await httpService.put('nft', {tokenId: tokenId});   
   }
