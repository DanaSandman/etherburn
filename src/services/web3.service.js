import Web3 from 'web3';
import abi from '../assets/util/abi.json';
import Notify from "bnc-notify"
import {nftService} from './nft/nft.service.js';

//web3 to metamask
export const web3 = new Web3(window.ethereum);
//connect to smart contract
export const contract = new web3.eth.Contract(
    abi.abi,
    //smart contract address
    '0x7c17a37Bc86a146aF3D6b4E5d7aE11970916e31d'
    );
    console.log('contract web3 service', contract);

 const gContractData = {
    contractAddress: '0x7c17a37Bc86a146aF3D6b4E5d7aE11970916e31d',
    paused: false,
    stage: 0,
    cost: 0,
    mintMax: 0,
};

var notify = Notify({
  dappId: '187fa55a-7d23-4eb8-b72c-4c19f9a5be2d',       // [String] The API key created by step one above
  networkId: 4  // [Integer] The Ethereum network ID your Dapp uses.
});

export async function read(){
    console.log('presaleSupply', await contract.methods.presaleSupply().call());
    
    gContractData.paused = await contract.methods.paused().call();
    gContractData.stage = parseInt(await contract.methods.stage().call());

    if (gContractData.stage === 1){
        console.log('stage', gContractData.stage);
        gContractData.cost = parseInt(await contract.methods.presalePrice().call());
        gContractData.mintMax = await contract.methods.presaleMintMax().call();
    }else if (gContractData.stage === 2){
        gContractData.cost = await contract.methods.publicPresalePrice().call();
        gContractData.mintMax = await contract.methods.publicPresaleMintMax().call();
    }
    return gContractData
};

export async function mint( _tokenIds ){
    console.log('mint');
    const payableAmount = gContractData.cost
    const acc = await web3.eth.getAccounts();
    let tokenIdMinted = null
    console.log('mint payableAmount', payableAmount);
    console.log('mint _tokenIds', _tokenIds);
    console.log('mint acc',acc[0]);
    console.log("presaleMintCount", await contract.methods.presaleMintCount(acc[0]).call());
    
    const mintTx = await contract.methods.mint(_tokenIds).send({
        from: acc[0],
        value: payableAmount,
    })
    .on("transactionHash", hash => {
        // pass the hash to notify to track it
        notify.hash(hash)
        console.log('hash',hash);
    }).on("Transfer", transfer => {
        console.log("Transfer", transfer);
    })
    //if the event is emited 
    //call the server to update the db  with the minted nft 
    console.log('mintTx',mintTx);

    tokenIdMinted = await mintTx.events.Transfer.returnValues.tokenId
    if (tokenIdMinted){
        console.log('tokenIdMinted',tokenIdMinted);
        nftService.updateNft(tokenIdMinted);
    }
    return mintTx
};

export const web3service = {
    read,
    mint,
};