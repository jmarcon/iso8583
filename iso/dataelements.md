# Data Elements

Data elements are the individual fields carrying the transaction information. 
There are up to 128 data elements specified in the original ISO 8583:1987 standard,
and up to 192 data elements in later releases. The 1993 revision added ne definitions, 
deleted some, while leaving the message format itself unchanged.

Each data element is described in a standard format which defines the permitted
content of the field (numeric, binary, etc.) and the field lenght (variable or fixed), 
according to the following table:

| Abbreviation   | Meaning                                     |
|----------------|---------------------------------------------|
| a              | Alpha, including blanks                     |
| n              | Numeric values                              |
| s              | Special characters only                     |
| an             | Alphanumeric                                |
| as             | Alpha and Special characters                |
| ns             | Numeric and Special characters              |
| ans            | Alphabetic, Numeric and Special characters  |
| b              | Binary data                                 |
| z              | Tracks 2 and 3 set as defined in ISO        |
| . or .. or ... | lenght indicator. Each . indicating a digit |
| x or xx or xxx | fixed lenght or maximum lenght              |

Additionally, each field may be either fixed or variable lenght.
If variable, the lenght of the field will be preceded by a lenght indicator.

| Type  | Meaning |
|-------|---------|
|Fixed  | no field length used |
| LLVAR or (..xx) | Where 0 < LL < 100, means two leading digits LL specify the field length of field VAR
| LLLVAR or (...xxx) | Where 0 < LLL < 1000, means three leading digits LLL specify the field length of field VAR
| LL and LLL are hex or ASCII. A VAR field can be compressed or ASCII depending of the data element type. | LL can be 1 or 2 bytes. For example, if compressed as one hex byte, '27x means there are 27 VAR bytes to follow. If ASCII, the two bytes '32x, '37x mean there are 27 bytes to follow. 3 digit field length LLL uses 2 bytes with a leading '0' nibble if compressed, or 3 bytes if ASCII. The format of a VAR data element depends on the data element type. If numeric it will be compressed, e.g. 87456 will be represented by 3 hex bytes '087456x. If ASCII then one byte for each digit or character is used, e.g. '38x, '37x, '34x, '35x, '36x. |

## ISO Data Elements

| Field | Type         | Usage                                                   |
|-------|--------------|---------------------------------------------------------|
| 1     | b 64         | Bit map (b 128 if secondary is present and b 192 if tertiary is present) 
| 2     | n ..19       | Primary account number (PAN) 
| 3     | n 6          | Processing code 
| 4     | n 12         | Amount, transaction
| 5     | n 12         | Amount, settlement
| 6     | n 12         | Amount, cardholder billing
| 7     | n 10         | Transmission date & time
| 8     | n 8          | Amount, cardholder billing fee
| 9     | n 8          | Conversion rate, settlement
| 10    | n 8          | Conversion rate, cardholder billing
| 11    | n 6          | System trace audit number (STAN)
| 12    | n 6          | Time, local transaction (hhmmss)
| 13    | n 4          | Date, local transaction (MMDD)
| 14    | n 4          | Date, expiration
| 15    | n 4          | Date, settlement
| 16    | n 4          | Date, conversion
| 17    | n 4          | Date, capture
| 18    | n 4          | Merchant type
| 19    | n 3          | Acquiring institution country code
| 20    | n 3          | PAN extended, country code
| 21    | n 3          | Forwarding institution. country code
| 22    | n 3          | Point of service entry mode
| 23    | n 3          | Application PAN sequence number
| 24    | n 3          | Function code (ISO 8583:1993)/Network International identifier (NII)
| 25    | n 2          | Point of service condition code
| 26    | n 2          | Point of service capture code
| 27    | n 1          | Authorizing identification response length
| 28    | x+n 8        | Amount, transaction fee
| 29    | x+n 8        | Amount, settlement fee
| 30    | x+n 8        | Amount, transaction processing fee
| 31    | x+n 8        | Amount, settlement processing fee
| 32    | n ..11       | Acquiring institution identification code
| 33    | n ..11       | Forwarding institution identification code
| 34    | ns ..28      | Primary account number, extended
| 35    | z ..37       | Track 2 data
| 36    | n ...104     | Track 3 data
| 37    | an 12        | Retrieval reference number
| 38    | an 6         | Authorization identification response
| 39    | an 2         | Response code
| 40    | an 3         | Service restriction code
| 41    | ans 8        | Card acceptor terminal identification
| 42    | ans 15       | Card acceptor identification code
| 43    | ans 40       | Card acceptor name/location (1-23 address 24-36 city 37-38 state 39-40 country)
| 44    | an ..25      | Additional response data
| 45    | an ..76      | Track 1 data
| 46    | an ...999    | Additional data - ISO
| 47    | an ...999    | Additional data - national
| 48    | an ...999    | Additional data - private
| 49    | a or n 3     | Currency code, transaction
| 50    | a or n 3     | Currency code, settlement
| 51    | a or n 3     | Currency code, cardholder billing
| 52    | b 64         | Personal identification number data
| 53    | n 16         | Security related control information
| 54    | an ...120    | Additional amounts
| 55    | ans ...999   | Reserved ISO
| 56    | ans ...999   | Reserved ISO
| 57    | ans ...999   | Reserved national
| 58    | ans ...999   | Reserved national
| 59    | ans ...999   | Reserved national
| 60    | ans ...999   | Reserved national
| 61    | ans ...999   | Reserved private
| 62    | ans ...999   | Reserved private
| 63    | ans ...999   | Reserved private
| 64    | b 16         | Message authentication code (MAC)
| 65    | b 1          | Bitmap, extended
| 66    | n 1          | Settlement code
| 67    | n 2          | Extended payment code
| 68    | n 3          | Receiving institution country code
| 69    | n 3          | Settlement institution country code
| 70    | n 3          | Network management information code
| 71    | n 4          | Message number
| 72    | n 4          | Message number, last
| 73    | n 6          | Date, action (YYMMDD)
| 74    | n 10         | Credits, number
| 75    | n 10         | Credits, reversal number
| 76    | n 10         | Debits, number
| 77    | n 10         | Debits, reversal number
| 78    | n 10         | Transfer number
| 79    | n 10         | Transfer, reversal number
| 80    | n 10         | Inquiries number
| 81    | n 10         | Authorizations, number
| 82    | n 12         | Credits, processing fee amount
| 83    | n 12         | Credits, transaction fee amount
| 84    | n 12         | Debits, processing fee amount
| 85    | n 12         | Debits, transaction fee amount
| 86    | n 16         | Credits, amount
| 87    | n 16         | Credits, reversal amount
| 88    | n 16         | Debits, amount
| 89    | n 16         | Debits, reversal amount
| 90    | n 42         | Original data elements
| 91    | an 1         | File update code
| 92    | an 2         | File security code
| 93    | an 5         | Response indicator
| 94    | an 7         | Service indicator
| 95    | an 42        | Replacement amounts
| 96    | b 64         | Message security code
| 97    | x+n 16       | Amount, net settlement
| 98    | ans 25       | Payee
| 99    | n ..11       | Settlement institution identification code
| 100   | n ..11       | Receiving institution identification code
| 101   | ans ..17     | File name
| 102   | ans ..28     | Account identification 1
| 103   | ans ..28     | Account identification 2
| 104   | ans ...100   | Transaction description
| 105   | ans ...999   | Reserved for ISO use
| 106   | ans ...999   | Reserved for ISO use
| 107   | ans ...999   | Reserved for ISO use
| 108   | ans ...999   | Reserved for ISO use
| 109   | ans ...999   | Reserved for ISO use
| 110   | ans ...999   | Reserved for ISO use
| 111   | ans ...999   | Reserved for ISO use
| 112   | ans ...999   | Reserved for national use
| 113   | ans ...999   | Reserved for national use
| 114   | ans ...999   | Reserved for national use
| 115   | ans ...999   | Reserved for national use
| 116   | ans ...999   | Reserved for national use
| 117   | ans ...999   | Reserved for national use
| 118   | ans ...999   | Reserved for national use
| 119   | ans ...999   | Reserved for national use
| 120   | ans ...999   | Reserved for private use
| 121   | ans ...999   | Reserved for private use
| 122   | ans ...999   | Reserved for private use
| 123   | ans ...999   | Reserved for private use
| 124   | ans ...999   | Reserved for private use
| 125   | ans ...999   | Reserved for private use
| 126   | ans ...999   | Reserved for private use
| 127   | ans ...999   | Reserved for private use
| 128   | b 64         | Message authentication code