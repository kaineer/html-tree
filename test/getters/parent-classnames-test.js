// test/getters/parent-classnames-test.js

const {JSDOM} = require('jsdom');
const {expect} = require('chai');
const {getParentClassnames} = require('../../lib/getters/parent-classnames');

const getDoc = (html) => {
  const jsdom = new JSDOM(html);
  const {window: {document: doc}} = jsdom;

  return doc;
};

const code = `
<html>
  <body>
    <div class="block">
      <div class="other-block block__element block__element--modifier">
        <div class="other-block__element" id="target"></div>
      </div>
    </div>
  </body>
</html>`;

describe('getParentClassnames()', () => {
  let el;

  beforeEach(() => {
    const doc = getDoc(code);
    el = doc.querySelector('#target');
  });

  it('should be a function', () => {
    expect(getParentClassnames).to.be.a('function');
  });

  it('should return all class names', () => {
    expect(getParentClassnames(el)).to.deep.eq([
      ['other-block', 'block__element', 'block__element--modifier'],
      ['block']
    ]);
  });
});
