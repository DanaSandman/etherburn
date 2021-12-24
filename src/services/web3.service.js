import Web3 from 'web3';
import abi from '../assets/util/abi.json';

//web3 to metamask
export const web3 = new Web3(window.ethereum);
//connect to smart contract
export const contract = new web3.eth.Contract(
    abi.abi,
    //smart contract address
    '0xf22B4a4f3060630559e98Cf884Ce45d62DE2696e'
    );
    console.log('contract web3 service', contract);

 const gContractData = {
    contractAddress: '0xf22B4a4f3060630559e98Cf884Ce45d62DE2696e',
    paused: false,
    stage: 0,
    cost: 0,
    mintMax: 0,
};

export async function read(){
    console.log('read');

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

    console.log('payableAmount', payableAmount);
    console.log('_tokenIds', _tokenIds);
    console.log('acc',acc);

    const mintTx = await contract.methods.mint(_tokenIds).send({
        from: acc[0],
        value: payableAmount,
    });
    return mintTx
};

export const web3service = {
    read,
    mint,
};