// lib/rules/one-modifier.js

const {getClassnames} = require('../getters/classnames');
const {checkOneModifier} = require('../checks/one-modifier');

const ruleId = 'one-modifier';

module.exports = ({elts, messages, parseClassName}) => {
  elts.forEach((el) => {
    const classnames = getClassnames(el);
    classnames.forEach((classname) => {
      if (!checkOneModifier(parseClassName, classname)) {
        messages.push({
          classname,
          ruleId,
          el
        });
      }
    });
  });
};
