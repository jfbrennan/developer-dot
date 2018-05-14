---
layout: page
title: DateMismatch
number: 1305
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The values in your verify call did not match the transaction.

## Example

```json
{
  "code": "DateMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "DateMismatch",
      "number": 1305,
      "message": "Mismatch between verify transaction date and the document date.",
      "description": "The date value in your Verify call [-0-] does not match the transaction's date value [-1-].",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DateMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When you call the [VerifyTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/), AvaTax will compare the data it has on file for the transaction with the data in your [VerifyTransactionModel](/api-reference/avatax/rest/v2/models/VerifyTransactionModel/).

If any of the values do not match, you will receive an error message indicating that the transaction cannot be verified.

This error occurs when the `date` field does not match the `verifyTransactionDate` field in your API call.  

This error can indicate that the transaction should be reviewed by a supervisor prior to the order finalization step.
