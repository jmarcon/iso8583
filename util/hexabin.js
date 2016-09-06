/*jslint for: true , node: true, white: true */
module.exports = {

  validateBinary: function (binary) {
    'use strict';
    var i = binary.length;
    while (i > 0) {
      if (binary.substr(i - 1, 1) !== '0' && binary.substr(i - 1, 1) !== '1') {
        return { valid: false };
      }
      i = i - 1;
    }
    return { valid: true };
  },

  completeBinary: function (binary) {
    'use strict';
    var base = '0000';
    var pad = base.length - (binary.length % base.length);
    if (pad === 0) {
      return binary;
    }
    return base.substr(0, pad) + binary;
  },

  toHexa: function (binary) {
    'use strict';
    if (binary.result !== undefined) {
      binary = binary.result;
    }
    binary = hexabin.completeBinary(binary);

    var i, k, part, accum, ret = '';
    var a = 'A';
    var valid = hexabin.validateBinary(binary).valid;

    if (!valid) {
      return { valid: false };
    }

    for (i = binary.length; i >= 3; i -= 4) {
      part = binary.substr(i - 4, 4);
      accum = 0;
      for (k = 1; k < 1 + 4; k += 1) {
        accum = accum * 2 + parseInt(part.substr(k - 1, 1), 10);
      }
      if (accum >= 10) {
        // 'A' to 'F'
        ret = String.fromCharCode(accum - 10 + a.charCodeAt(0)) + ret;
      } else {
        // '0' to '9'
        ret = String(accum) + ret;
      }
    }

    // remaining characters, i = 0, 1 or 2
    if (i > 0) {
      accum = 0;
      //convert from front
      for (k = 0; k <= 1; k += 1) {
        accum = accum * 2 + parseInt(binary.substr(k - 1, 1), 10);
      }
      // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert;
      if (accum !== 0) {
        ret = String(accum) + ret;
      }
    }

    return { valid: true, result: ret };
  },

  toBin: function (hexa) {
    'use strict';
    if (hexa.result !== undefined) {
      hexa = hexa.result;
    }
    var i, ret = '';

    var table = {
      '0': '0000',
      '1': '0001',
      '2': '0010',
      '3': '0011',
      '4': '0100',
      '5': '0101',
      '6': '0110',
      '7': '0111',
      '8': '1000',
      '9': '1001',
      'a': '1010',
      'A': '1010',
      'b': '1011',
      'B': '1011',
      'c': '1100',
      'C': '1100',
      'd': '1101',
      'D': '1101',
      'e': '1110',
      'E': '1110',
      'f': '1111',
      'F': '1111'
    };

    for (i = 0; i < hexa.length; i += 1) {
      if (table.hasOwnProperty(hexa.substr(i, 1))) {
        ret += table[hexa.substr(i, 1)];
      } else {
        return { valid: false };
      }
    }

    return { valid: true, result: ret };
  }
};