var mti = require('./mti');
var bitmap = require('./bitmap');
var standardDE = require('./de');

var iso = module.exports;
iso.Parse = function (iso, de) {
  'use strict';

  var i;
  if (de === undefined) {
    de = standardDE;
  }
  var ret = Object.create(null);
  ret.mti = mti(iso.substr(0, 4));
  ret.bitmap = bitmap(iso.substr(4, (de[1].format.split(' ')[1]) / 4));
  ret.data = iso.substr((4 + (de[1].format.split(' ')[1]) / 4), iso.length);

  if (ret.bitmap.map.length > de.length) {
    ret.valid = false;
    return ret;
  }

  ret.elements = [];
  for (i = 0; i < ret.bitmap.map.length; i += 1) {
    if (ret.bitmap.map[i] === '1') {
      ret.elements[i + 1] = de[i + 1];
    }
  }

  var tempData = ret.data;
  ret.elements.forEach(function (element) {
    if (element.position > 1) {
      var typeInfo = element.format.split(' ');

      element.type = typeInfo[0];
      element.size = typeInfo[1];
      element.maxsize = typeInfo[1].toString().replace(/^\D+/g, '');

      if (typeInfo[1].indexOf('.') !== -1) {
        var sizeOfsize = (typeInfo[1].match(RegExp('\\.', 'g')) || []);
        sizeOfsize = sizeOfsize.length;
        element.size = tempData.substr(0, sizeOfsize);
        tempData = tempData.substr(sizeOfsize, tempData.length);
      }

      element.value = tempData.substr(0, element.size);
      tempData = tempData.substr(element.size, tempData.length);

      delete element.format;

      switch (element.type) {
        case 'a':
          element = require('../data/a.js')(element);
          break;
        case 'an':
          element = require('../data/an.js')(element);
          break;
        case 'ans':
          break;
        case 'as':
          break;
        case 'b':
          break;
        case 'n':
          element = require('../data/n.js')(element);
          break;
        case 'ns':
          break;
        case 's':
          break;
        case 'x':
          break;
        case 'x+n':
          break;
        case 'z':
          break;
      }
    }
  });

  delete ret.bitmap.map;
  delete ret.data;

  ret.data = Object.create(null);
  ret.elements.forEach(function(element) {
    if(element.position === 1) 
    {
      ret.data.DE1 = {
        value: ret.bitmap.hexadecimal,
        valid: ret.bitmap.valid
      };
    } else {
      ret.data['DE' + element.position] = {
        value: element.value,
        valid: element.valid 
      };
    }
  });

  delete ret.elements;

  ret.bitmap = ret.bitmap.binary;
  ret.mti = ret.mti.value;

  return ret;
};