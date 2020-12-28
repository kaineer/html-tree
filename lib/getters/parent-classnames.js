// lib/getters/parent-classnames.js

const {getClassnames} = require('./classnames');

const getParentClassnames = (el) => {
  const result = [];

  let parent = el.parentElement;

  while (parent) {
    const classnames = getClassnames(parent);
    if (classnames) {
      result.push(classnames);
    }
    parent = parent.parentElement;
  }

  return result;
};

module.exports = {
  getParentClassnames
};
