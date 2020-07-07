require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth rural snake give clinic slot genuine'; 
let testAccounts = [
"0x535488fb4365425318cf2f389de64394dc1cb7f7f9c150850244c4f7b11f4f3a",
"0x842eaabce1fdbe08d067d03b32b34c47514aa4f85fb027f69cdc6f67113f52cc",
"0xc6540d2de31ca573f8c9c78f7e39b90c4c40cb3585e2be5b1c9017f54f17d1ea",
"0x05a5942a763fb3e694175509472acc7f8e8029a382887143e82a4abe103444cb",
"0x5b9962a68a8ac2fbb1999487e66ad3ed8ef350026f1c20f6852eb37ec0ee5cd2",
"0xea0713262a38b012068e38d61b92ef7f513d2a72e8c1de7f71cf8a21112af6ea",
"0x3a9111a0975c2df5f9eacd6a96c4e7754fb07fdec13dbf1989b3d45b2aec3a78",
"0x1ac1dea16360cbe31fd3e0728cb0b5bd53490c28f1f78c8152898e80e7176638",
"0xa6761cd98670c5b3138b7f7dc407c2df9e524ac1113cc75021a1ae56ae0f8114",
"0xf060b1cacd0c40d00d3c0c2ebc3ca6e612d32c8b171ff300463cdb7323e325d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
