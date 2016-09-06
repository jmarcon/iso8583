// Alphanumeric
module.exports = function(element) {
  'use strict';
  var match = /^([a-zA-Z0-9]|\ )*$/;
  element.valid = match.test(element.value);
  return element;
};