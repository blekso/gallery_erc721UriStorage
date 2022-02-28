import { ethers } from "hardhat";

describe("deploy", function () {
  it("Should console.log NFT's address after its deployed", async function () {
    const Contract = await ethers.getContractFactory("Gallery");
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log(await contract.address)
  });
});