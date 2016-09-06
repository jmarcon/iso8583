// Numeric values only
module.exports = function(element) {
  'use strict';
  var match = /^\d*$/;
  element.valid = match.test(element.value);
  element.value = element.value.replace(/^0+/,'');
  return element;
};