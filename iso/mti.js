// Message Type Identifier
module.exports = function (mti) {
  'use strict';
  var ret = Object.create(null);
 
  var match = /^\d{4}$/;
  if (
      mti === undefined ||
      mti.length !== 4 ||
      !match.test(mti)
  ) { ret.valid = false; return ret; }

  ret.value = mti;
  ret.valid = true;

  // Version
  var versionTable = {
    '0' : '1987',
    '1' : '1993',
    '2' : 'ReservedISO',
    '3' : 'ReservedISO',
    '4' : 'ReservedISO',
    '5' : 'ReservedISO',
    '6' : 'ReservedISO',
    '7' : 'ReservedISO',
    '8' : 'National',
    '9' : 'National'
  };

  ret.version = {
    value: mti.substr(0,1),
    definition: versionTable[mti.substr(0,1)]
  };

  // Class
  var classTable = {
    '0' : 'ReservedISO',
    '1' : 'Authorization',
    '2' : 'Financial',
    '3' : 'FileActions',
    '4' : 'Reversal',
    '5' : 'Reconciliation',
    '6' : 'Administrative',
    '7' : 'FeeCollection',
    '8' : 'Network',
    '9' : 'ReservedISO'
  };

  ret.class = {
    value: mti.substr(1,1),
    definition: classTable[mti.substr(1,1)]
  };
  
  //functions
  var funcTable = {
    '0' : 'Request',
    '1' : 'RequestResponse',
    '2' : 'Advice',
    '3' : 'AdviceResponse',
    '4' : 'Notification',
    '5' : 'NotificationAcknowledgement',
    '6' : 'Instruction',
    '7' : 'InstructionAcknowledgement',
    '8' : 'ReservedISO-Response',
    '9' : 'ReservedISO-Negative'
  };

  ret.func = {
    value: mti.substr(2,1),
    definition: funcTable[mti.substr(2,1)]
  };

  //Origin
  var originTable = {
    '0' : 'Acquirer',
    '1' : 'AcquirerRepeat',
    '2' : 'Issuer',
    '3' : 'IssuerRepeat',
    '4' : 'Other',
    '5' : 'OtherRepeat',
    '6' : 'ReservedISO',
    '7' : 'ReservedISO',
    '8' : 'ReservedISO',
    '9' : 'ReservedISO'
  };

  ret.origin = {
    value: mti.substr(3,1),
    definition: originTable[mti.substr(3,1)]
  };

  return ret;
};

