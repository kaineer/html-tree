// lib/rules/index.js

const defaultRulesOptions = {
  'one-modifier': false
};

const allRules = {
  'one-modifier': require('./one-modifier'),
  'element-out-of-block': require('./element-out-of-block'),
  'modifier-out-of-element': require('./modifier-out-of-element'),
  'no-elements': require('./no-elements')
};

const getRulesToApply = ({rules: ruleOptions = defaultRulesOptions} = {}) => {
  const rules = [];

  for (const ruleId in allRules) {
    if (ruleOptions[ruleId] !== false) {
      rules.push(allRules[ruleId]);
    }
  }

  return rules;
};

module.exports = {
  getRulesToApply
};
