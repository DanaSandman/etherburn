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
    timeTominting: 0,
};

async function read(){
    await cost();
    await getSecondsUntilMintig();
};
// function write(){
//     sonefunction()
// };

//READ/CALLS
async function cost() {
        gContractData.cost = await contract.methods.cost().call();
        console.log('gContractData.cost',gContractData.cost);
};
async function getSecondsUntilMintig() {
    // const currTime = 
    // const timeTominting =
    gContractData.timeTominting = await contract.methods.getSecondsUntilMintig().call();
    console.log('gContractData.timeTominting',gContractData.timeTominting);
};
//WRITE/TRANSECTIONS
// async function transections() {
//     // const usr = '0x42f91354b885328b56A624eD0f7bDADF9a6F75ba';
//     // const wad = '';

//     // const recipt = await contract.methods.mint(usr,wad).send({
//     //     from: '0x42f91354b885328b56A624eD0f7bDADF9a6F75ba',
//     //     //gas limit
//     //     gas: 1000,
//     //     gasPrice: 1000,
//     // })

//     const recipt = await contract.methods.deny().send({
//     })
//     console.log('recipt',recipt);
// };

export const web3service = {
    read,
    // write,
    gContractData
};

 //  async function calls(wallet) {
//     // const result = await contract.methods.name().call();
//     const result = await contract.methods.balanceOf(wallet).call();
//     // const result = await contract.methods.version().call();
//     console.log('result',result);
//     return result
// };
