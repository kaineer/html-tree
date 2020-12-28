// lib/bem-style/alternate.js

const {createParseClassName} = require('./common');

module.exports = {
  parseClassName: createParseClassName('__', '--')
};
