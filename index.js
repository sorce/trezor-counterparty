let bitcoin = require('bitcoinjs-lib')

function getAddressesFromXpub(xpub) {
    const node = bitcoin.HDNode.fromBase58(xpub, bitcoin.networks.mainnet).neutered();
    addresses = [];
    for (var i = 0; i < 8; i++) {
        var address = node.derive(0).derive(i).getAddress();
        addresses.push(address);
        console.log(address);
    }
    return addresses;
}

module.exports = {
	getAddressesFromXpub
}