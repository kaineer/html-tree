// lib/bem-style/yandex.js

const {createParseClassName} = require('./common');

module.exports = {
  parseClassName: createParseClassName('__', '--')
};
