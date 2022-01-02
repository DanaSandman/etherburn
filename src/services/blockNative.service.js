import Notify from 'bnc-notify'
import Onboard from 'bnc-onboard'

const FORMATIC_KEY = "";
const PORTIC_KEY = "";
const INFURA_KEY = "";

const dappId = '187fa55a-7d23-4eb8-b72c-4c19f9a5be2d';
// const networkId = 1; //Ethereum
const networkId = 4; //Rinkeby


export function initOnboard(subscriptions) {
    return Onboard({
        dappId,
        networkId,
        subscriptions,
        walletSelect: {
            wallets: [
                { walletName: 'metamask', preferred: true },
                { walletName: 'coinbase',  preferred: true },
                // { walletName: 'walletConnect', infuraKey: INFURA_KEY, preferred: true },
                // { walletName: 'formatic', apiKey: FORMATIC_KEY, preferred: true },
                // { walletName: 'portis', apiKey: PORTIC_KEY, preferred: true }
            ]
        },
        walletCheck: [
            // { checkName: 'derivationPath' },
            { checkName: 'connect' },
            { checkName: 'accounts' },
            { checkName: 'network' },
        ]
    })
}

export function initNotify() {
    return Notify({
        dappId,
        networkId,
        onerror: error => console.log(`Notify error: ${error.message}`)
    })
}