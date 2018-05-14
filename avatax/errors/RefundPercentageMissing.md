---
layout: page
title: RefundPercentageMissing
number: 709
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a refund type of percentage, but did not specify the percentage.

## Example

```json
{
  "code": "RefundPercentageMissing",
  "target": "Unknown",
  "details": [
    {
      "code": "RefundPercentageMissing",
      "number": 709,
      "message": "Refund percentage is required for 'Percentage' refund type.",
      "description": "For 'Percentage' refund type, you must specify refund percentage value.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RefundPercentageMissing",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please check your API call and provide a percentage.
