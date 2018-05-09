---
layout: page
title: MultiDocumentPartiallyLocked
number: 1312
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A MultiDocument was partially locked for reporting.

## Example

```json
{
  "code": "MultiDocumentPartiallyLocked",
  "target": "Unknown",
  "details": [
    {
      "code": "MultiDocumentPartiallyLocked",
      "number": 1312,
      "message": "This MultiDocument is locked and cannot be modified.",
      "description": "Parts of this MultiDocument have been filed on a tax return.  The MultiDocument object may no longer be modified.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MultiDocumentPartiallyLocked",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A MultiDocument transaction involves more than two companies.  Most tax authorities recognize only transactions between two companies (a seller and a buyer).  This means that a multi-company transaction must be reported as more than one transaction.

When any part of a MultiDocument transaction has been reported to a tax authority, the MultiDocument transaction can no longer be modified.  This error message tells you that part of your MultiDocument transaction has been locked; you must now treat each separate seller/buyer transaction individually.
