---
layout: page
title: RefundLinesRequired
number: 704
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your RefundTransaction API call was missing necessary information.

## Example

```json
{
  "code": "RefundLinesRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "RefundLinesRequired",
      "number": 704,
      "message": "For Partial refund, refund lines cannot be null",
      "description": "For refund type -0-, refund lines should be specified",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RefundLinesRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The [RefundTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/) allows you to specify the type of refund.  You can refund an entire transaction, a partial transaction, or a percentage based refund.

If you specify a partial refund, you are required to specify the lines that are being refunded.

This error message occurs when you specify `refundType = Partial` on your [RefundTransactionModel](/api-reference/avatax/rest/v2/models/RefundTransactionModel/), but `refundLines = null`.

To fix this error, set the `refundLines` parameter to a non-null value.
