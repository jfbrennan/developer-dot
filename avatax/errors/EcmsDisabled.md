---
layout: page
title: EcmsDisabled
number: 188
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The ECMS configuration value for this account does not permit exemption certificates.

## Example

```json
{
  "code": "EcmsDisabled",
  "target": "Unknown",
  "details": [
    {
      "code": "EcmsDisabled",
      "number": 188,
      "message": "Ecms is not enabled for this account.",
      "description": "EcmsEnabled for AccountId -0- needs to be set in order to create an Ecms certificate.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/EcmsDisabled",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This account does not permit exemption certificates.  To change this value, call the [GetAccountConfiguration API](/api-reference/avatax/rest/v2/methods/Accounts/GetAccountConfiguration/) to retrieve your current account settings.

When you have decided on changes, call the [SetAccountConfiguration API](/api-reference/avatax/rest/v2/methods/Accounts/SetAccountConfiguration/) to enable the ECMS feature.
