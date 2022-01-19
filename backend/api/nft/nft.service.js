const dbService = require('../../service/db.service.js');
const web3Service = require('../../service/web3.service.js');

async function query(filterBy = {}) {
    criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('nft')
        const nfts = await collection.find(criteria).toArray()
        return nfts
    } catch (err) {
        // logger.error('cannot find toys', err)
        console.log('cannot find nfts', err);
        throw err
    }
};
async function updateNft(tokenId){
    try {
        const ownerNft = await web3Service.checkIfMinted(tokenId);
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
            return nftsAfterUpdate;
        }
    } catch (err) {
        // logger.error('cannot insert art', err)
        throw err
    }
};

function _buildCriteria(filterBy) {
    const criteria = {}
    const tokenId = (filterBy.tokenId) ? filterBy.tokenId : ''
    if (filterBy.tokenId) {
        criteria.$or = [{
            tokenId: parseFloat(tokenId + '.0')
        }, ]
    }
    return criteria
}

module.exports = {
    query,
    updateNft
}