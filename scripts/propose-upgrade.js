const { ethers, upgrades } = require("hardhat");

async function main() {
    // const proxyAddress = '0x97b4aFF2f0f628f695a97667848aa3E4317A7bAc';
 
    // const BoxV2 = await ethers.getContractFactory("BoxV2");

    // console.log("Preparing upgrade...");
    
    // const boxV2Address = await upgrades.upgradeProxy(proxyAddress, BoxV2);

    // console.log("BoxV2 at:", boxV2Address);

    const proxyAddress = '0x97b4aFF2f0f628f695a97667848aa3E4317A7bAc';
 
    const BoxV3 = await ethers.getContractFactory("BoxV3");

    console.log("Preparing upgrade...");
    
    const boxV3Address = await upgrades.upgradeProxy(proxyAddress, BoxV3);

    console.log("BoxV3 at:", boxV3Address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })