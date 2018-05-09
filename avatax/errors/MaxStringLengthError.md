---
layout: page
title: MaxStringLengthError
number: 14
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The string you provided was too long for the field.

## Example

```json
{
  "code": "MaxStringLengthError",
  "target": "Unknown",
  "details": [
    {
      "code": "MaxStringLengthError",
      "number": 14,
      "message": "Field '-0-' has an invalid length.",
      "description": "Field '-0-' must be no more than -1- characters in length.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MaxStringLengthError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please check the data you provided against the developer documentation.  Some fields can only accommodate strings of a specified maximum length.
