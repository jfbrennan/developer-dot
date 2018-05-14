---
layout: page
title: NoLinesDiscounted
number: 190
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to specify a discount, but did not identify any lines to discount.

## Example

```json
{
  "code": "NoLinesDiscounted",
  "target": "Unknown",
  "details": [
    {
      "code": "NoLinesDiscounted",
      "number": 190,
      "message": "Transaction has no lines which are discounted.",
      "description": "The CreateTransactionModel object with discount amount set must have at least one line which is discounted.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NoLinesDiscounted",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The [CreateTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction) allows you to specify a discount for a transaction.  When you specify a `discount` field on your [CreateTransactionModel](/api-reference/avatax/rest/v2/models/CreateTransactionModel/), you must also specify the field `discounted = true` on each [LineItemModel](/api-reference/avatax/rest/v2/models/LineItemModel/) you wish to discount.

This behavior is explained in the [AvaTax Developer Guide chapter on Customizing Transactions](/avatax/dev-guide/customizing-transaction) chapter.

To fix this error, choose one or more lines within your transaction and set the `discounted = true` value on each line you wish to discount.
