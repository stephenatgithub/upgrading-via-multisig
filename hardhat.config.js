// hardhat.config.js
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require('@openzeppelin/hardhat-defender');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
    defaultNetwork: "sepolia",
    defender: {
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
    },
    networks: {
      hardhat: {
      },
      sepolia: {
        url: SEPOLIA_URL,
        accounts: [PRIVATE_KEY],
      }
    },
    etherscan: {
      apiKey: ETHERSCAN_API_KEY
    },
    solidity: {
      version: "0.8.18",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    },
    mocha: {
      timeout: 40000
    }
  }