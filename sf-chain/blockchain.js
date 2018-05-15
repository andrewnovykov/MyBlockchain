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

  isValidchain(chain) {
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

    for(let i = 1; chain.length - 1; i++ ){

      const block = chain[i];
      const lastBlock = chain[i - 1];

      if( block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block) ) {
        return false;
      }
 
    }

    return true;
  }


}

module.exports = Blockchain;
