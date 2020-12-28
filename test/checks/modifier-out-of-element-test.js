// test/checks/modifier-out-of-element-test.js

const {parseClassName} = require('../../lib/bem-style/alternate');
const {checkModifierOutOfElement} = require('../../lib/checks/modifier-out-of-element');

const {expect} = require('chai');

const f = (classNames) => checkModifierOutOfElement(parseClassName, classNames);

describe('checkModifierOutOfElement()', () => {
  it('should return true for modifier with element in list', () => {
    expect(f(['block__element', 'block__element--modifier'])).to.eq(true);
  });

  it('should fail for one class with modifier', () => {
    expect(f(['block__element--modifier'])).to.eq(false);
  });

  it('should fail when no parent element is present', () => {
    expect(f(['b_e--modifier', 'x_d'])).to.eq(false);
  });

  it('should not fail for extra element classes', () => {
    expect(f(['b_e--mod', 'b_e', 'x_d'])).to.eq(true);
  });
});
