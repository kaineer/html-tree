// lib/checks/one-modifier.js

const checkOneModifier = (parseClassName, className) => {
  const {severalModifiers} = parseClassName(className);

  return !severalModifiers;
};

module.exports = {
  checkOneModifier
};
