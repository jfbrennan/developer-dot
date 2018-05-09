---
layout: page
title: TransactionAlreadyExists
number: 1303
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This transaction already exists and cannot be overwritten.

## Example

```json
{
  "code": "TransactionAlreadyExists",
  "target": "Unknown",
  "details": [
    {
      "code": "TransactionAlreadyExists",
      "number": 1303,
      "message": "A transaction with this code and type already exists.",
      "description": "To create a new transaction, please choose a new 'code'.  To adjust the existing transaction, please set allowAdjust to true.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TransactionAlreadyExists",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Transactions are uniquely identified by their company, transaction code, and transaction type.

To create a new transaction, please choose a new company, transaction code, or transaction type.
