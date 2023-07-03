# Contract Flow

Admin (EOA/ Multisig)

-> ProxyAdmin 

-> TransparentUpgradeableProxy (Storage)

-> Box/ BoxV2/ BoxV3 (Implementation)


Storage in TransparentUpgradeableProxy is used and function in implementation is called by delegate calls.



# Deploy upgradeable contract

`npx hardhat run scripts/deploy.js`

> Deploying Box...
> Box deployed to: 0x97b4aFF2f0f628f695a97667848aa3E4317A7bAc


- ProxyAdmin 0xb11e4A9D40F54fe7bce3618aF1af5C82329E52f5

- TransparentUpgradeableProxy 0x97b4aFF2f0f628f695a97667848aa3E4317A7bAc

- Implementation 0xb28394625625bFb64Fb6092B113F6d57c223b06f



# Verify Implementation Contract

`npx hardhat verify "0xb28394625625bFb64Fb6092B113F6d57c223b06f"`

> Successfully submitted source code for contract
> contracts/Box.sol:Box at 0xb28394625625bFb64Fb6092B113F6d57c223b06f
> for verification on the block explorer. Waiting for verification result...

> Successfully verified contract Box on Etherscan.
> https://sepolia.etherscan.io/address/0xb28394625625bFb64Fb6092B113F6d57c223b06f#code



# Propose the upgrade

`npx hardhat run scripts/propose-upgrade.js`

- Implementation upgraded to 

- BoxV2 0x7CACd0981b2E4dC2e9000e01D939B693981083bF

- BoxV3 0x8462Ec4C6f9622D14E29fb9ed342c3ee87A3b640




# Transfer control of upgrades to Gnosis Safe

`npx hardhat run scripts/transfer-ownership.js`

- Gnosis Safe 0xA83E845A3EAedF65fc7171457F4d5D89BDE8905D

- GnosisSafeProxyFactory 0xC22834581EbC8527d974F8a1c97E1bEA4EF910BC

- GnosisSafeL2 (Singleton) 0xfb1bffC9d739B8D520DaF37dF666da4C687191EA


