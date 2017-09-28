'use strict';

const compile = require('google-closure-compiler-js').compile;
const loaderUtils = require('loader-utils');

module.exports = function(src) {
  const result = compile(Object.assign({}, loaderUtils.getOptions(this), {
    jsCode: [{ src }]
  })).compiledCode;

  return result;
};
