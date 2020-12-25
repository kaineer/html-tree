// test/getters/classnames-test.js

const {getClassnames} = require('../../lib/getters/classnames');
const {expect} = require('chai');

const {JSDOM} = require('jsdom');

describe('getClassnames()', () => {
  it('should be a function', () => {
    expect(getClassnames).to.be.a('function');
  });

  it('should return null when no className attribut defined', () => {
    expect(getClassnames({})).to.eq(null);
  });

  it('should return array if className is defined', () => {
    expect(getClassnames({className: 'a  b c'})).to.deep.eq(['a', 'b', 'c']);
  });

  it('should take classes from jsdom', () => {
    const dom = new JSDOM('<div id="dom" class="foo bar baz"></div>');
    const {window: {document: doc}} = dom;
    const el = doc.querySelector('#dom');

    expect(getClassnames(el)).to.deep.eq(['foo', 'bar', 'baz']);
  });
});
