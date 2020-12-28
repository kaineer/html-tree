// lib/checks/element-out-of-block.js

const checkElementOutOfBlock = (
  parseClassName,
  classNames,
  parentsClassNames = []
) => {
  const bemObjects = classNames.map(parseClassName);
  let result = true;

  bemObjects.some(({block, element}) => {
    if (element) {
      const isBlock = (className) => {
        const {block: b, element, modifier} = parseClassName(className);
        return (block === b && !element && !modifier);
      };

      if(!parentsClassNames.find((list) => !!list.find(isBlock))) {
        result = false;
      }
    }

    return !result;
  });

  return result;
};

module.exports = {
  checkElementOutOfBlock
};
