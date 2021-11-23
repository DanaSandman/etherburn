import { httpService } from '../http.service.js';

export const nftService = {
    loadNfts,
};

async function loadNfts() {
    return await httpService.get('nft');   
   }


