---
layout: page
title: TotalAmountMismatch
number: 1307
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The values in your verify call did not match the transaction.

## Example

```json
{
  "code": "TotalAmountMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "TotalAmountMismatch",
      "number": 1307,
      "message": "Mismatched total amount value.",
      "description": "The totalAmount value in your Verify call [-0-] does not match the transaction's totalAmount value [-1-].",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TotalAmountMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When you call the [VerifyTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/), AvaTax will compare the data it has on file for the transaction with the data in your [VerifyTransactionModel](/api-reference/avatax/rest/v2/models/VerifyTransactionModel/).

If any of the values do not match, you will receive an error message indicating that the transaction cannot be verified.

This error occurs when the `totalAmount` field does not match the `verifyTotalAmount` field in your API call.  

This error can indicate that the transaction should be reviewed by a supervisor prior to the order finalization step.
