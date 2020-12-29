// test/bem-style/two-dashes-test.js

const {parseClassName} = require('../../lib/bem-style/two-dashes');
const {expect} = require('chai');

describe('Two dashes parseClassName()', () => {
  it('should be a function', () => {
    expect(parseClassName).to.be.a('function');
  });

  it('should parse block class', () => {
    const { block, element, modifier, level } = parseClassName('block');

    expect(block).to.eq('block');
    expect(element).to.not.be.ok;
    expect(modifier).to.not.be.ok;
    expect(level).to.eq('block');
  });

  it('should parse block with modifier class', () => {
    const { block, element, modifier, level } =
      parseClassName('block--modifier');

    expect(block).to.eq('block');
    expect(element).to.not.be.ok;
    expect(modifier).to.eq('modifier');
    expect(level).to.eq('block');
  });

  it('should parse element class', () => {
    const { block, element, modifier, level } =
      parseClassName('block__element');

    expect(block).to.eq('block');
    expect(element).to.eq('element');
    expect(modifier).to.not.be.ok;
    expect(level).to.eq('element');
  });

  it('should parse element modifier class', () => {
    const { block, element, modifier, level } =
      parseClassName('block__element--modifier');

    expect(block).to.eq('block');
    expect(element).to.eq('element');
    expect(modifier).to.eq('modifier');
    expect(level).to.eq('element');
  });

  it('should signal about several modifiers', () => {
    const { block, severalModifiers } =
      parseClassName('block--mod1--mod2');

    expect(block).to.eq('block');
    expect(severalModifiers).to.be.true;
  });
});
