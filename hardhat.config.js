require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    bnbtestnet: {
      url: "https://indulgent-newest-leaf.bsc-testnet.discover.quiknode.pro/8a8483b20d028a2b4ca603f1f86a6f1d702a6624/",
      accounts: [
        "8f908ac6e87d081c4ced93f3c7f5cb89190087eca7f07ea7762ae5ed352b2197",
      ],
    },

  },
  gasReporter: {
    enabled: true,
  },
  etherscan: {
    apiKey: "Z6H2Q2ND5VCIDXIBETK9RDDRGYR4Z73VKX", // Your Etherscan API key
  },

};
