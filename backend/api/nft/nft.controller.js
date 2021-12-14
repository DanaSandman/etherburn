const nftService = require('./nft.service');

module.exports = {
    getNfts,
    // deleteArt,
    // saveArt,
    // getArt
};

//LIST
async function getNfts(req, res) {
    // console.log(' 8 controller nft');
    // const filterBy = {}
    const obj = req.query
    const category = obj[Object.keys(obj)[0]];

    console.log('nft controllerrrrr',req.query);
    console.log('nft controllerrrrrcategory',category);
    try {
        // filterBy['_id'] = _id
        // filterBy.category = category
        const nfts = await nftService.query(category)

        console.log(' 12 controller nft nfts');
        res.send(nfts)
    } catch (err) {
        res.status(500).send({
            err: 'Failed to get nfts'
        })
    }
};
