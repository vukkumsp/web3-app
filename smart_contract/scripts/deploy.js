const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions"); //thi is like factory
  const transactions = await Transactions.deploy(); //creaing instance from factory

  await transactions.deployed();

  console.log('Transactions deployed to: ', transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();