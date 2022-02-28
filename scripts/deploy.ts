import { ethers } from "hardhat";
import { Gallery__factory } from "../typechain-types";

async function main() {
  const Contract = await ethers.getContractFactory("Gallery") as Gallery__factory;
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log(`deployed at: ${await contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });