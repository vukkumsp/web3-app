//https://eth-sepolia.g.alchemy.com/v2/k5OV1rIclQxMQXfKlzHev6Kq8ErR_Nwq

require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;


module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [
        `0x${PRIVATE_KEY}`
      ]
    }
  }
}