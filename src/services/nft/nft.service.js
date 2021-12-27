import { httpService } from '../http.service.js';

export const nftService = {
    loadNfts,
    mint
};

async function loadNfts(filterBy) {
    return await httpService.get('nft', filterBy);   
   }

async function mint() {
    return await httpService.put('nft');   
   }
