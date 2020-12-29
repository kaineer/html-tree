// lib/bem-style/two-dashes.js

const {createParseClassName} = require('./common');

module.exports = {
  parseClassName: createParseClassName('__', '--')
};
