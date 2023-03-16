# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Commands:

```shell
npm run start
npm i @nomicfoundation/hardhat-toolbox @nomiclabs/hardhat-ethers chai ethers hardhat --save-dev
npm i dotenv lodash moment react-apexcharts react-blockies react-redux redux redux-devtools-extension redux-thunk reselect

Start node: npx hardhat node
Run script: npx hardhat run --network localhost .\scripts\1_deploy.js
Enter Hardhat console: npx hardhat console --network localhost
    - const token = await ethers.getContractAt("Token", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    - token.address -> prints address of token
Run tests: npx hardhat test
```
