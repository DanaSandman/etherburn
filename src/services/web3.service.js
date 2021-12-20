import { AccessAlarms } from '@material-ui/icons';
import Web3 from 'web3';
import abi from '../assets/util/abi.json';

//web3 to metamask
export const web3 = new Web3(window.ethereum);
//connect to smart contract
export const contract = new web3.eth.Contract(
    abi.abi,
    //smart contract address
    '0x31c2F3c057275AD0B36F2d60E021D789cFAb94a1'
    );
    console.log('contract web3 service', contract);

 const gContractData = {
    presalePrice: 0,
    presaleMintMax: 0,
    publicPresalePrice: 0,
    publicPresaleMintMax: 0,
    paused: false,
    stage: 0
};

export async function read(){
    console.log('read');
    gContractData.presalePrice = await contract.methods.presalePrice().call();
    gContractData.presaleMintMax = await contract.methods.presaleMintMax().call();
    gContractData.publicPresalePrice = await contract.methods.publicPresalePrice().call();
    gContractData.publicPresaleMintMax = await contract.methods.publicPresaleMintMax().call();
    gContractData.paused = await contract.methods.paused().call();
    gContractData.stage = await contract.methods.stage().call();
    return gContractData
};
async function write(){
    console.log('write');
    // const payableAmount = gContractData.cost
    // const _mintAmount = 1 
    // const acc = await web3.eth.getAccounts();
    // console.log('payableAmount', payableAmount);
    // console.log('_mintAmount', _mintAmount);
    // console.log('acc',acc);
    // const mint = await contract.methods.mint(_mintAmount).send({
    //     from: acc[0],
    //     value: payableAmount,
    // });
    // return mint
};

export const web3service = {
    read,
    write,
};