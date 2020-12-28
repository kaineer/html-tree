// lib/checks/modifier-out-of-element.js

const checkModifierOutOfElement = (parseClassName, classNames) => {
  const bemObjects = classNames.map(parseClassName);
  let result = true;
  bemObjects
  .filter(({modifier}) => !!modifier)
  .some(({block, element, modifier}) => {
    if (modifier) {
      const elementObj = bemObjects.find(({
        block: b, element: e, modifier: m
      }) => (b === block && e === element && !m));

      if (!elementObj) {
        result = false;
      }
    }

    return !result;
  });

  return result;
};

module.exports = {
  checkModifierOutOfElement,
};
