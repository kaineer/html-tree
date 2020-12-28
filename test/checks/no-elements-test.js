// test/checks/no-elements-test.js

const {checkNoElements} = require('../../lib/checks/no-elements');
const {parseClassName} = require('../../lib/bem-style/alternate');
const {getAllClassnames} = require('../../lib/getters/all-classnames');
const {JSDOM} = require('jsdom');

const {expect} = require('chai');

const validCode = `
<body>
  <div class="block">
    <div class="block__element"></div>
  </div>
</body>
`;

const invalidCode = `
<body>
  <div class="block">
    <div class="other-block"></div>
  </div>
</body>
`;

const f = (html) => {
  const jsdom = new JSDOM(html);
  const {window: {document}} = jsdom;

  const allClassnames = getAllClassnames(document);
  return checkNoElements(parseClassName, allClassnames);
};

describe('checkNoElements()', () => {
  it('should success for valid html', () => {
    expect(f(validCode)).to.eq(true);
  });

  it('should fail for invalid html', () => {
    expect(f(invalidCode)).to.eq(false);
  });
});
