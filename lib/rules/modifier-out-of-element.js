// lib/rules/modifier-out-of-element.js

const {getClassnames} = require('../getters/classnames');
const {checkModifierOutOfElement} = require('../checks/modifier-out-of-element');

const ruleId = 'modifier-out-of-element';

module.exports = ({elts, messages, parseClassName}) => {
  elts.forEach((el) => {
    const classnames = getClassnames(el);
    if (!checkModifierOutOfElement(parseClassName, classnames)) {
      messages.push({ruleId, el});
    }
  });
};
