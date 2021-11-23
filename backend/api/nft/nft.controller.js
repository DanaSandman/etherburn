const nftService = require('./nft.service');

module.exports = {
    getNfts,
};

async function getNfts(req, res) {
    console.log(' 8 controller nft');
    try {
        // var data = req.body
        const nfts = await nftService.query()
        console.log(' 12 controller nft nfts', nfts);
        res.send(nfts)
    } catch (err) {
        res.status(500).send({
            err: 'Failed to get nfts'
        })
    }
};
