const { ethers } = require("ethers");
require('dotenv').config();

const provider = new ethers.WebSocketProvider(process.env.QUICKSWAP_URL_BASE);

async function main () {
    provider.on('block', async (blockNumber) => {

        console.log("Blocknumber # ", blockNumber);
    
        const blockInfo = await provider.getBlock(blockNumber);
        console.log(blockInfo);
    
        const tx = blockInfo.transactions;
        const hash = blockInfo.hash;
        const timestamp = blockInfo.timestamp;

        /**
         * @dev Because we use ethersjs6 we don't need to use a conditional statement to check whether the blockchain returns null or undefined
         * In version 5 we would need to use a conditional statement
         */
        console.log(`Block Transactions \n ${tx}
        Block Hash: ${hash}
        Block Timestamp: ${timestamp}`);

    });
}
main();

