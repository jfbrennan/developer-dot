---
layout: page
title: ReportNotInitiated
number: 177
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This report has not yet been created.

## Example

```json
{
  "code": "ReportNotInitiated",
  "target": "Unknown",
  "details": [
    {
      "code": "ReportNotInitiated",
      "number": 177,
      "message": "The report -0- has not been initiated.",
      "description": "Please use /api/v2/companies/{companyId}/reports/exportdocumentline/initiate API to initiate a report task first.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ReportNotInitiated",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The ID number you specified refers to a report that has not yet been created.
