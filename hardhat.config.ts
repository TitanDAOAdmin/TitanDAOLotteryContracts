import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import {node_url, accounts} from './utils/networks';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      accounts: accounts('localhost'),
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com/v1/a50eb5139e4cb2ce865cf47c1b664985eb69b86e',
      accounts: accounts('matic'),
      live: true,
    },
  },
  namedAccounts: {
    test: 0,
    creator: 1,
    deployer: 1,
  },
};

export default config;
