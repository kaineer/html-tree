// lib/index.js

const {getRulesToApply} = require('./rules');
const {parseClassName: defaultParseClassName} = require('./bem-style/two-dashes');

const checkDOM = (doc, opts = {}) => {
  const {parseClassName = defaultParseClassName} = opts;
  const messages = [];

  const applyRule = (rule) => rule({
    doc,
    elts: [...doc.querySelectorAll('*[class]')],
    messages,
    parseClassName
  });

  getRulesToApply(opts).forEach(applyRule);

  return {
    ok: messages.length === 0,
    messages
  };
};

module.exports = {
  checkDOM
};
