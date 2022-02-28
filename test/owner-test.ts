import { expect } from "chai";
import { ethers } from "hardhat";

describe("owner", function () {
  it("Should have the same owner as contract creator", async function () {
    const [owner] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("Gallery");
    const contract = await Contract.deploy();
    await contract.deployed();
    
    expect(await contract.ownerOf(1)).to.equal(owner.address);
    console.log(`${owner.address} = ${await contract.ownerOf(1)}`)
  });
});