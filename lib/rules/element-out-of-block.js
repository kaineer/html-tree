// lib/rules/element-out-of-block.js

const {getClassnames} = require('../getters/classnames');
const {getParentClassnames} = require('../getters/parent-classnames');
const {checkElementOutOfBlock} = require('../checks/element-out-of-block');

const ruleId = 'element-out-of-block';

module.exports = ({elts, messages, parseClassName}) => {
  elts.forEach((el) => {
    const classnames = getClassnames(el);
    const parentsClassnames = getParentClassnames(el);

    if (!checkElementOutOfBlock(parseClassName, classnames, parentsClassnames)) {
      messages.push({ruleId, el});
    }
  });
};
