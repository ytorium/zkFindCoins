const main = async () => {
  
  const contractGameVerifier = await hre.ethers.getContractFactory("GameVerifier");
  const contractVerifier = await contractGameVerifier.deploy();
  await contractVerifier.deployed();
  console.log("Verifier deployed to:", contractVerifier.address);

  const contractGameOne = await hre.ethers.getContractFactory("GameOne");
  const contractOne = await contractGameOne.deploy(contractVerifier.address);
  await contractOne.deployed();
  console.log("GameOne deployed to:", contractOne.address);
  
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
