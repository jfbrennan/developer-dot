---
layout: page
title: MustUseCreateTransaction
number: 800
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The free tax rates API applies only to transactions within the United States.

## Example

```json
{
  "code": "MustUseCreateTransaction",
  "target": "Unknown",
  "details": [
    {
      "code": "MustUseCreateTransaction",
      "number": 800,
      "message": "Use CreateTransaction() to calculate tax in country '-0-'.",
      "description": "The free TaxRates API is for use in the US only. Please use CreateTransaction() for tax rates in countries other than the US.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MustUseCreateTransaction",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For tax rates in countries other than the United States, CreateTransaction() must be used. You can find the documentation for the CreateTransaction API here: https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/
