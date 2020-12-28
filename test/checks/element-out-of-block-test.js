// test/checks/element-out-of-block-test.js

const {checkElementOutOfBlock} = require('../../lib/checks/element-out-of-block');
const {parseClassName} = require('../../lib/bem-style/alternate');

const {expect} = require('chai');

const f = (classNames, parentsClassNames) => checkElementOutOfBlock(
  parseClassName,
  classNames,
  parentsClassNames
);

describe('checkElementOutOfBlock()', () => {
  it('should not fail for blocks', () => {
    expect(f([
      'block'
    ], [])).to.eq(true);
  });

  it('should fail for element without block parent', () => {
    expect(f([
      'block__element'
    ], [])).to.eq(false);
  });

  it('should not fail when parent block is defined', () => {
    expect(f([
      'block__element'
    ], [
      [],
      ['block']
    ])).to.eq(true);
  });

  it('should fail when there is parent block for only one class', () => {
    expect(f([
      'block__element',
      'foo__element'
    ], [
      ['block']
    ])).to.eq(false);
  });
});
