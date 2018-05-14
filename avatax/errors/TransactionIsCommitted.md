---
layout: page
title: TransactionIsCommitted
number: 1313
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This API can only modify transactions that are not yet committed.

## Example

```json
{
  "code": "TransactionIsCommitted",
  "target": "Unknown",
  "details": [
    {
      "code": "TransactionIsCommitted",
      "number": 1313,
      "message": "Committed transactions cannot be modified by this API.",
      "description": "Committed transactions may be modified by calling AdjustTransaction or VoidTransaction.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TransactionIsCommitted",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This API can only modify transactions that are not yet committed.

To commit a transaction, please use the [CommitTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/).
