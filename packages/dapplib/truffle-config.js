require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner arena bone table edge rare remember slow include ensure swift gather'; 
let testAccounts = [
"0xd696be0e636c66a1578c1c3ec49cca603e9aff2beb1d687344be028a339b8708",
"0xff70ab6c99e0407ef1b1965eac43dce4bf90eafa5603f039e7193ec8bf2d0208",
"0xb28fe1a6332fca783618fbbfe1a9053f1595cf75a78cac4e828dcba5a399c832",
"0xc13723a52ca144780c94b1e17acc5ae6ae5650f173639bb08d7dbb3641968a5f",
"0x58b3c5dfe19e5347cff669b6090c4bd3b90cfda24e26771801e9d4a2ec34d965",
"0xbc80bc392ab37937798ec1e005a3598464827b7a35e3f420a1618a6e3658b816",
"0x9c486cbac2ff0b0d5a55bb5091db91070595584d860159f286eb81c748dd6408",
"0x4dbbc581ea0a0d6d39f57f0c1aeb9b5cbd563b409382d45f411bac02ca30d41f",
"0xdc948b2b4a1f3ff3412bc940d8c9cf60cbfd6fd37b25b7d12c7e1d4ea3311d94",
"0x658283e531ca5f6ab0a83a2d79a6917589b6f2f108907e6d222cd071f9b60c51"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


