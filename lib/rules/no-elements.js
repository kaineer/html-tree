// lib/rules/no-elements.js

const {getAllClassnames} = require('../getters/all-classnames');
const {checkNoElements} = require('../checks/no-elements');

const ruleId = 'no-elements';

module.exports = ({doc, messages, parseClassName}) => {
  const allClassnames = getAllClassnames(doc);
  if (!checkNoElements(parseClassName, allClassnames)) {
    messages.push({
      ruleId,
      el: doc.body
    });
  }
};
