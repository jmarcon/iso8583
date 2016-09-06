// Alpha, including blanks
module.exports = function(element) {
  'use strict';
  var match = /^([a-zA-Z]|\ )*$/;
  element.valid = match.test(element.value);
  return element;
};