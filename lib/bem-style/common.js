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
    const index = string.indexOf(modifierDelimiter);
    const first = string.slice(0, index);
    const modifier = string.slice(index + modifierDelimiter.length);

    return {
      first,
      modifier,
      severalModifiers: modifier.includes(modifierDelimiter)
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
