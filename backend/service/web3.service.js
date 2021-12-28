// https://betterprogramming.pub/ethereum-dapps-how-to-listen-for-events-c4fa1a67cf81
const Web3 = require("web3");
const abi = require('../service/abi.json');

// WEBSOCKET PROVIDER
    // const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/f841f799f0ab41ce94b338eaaa0cf3da"));
// HTTP PROVIDER
 const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/f841f799f0ab41ce94b338eaaa0cf3da"));

 const contract = new web3.eth.Contract(
        abi.abi,
        '0x7c17a37Bc86a146aF3D6b4E5d7aE11970916e31d'
    );
    // console.log('contract web3 service', myContract);

 async function checkIfMinted(tokenId){
    console.log('check in mindet', tokenId);
    const owner = await contract.methods.ownerOf(tokenId).call()
    console.log('ownerrrrrrr' , owner);
    if (owner){
        return owner
    }else{
        return null
    }
    };


    // myContract.events.MyEvent({})
    //     .on('Transfer', async function(event){
    //         console.log(event.returnValues, 'event.returnValues');
    //         // Do something here
    //         const tokenId = event.returnValues
    //         const nfts = await nftService.query(tokenId)
    //         console.log('web3service nft', nfts[0]);
    //         console.log('nftsss after update',await updateNft(nfts[0]) );
    // // here we get the evend data a with tokenId.
    // //  please creat a function that  filtering by token id and updating the db isMinted to true (: 

    // })
    // .on('error', console.error);
    module.exports = {
        checkIfMinted,
     
    }