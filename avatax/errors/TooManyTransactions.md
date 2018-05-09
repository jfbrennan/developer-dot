---
layout: page
title: TooManyTransactions
number: 1301
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The MultiDocument transaction you attempted to create is too complex.

## Example

```json
{
  "code": "TooManyTransactions",
  "target": "Unknown",
  "details": [
    {
      "code": "TooManyTransactions",
      "number": 1301,
      "message": "This multi-document transaction is too large.",
      "description": "Your transaction contained -0- different combinations of company and location.  The maximum number of different combinations allowed is -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TooManyTransactions",
      "severity": "Error"
    }
  ]
}
```

## Explanation

MultiDocument transactions can contain more than one seller and buyer.  When you call the MultiDocument API suite, AvaTax will break it up into separate component transactions so that each one can be correctly calculated and reported on a tax filing.

If your MultiDocument transaction contains more than a specified number of sellers and buyers, this error message will inform you that the transaction is too complex and must be broken up into a smaller MultiDocument transaction or individual transactions.
