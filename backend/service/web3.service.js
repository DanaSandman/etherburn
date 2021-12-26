// instal web 3, import, set provider (infura) and do somthing
// https://betterprogramming.pub/ethereum-dapps-how-to-listen-for-events-c4fa1a67cf81
// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

//httpProvider:  https://rinkeby.infura.io/v3/f841f799f0ab41ce94b338eaaa0cf3da


// const myContract = new web3.eth.Contract(
//     abi,
//     '0x381D82D5EEEDA26586FffFD170bd77D50748daDD',
// );

// myContract.events.MyEvent({})
//     .on('Transfer', async function(event){
//         console.log(event.returnValues);
//         // Do something here

// here we get the evend data a with tokenId.
//  please creat a function that  filtering by token id and updating the db isMinted to true (: 

//     })
//     .on('error', console.error);