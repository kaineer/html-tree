// lib/checks/no-elements.js

const checkNoElements = (
  parseClassnames,
  allClassnames
) => allClassnames.
  filter(className => !!className).
  some((className) => {
  const {element} = parseClassnames(className);

  return element;
});

module.exports = {
  checkNoElements
};
