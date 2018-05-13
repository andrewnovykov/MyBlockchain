const Block = require('./block');


describe('Block', ()=>{

  let data, lastBlock, block;

  beforeEach(()=>{
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mainBlock(lastBlock, data);
  });


  it('sets the `data` to match the input', ()=>{
    expect(block.data).toEqual(data);
  });

  it('sets the `LastHash` to match the input hash of the last block', ()=>{
    expect(block.lastHash).toEqual(lastBlock.hash);
  });


});
