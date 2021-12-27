// https://betterprogramming.pub/ethereum-dapps-how-to-listen-for-events-c4fa1a67cf81
// instal web 3, import, set provider (infura) and do somthing
// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
const nftService = require('../api/nft/nft.service.js');
const Web3 = require("web3");
const dbService = require('./db.service.js')
const abi = require('../service/abi.json');


async function connect(){
    console.log('contract web3 serviceeeeeeeeeee');

    //httpProvider:  https://rinkeby.infura.io/v3/f841f799f0ab41ce94b338eaaa0cf3da
    const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/f841f799f0ab41ce94b338eaaa0cf3da"));

    const myContract = new web3.eth.Contract(
        abi.abi,
        '0x381D82D5EEEDA26586FffFD170bd77D50748daDD'
    );
    // console.log('contract web3 service', myContract);

    myContract.events.MyEvent({})
        .on('Transfer', async function(event){
            console.log(event.returnValues, 'event.returnValues');
            // Do something here
            const tokenId = event.returnValues
            const nfts = await nftService.query(tokenId)
            console.log('web3service nft', nfts[0]);
            console.log('nftsss after update',await updateNft(nfts[0]) );
    // here we get the evend data a with tokenId.
    //  please creat a function that  filtering by token id and updating the db isMinted to true (: 

    })
    .on('error', console.error);

}

async function updateNft(nft){
    console.log('updateNft');
    try {
        if (nft.tokenId) {
            const nftToSave = {
                _id: nft._id,
                metadata: nft.metadata,
                isMinted: 'true',
                image: nft.image,
                name: nft.name,
                category: nft.category,
                tokemId: nft.tokemId,
                video: nft.video,
            }
            const collection = await dbService.getCollection('nft')
            await collection.updateOne({
                'tokemId': nftToSave.tokemId
            }, {
                $set: nftToSave
            })
            const nfts = await query();
            console.log('nfts',nfts);
            return nfts;
        }
    } catch (err) {
        // logger.error('cannot insert art', err)
        throw err
    }
    };

    module.exports = {
        connect,
    }