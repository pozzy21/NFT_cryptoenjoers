const { expect } = require("chai");

describe("NFT Contract", function () {

  let NFT, nft, owner, addr1;

  beforeEach(async function () {
    NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy();
    await nft.deployed();
    [owner, addr1] = await ethers.getSigners();
  });

  describe("safeMint", function () {

    it("Should allow owner to mint a token", async function () {
      await nft.safeMint(owner.address, { value: ethers.utils.parseEther("0.001") });
      expect(await nft.balanceOf(owner.address)).to.equal(1);
    });

    it("Should fail if max supply has been reached", async function () {
      for (let i = 0; i < 7; i++) {
        await nft.safeMint(owner.address, { value: ethers.utils.parseEther("0.001") });
      }
      await expect(nft.safeMint(owner.address, { value: ethers.utils.parseEther("0.001") })).to.be.revertedWith("You reached max supply");
    });

    it("Should fail if amount sent is not equal to cost", async function () {
      await expect(nft.safeMint(owner.address, { value: ethers.utils.parseEther("0.002") })).to.be.revertedWith("Please add valid amount in BNB");
    });

  });
  
}
)
