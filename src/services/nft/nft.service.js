import { httpService } from '../http.service.js';

export const nftService = {
    loadNfts,
};

async function loadNfts(filterBy) {
    return await httpService.get('nft', filterBy);   
   }


