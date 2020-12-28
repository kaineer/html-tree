// test/getters/all-classnames-test.js

const {JSDOM} = require('jsdom');
const {expect} = require('chai');
const {getAllClassnames} = require('../../lib/getters/all-classnames');

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
        <div class="other-block__left"></div>
        <div class="other-block__right"></div>
      </div>
    </div>
  </body>
</html>`;

describe('getAllClassnames()', () => {
  it('should be a function', () => {
    expect(getAllClassnames).to.be.a('function');
  });

  it('should return all classes', () => {
    const allClassnames = getAllClassnames(getDoc(code));

    expect(allClassnames).to.include('other-block__left');
    expect(allClassnames).to.include('other-block__right');
    expect(allClassnames).to.include('block__element--modifier');
    expect(allClassnames).to.include('block');
  });
});

