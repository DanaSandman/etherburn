const dbService = require('../../service/db.service.js')

async function query() {
    console.log('4 service');
    try {
        // const collection = await dbService.getCollection('nft')
        // const nfts = await collection.find({}).toArray()
        const nfts = await require('../../data/nft-data.json');
        console.log('9 service nfts', nfts);
        return nfts.nfts //for data json inhouse
        // return nfts // for mongo data
    } catch (err) {
        // logger.error('cannot find toys', err)
        console.log('cannot find nfts', err);
        throw err
    }
}

module.exports = {
    query,
}