module.exports = {
  'root': true,
  'ecmaFeatures': {
    'arrowFunctions': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 6,
    'environment': {
      'es6': true,
      'node': true,
      'browser': true
    },
  },
  'plugins': ['html', 'json', 'babel'],
  'rules': {
    // General
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'all', { 'nestedBinaryExpressions': false }],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': [
      2,
      {
        'skipStrings': true,
        'skipComments': true,
        'skipRegExps': true,
        'skipTemplates': true
      }
    ],
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'for-direction': 2,
    // Best Practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 2,
    'complexity': [2, 8],
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 2,
    'getter-return': 2,
    'no-alert': 1,
    'no-await-in-loop': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-compare-neg-zero': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-else-return': 0,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 1,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [
      1,
      { 'ignoreArrayIndexes': true, 'ignore': [0, 1, 403, 500] }
    ],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': [2, { 'exceptions': ['Object'] }],
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [
      2,
      { 'allowShortCircuit': true, 'allowTernary': true }
    ],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': 2,
    'no-unused-vars': 1,
    // Style
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'camelcase': 2,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'comma-dangle': 2,
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 0,
    'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [
      2,
      { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }
    ],
    'keyword-spacing': [2, { 'before': true }],
    'linebreak-style': [2, 'unix'],
    'max-len': [2, 120],
    'new-cap': 0,
    'new-parens': 2,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-negated-condition': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'sort-vars': [2, { 'ignoreCase': false }],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2, { 'int32Hint': false }],
    'spaced-comment': [2, 'always'],
    'wrap-regex': 2,
    // ES6
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'generator-star-spacing': [2, { 'before': true, 'after': false }],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': [2, { 'includeExports': true }],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'require-yield': 2,
    'yield-star-spacing': [2, { 'before': true, 'after': false }]
  }
};
