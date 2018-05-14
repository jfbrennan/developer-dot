---
layout: page
title: AccountNotProvisioned
number: 1216
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The automatic provisioning process for exemption certificates failed.

## Example

```json
{
  "code": "AccountNotProvisioned",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountNotProvisioned",
      "number": 1216,
      "message": "AvaTax account -0- is not provisioned successfully.",
      "description": "Automatic provisioning for this account failed, and this error has been automatically reported to Avalara for review.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountNotProvisioned",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error message indicates that the automatic provisioning process for exemption certificates failed.  This error has been automatically reported to Avalara for review.  

No action is required.
