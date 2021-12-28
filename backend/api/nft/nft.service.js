const dbService = require('../../service/db.service.js');
const web3Service = require('../../service/web3.service.js');

async function query(filterBy = {}) {
    console.log('4 service');
    console.log('filterBy service', filterBy);
    criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('nft')
        console.log('23.criteria', criteria);
        const nfts = await collection.find(criteria).toArray()
        console.log('service nft nfts', nfts);
        return nfts
    } catch (err) {
        // logger.error('cannot find toys', err)
        console.log('cannot find nfts', err);
        throw err
    }
};
async function updateNft(tokenId){
    console.log('updateNft',tokenId)
    try {
        const ownerNft = await web3Service.checkIfMinted(tokenId);
        console.log('ownerNftttttttttttttttttttttttttt',ownerNft);
        if (ownerNft !== null){
        const nfts = await query({ tokenId: tokenId})
            const nftToSave = { 
                _id: nfts[0]._id,
                metadata: nfts[0].metadata,
                isMinted: 'true',
                image: nfts[0].image,
                name: nfts[0].name,
                category: nfts[0].category,
                tokenId: parseFloat(nfts[0].tokenId),
                video: nfts[0].video,
            }
            const collection = await dbService.getCollection('nft')
            await collection.updateOne({
                'tokenId': nftToSave.tokenId
            }, {
                $set: nftToSave
            })
            const nftsAfterUpdate = await query();
            console.log('nfts after mint',nftsAfterUpdate);
            return nftsAfterUpdate;
        }
    } catch (err) {
        // logger.error('cannot insert art', err)
        throw err
    }
};

function _buildCriteria(filterBy) {
    console.log('72.filterBy', filterBy);
    const criteria = {}
    const tokenId = (filterBy.tokenId) ? filterBy.tokenId : ''
    if (filterBy.tokenId) {
        console.log('tokenId', tokenId);
        criteria.$or = [{
            tokenId: parseFloat(tokenId + '.0')
        }, ]
    }
    console.log('criteriaaaaaa', criteria);
    return criteria
}

module.exports = {
    query,
    updateNft
}