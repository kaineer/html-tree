// lib/bem-style/common.js

const getLevel = (b, e, m) => {
  if (!b) {
    throw new Error('Block is not defined');
  } else {
    if (!e) {
      return 'block';
    } else {
      return 'element';
    }
  }
};

const createParseClassName = (elementDelimiter, modifierDelimiter) => (className) => {
  let block = className;
  let element = null;
  let modifier = null;
  let severalModifiers = false;

  const splitByModifier = (string) => {
    const parts = string.split(modifierDelimiter);

    return {
      first: parts[0],
      modifier: parts[1],
      severalModifiers: parts.length > 2
    };
  };

  if (className.includes(elementDelimiter)) {
    ([block] = className.split(elementDelimiter));
    const afterBlock = className.slice(block.length + elementDelimiter.length);

    if (afterBlock.includes(modifierDelimiter)) {
      ({ first: element, modifier, severalModifiers } =
       splitByModifier(afterBlock));
    } else {
      element = afterBlock;
    }
  } else if (className.includes(modifierDelimiter)) {
    ({first: block, modifier, severalModifiers } = splitByModifier(className));
  }

  const level = getLevel(block, element, modifier);

  return { block, element, modifier, level, severalModifiers };
};

module.exports = {
  createParseClassName
};
