// test/index-test.js

const {JSDOM} = require('jsdom');
const {checkDOM} = require('../lib/index');
const {expect} = require('chai');

const f = (html) => {
  const jsdom = new JSDOM(html);
  const {window: {document: doc}} = jsdom;

  return checkDOM(doc);
};

describe('checkDOM()', () => {
  it('should work fine with valid code', () => {
    const {ok, messages} = f(
      `<html><body>
         <div class="block">
           <div class="block__element"></div>
         </div>
       </body></html>`);

    expect(ok).to.eq(true);
    expect(messages).to.be.empty;
  });

  it('should fail if no bem elements found', () => {
    const {ok, messages} = f(
      `<html><body>
         <div class="block"></div>
       </body></html>`);

    expect(ok).to.eq(false);
    expect(messages.length).to.eq(1);
    expect(messages[0].ruleId).to.eq('no-elements');
    expect(messages[0].el.tagName.toLowerCase()).to.eq('body');
  });
});
