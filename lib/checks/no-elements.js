// lib/checks/no-elements.js

const checkNoElements = (
  parseClassName,
  allClassnames
) => allClassnames.
  filter(className => !!className).
  some((className) => {
  const {element} = parseClassName(className);

  return element;
});

module.exports = {
  checkNoElements
};
