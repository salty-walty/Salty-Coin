const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3cfd37a273c7860844c5bba68a1f34a26021275a6150ae1ba9c2b403b9e51c63')
const myWalletAddress = myKey.getPublic('hex')


// creation of "saltyCoin" blockchain

let saltyCoin = new Blockchain();

console.log('\n Starting the miner...')
saltyCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey);
saltyCoin.addTransaction(tx1);

saltyCoin.minePendingTransactions(myWalletAddress);

saltyCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Salty is: ', saltyCoin.getBalanceOfAddress(myWalletAddress))

saltyCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ' + saltyCoin.isChainValid())


