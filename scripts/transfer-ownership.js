require('@openzeppelin/hardhat-upgrades');

const { ethers, upgrades } = require("hardhat");

async function main () {
    const gnosisSafe = '0xA83E845A3EAedF65fc7171457F4d5D89BDE8905D';
  
    console.log('Transferring ownership of ProxyAdmin...');

    // The owner of the ProxyAdmin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log('Transferred ownership of ProxyAdmin to:', gnosisSafe);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });