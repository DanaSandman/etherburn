const nftService = require('./nft.service');
const web3Service = require('../../service/web3.service');

module.exports = {
    getNfts,
    mint
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

//UPDATE 
async function mint (req, res) {
    try {
       await web3Service.connect()
        console.log('controller nft connect web3');
        res.send({
            err: 'connect smart contract events'
        })
    } catch (err) {
        res.status(500).send({
            err: 'Failed to connect smart contract events'
        })
    }
}