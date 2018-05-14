const Block = require('./block');


class Blockchain {

  constructor(){
    this.chain = [Block.genesis()]
    // console.log(this.chain);
  }

  addBlock(data){
      const lastBlock = this.chain[this.chain.length - 1];
      const block = Block.mainBlock(lastBlock, data);
      this.chain.push(block);

      return block;



  }


}

module.exports = Blockchain;
