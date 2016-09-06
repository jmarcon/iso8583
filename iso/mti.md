# Message Type Indicator

This is a 4 digit numeric field wich classifies the high level function of the message.

'''
  0xxx --> version of ISO 8583
  x1xx --> class of the Message (for example: Authorization Message)
  xx1x --> function of the Message (for example: Request Response)
  xxx0 --> who began
'''

### Version

| code | Version                   |
|------|---------------------------|
| 0xxx | ISO 8583: 1987 version    |
| 1xxx | ISO 8583: 1993 version    |
| 2xxx | Reserved for ISO use      |
| 3xxx | Reserved for ISO use      |
| 4xxx | Reserved for ISO use      |
| 5xxx | Reserved for ISO use      |
| 6xxx | Reserved for ISO use      |
| 7xxx | Reserved for ISO use      |
| 8xxx | Reserved for National use |
| 9xxx | Reserved for National use |

## Message class

Position two of the MTI specifies the overall purpose of the message

| code | Description                      | Usage                                                                           |
|------|----------------------------------|---------------------------------------------------------------------------------|
| x0xx | Reserved by ISO                  |                                                                                 |
| x1xx | Authorization message            | Determine funds, approvals but do not post , etc.                               |
| x2xx | Financial message                | Get approval and post to account.                                               |
| x3xx | File Action Message              | Used to hot-card, TMS and others.                                               |
| x4xx | Reversal and Chargeback Message  | Reversal: Reverse prevously auth - Chargeback: Charges back previously cleared. |
| x5xx | Reconciliation Message           | Transmits settlement information.                                               |
| x6xx | Administrative Message           | Transmits administrative advice ou failure messages.                            |
| x7xx | Fee Collection Message           |                                                                                 |
| x8xx | Network Management Message       | Secure key, logon, echo test and other network functions                        |
| x9xx | Reserved by ISO                  |                                                                                 |

## Message function

Determine how the message should flow within system.

| code | Description                              |
|------|------------------------------------------|
| xx0x | Request                                  |
| xx1x | Request response                         |
| xx2x | Advice                                   |
| xx3x | Advice response                          |
| xx4x | Notification                             |
| xx5x | Notification response                    |
| xx6x | Instruction (ISO 8583:2003 only)         |
| xx7x | In Acknowledgement (ISO 8583:2003 only)  |
| xx8x | Reserved for ISO use.                    |
| xx9x | Reserved for ISO use.                    |

## Message origin

Define the location of the message source within the payment chain.

| code | Description      |
|------|------------------|
| xxx0 | Acquirer         |
| xxx1 | Acquirer Repeat  |
| xxx2 | Issuer           |
| xxx3 | Isuer Repeat     |
| xxx4 | Other            |
| xxx5 | Other Repeat     |

