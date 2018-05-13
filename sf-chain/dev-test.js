const Block = require('./block');

const fooBlock = Block.mainBlock(Block.genesis(), 'forof');
console.log(fooBlock)




// const block = new Block('foo', 'bar','zoo', 'baz');
//
// console.log(block.toString());
// console.log(Block.genesis().toString());
