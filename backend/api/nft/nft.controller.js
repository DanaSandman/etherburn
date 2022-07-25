const nftService = require('./nft.service');

module.exports = {
    getNfts,
    updateNft,
    getNft
    // deleteNft,
    // saveNft,
};

//LIST
async function getNfts(req, res) {
    const obj = req.query
    const category = obj[Object.keys(obj)[0]];
    try {
        const nfts = await nftService.query(category)
        console.log('nfts server controller',nfts)
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
        var nfts = await nftService.updateNft(tokenId.tokenId)
        res.send(nfts)
    } catch (err) {
        res.status(500).send({
            err: 'Failed to update nft'
        })
    }
};
//DETAILS
async function getNft(req, res) {
    try {
        const nfts = await nftService.query({ tokenId: req.params.tokenId})
        res.send(nfts[0])
    } catch (err) {
        // logger.error('Cannot get arts', err)
        console.log('Cannot get arts', err);
        res.status(500).send({ err: 'Failed to get arts' })
    }
};