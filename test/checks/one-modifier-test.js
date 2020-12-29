// test/checks/one-modifier-test.js

const {parseClassName} = require('../../lib/bem-style/two-dashes');
const {checkOneModifier} = require('../../lib/checks/one-modifier');
const {expect} = require('chai');

const f = (className) => (
  checkOneModifier(parseClassName, className)
);

describe('checkOneModifier()', () => {
  it('should return true for valid selector', () => {
    expect(f('block__element--modifier')).to.eq(true);
  });

  it('should return false for invalid selector', () => {
    expect(f('block__element--m1--m2')).to.eq(false);
  });
});
