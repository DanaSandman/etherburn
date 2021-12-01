import Web3 from 'web3';
import abi from '../assets/util/abi.json';

//web3 to metamask
export const web3 = new Web3(window.ethereum);
//connect to smart contract
export const contract = new web3.eth.Contract(
    abi.abi,
    //smart contract address
    '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735'
);

export const web3service = {
    callOptions,
    transectionOptions
};

 async function callOptions(wallet) {
    // const result = await contract.methods.name().call();
    const result = await contract.methods.balanceOf(wallet).call();
    // const result = await contract.methods.version().call();
    console.log('result',result);
    return result
};

async function transectionOptions() {

    // const usr = '0x42f91354b885328b56A624eD0f7bDADF9a6F75ba';
    // const wad = '';

    // const recipt = await contract.methods.mint(usr,wad).send({
    //     from: '0x42f91354b885328b56A624eD0f7bDADF9a6F75ba',
    //     //gas limit
    //     gas: 1000,
    //     gasPrice: 1000,
    // })

    const recipt = await contract.methods.deny().send({
    })
    console.log('recipt',recipt);

};


