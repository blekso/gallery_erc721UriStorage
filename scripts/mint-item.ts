import { ethers } from "hardhat";
import { Gallery__factory } from "../typechain-types";

async function main() {
  const Contract = await ethers.getContractFactory("Gallery") as Gallery__factory;
  const contract = await Contract.attach(
      "0x365Bb30fEb347b46678Cf90BA4b6dE9B8dF448D2"
  );
  
  const result = await contract.mintItem("https://ipfs.io/ipfs/QmdhggfgaRgiDFTescCTWiJfgAihB2Ptxw6PzRnacDvwDw");

  console.log(result)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
