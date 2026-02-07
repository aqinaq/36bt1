const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deployer:", deployer.address);

  // 1) Deploy TicketToken
  const TicketToken = await hre.ethers.getContractFactory("TicketToken");
  const token = await TicketToken.deploy("TicketToken", "TIX", deployer.address);
  await token.waitForDeployment();
  const tokenAddr = await token.getAddress();
  console.log("TicketToken:", tokenAddr);

  // 2) Deploy EventCrowdfunding (pass token address)
  const EventCrowdfunding = await hre.ethers.getContractFactory("EventCrowdfunding");
  const crowd = await EventCrowdfunding.deploy(tokenAddr);
  await crowd.waitForDeployment();
  const crowdAddr = await crowd.getAddress();
  console.log("EventCrowdfunding:", crowdAddr);

  // 3) Set minter to crowdfunding contract
  const tx = await token.setMinter(crowdAddr);
  await tx.wait();
  console.log("Minter set to:", crowdAddr);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
