import Web3 from 'web3';
import abi from '../assets/util/abi.json';

//web3 to metamask
export const web3 = new Web3(window.ethereum);
//connect to smart contract
export const contract = new web3.eth.Contract(
    abi.abi,
    //smart contract address
    '0xcC14dd8E6673fEE203366115D3f9240b079a4930'
);

const gContractData = {
    cost: 0,
    timeToMinting: 0,
    isPaused: true,
    maxMintAmount: 0,
    maxSupply: 0,
};

async function read(){
    gContractData.cost = await contract.methods.cost().call();
    gContractData.timeToMinting = await contract.methods.getSecondsUntilMinting().call();
    gContractData.isPaused = await contract.methods.isPaused().call();
    gContractData.maxMintAmount = await contract.methods.maxMintAmount().call();
    gContractData.maxSupply = await contract.methods.maxSupply().call();
    return gContractData
};
// async function write(){
//     const payableAmount = 0.001
//     const _mintAmount = 1 
//     const mint = await contract.methods.mint(payableAmount,_mintAmount).send({
//         from: '0x42f91354b885328b56A624eD0f7bDADF9a6F75ba',
//         value: payableAmount,

//     });
//     return mint
// };

export const web3service = {
    read,
    // write,
};