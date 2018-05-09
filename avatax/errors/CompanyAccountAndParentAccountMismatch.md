---
layout: page
title: CompanyAccountAndParentAccountMismatch
number: 185
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This operation is not permitted in technical support.

## Example

```json
{
  "code": "CompanyAccountAndParentAccountMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "CompanyAccountAndParentAccountMismatch",
      "number": 185,
      "message": "Company and Parent accountId does not match.",
      "description": "The Account Id -0- that is being used to create the company does not match the Account Id -1- of the parent company in the request.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CompanyAccountAndParentAccountMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Technical support specific error message.

This error occurs when an Avalara technical support user is helping a customer move their company from one account to another.
