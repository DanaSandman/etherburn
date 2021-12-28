const nftService = require('./nft.service');

module.exports = {
    getNfts,
    updateNft
    // deleteNft,
    // saveNft,
    // getNft
};

//LIST
async function getNfts(req, res) {
    const obj = req.query
    const category = obj[Object.keys(obj)[0]];
    console.log('nft controllerrrrr',req.query);
    console.log('nft controllerrrrr category',category);
    try {
        const nfts = await nftService.query(category)
        console.log(' 12 controller nft nfts');
        res.send(nfts)
    } catch (err) {
        res.status(500).send({
            err: 'Failed to get nfts'
        })
    }
};

//UPDATE 
async function updateNft (req, res) {
    try {
        const tokenId = req.body
        console.log('tokenId',tokenId);
        var nfts = await nftService.updateNft(tokenId.tokenId)
        res.send(nfts)
    } catch (err) {
        res.status(500).send({
            err: 'Failed to update nft'
        })
    }
}