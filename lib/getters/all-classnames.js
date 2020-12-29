// lib/getters/all-classnames.js

const {getClassnames} = require('./classnames');

const getAllClassnames = (doc) => [...doc.querySelectorAll('*[class]')].
  map(getClassnames).
  flat();

module.exports = {
  getAllClassnames
};
