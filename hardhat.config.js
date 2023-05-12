require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("solidity-coverage");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";
const PRIVATE_KEYS = process.env.PRIVATE_KEYS || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: PRIVATE_KEYS.split(","),
      chainId: 5,
      blockConfirmations: 6,
    },
  },
};
