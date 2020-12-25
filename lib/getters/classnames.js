// lib/getters/classnames.js

const getClassnames = (obj) => {
  const {className = null} = obj;
  if (className) {
    return className.
      split(' ').
      filter((s) => !!s.trim());
  }

  return null;
};

module.exports = {
  getClassnames
};
