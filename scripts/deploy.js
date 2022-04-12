const hre = require("hardhat");

async function main() {
  const QDToken = await hre.ethers.getContractFactory("QDToken");
  const qdToken = await QDToken.deploy();

  await qdToken.deployed();

  console.log("QDToken deployed to:", qdToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
