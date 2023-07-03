const { ethers, upgrades } = require("hardhat");

async function main() {
    // const proxyAddress = '0x9Dbca602242483023F6C5dc0a2dd3f0095AdaE5D';
 
    // const BoxV2 = await ethers.getContractFactory("BoxV2");

    // console.log("Preparing upgrade...");
    
    // const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    // console.log("BoxV2 at:", boxV2Address);

    const proxyAddress = '0x9Dbca602242483023F6C5dc0a2dd3f0095AdaE5D';
 
    const BoxV3 = await ethers.getContractFactory("BoxV3");

    console.log("Preparing upgrade...");
    
    const boxV3Address = await upgrades.prepareUpgrade(proxyAddress, BoxV3);
    console.log("BoxV3 at:", boxV3Address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })