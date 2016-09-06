var hexabin = require('../util/hexabin');

module.exports = function(bitmap) {
  'use strict';
  var ret = Object.create(null);
  var i;
  var binary = hexabin.toBin(bitmap);
  
  if(binary.valid) {
    ret.binary = binary.result; 
  }else {
    ret.valid = false;
    return ret;
  }

  ret.hexadecimal = bitmap;
  ret.map = [];

  for(i = 0; i < ret.binary.length; i += 1) {
    ret.map[i] = ret.binary.substr(i,1);
  }

  ret.valid = true;
  return ret;
};