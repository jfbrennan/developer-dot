---
layout: page
title: ReportNotFinished
number: 179
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This report is not yet completed.

## Example

```json
{
  "code": "ReportNotFinished",
  "target": "Unknown",
  "details": [
    {
      "code": "ReportNotFinished",
      "number": 179,
      "message": "The report -0- is still in -1- status.",
      "description": "Please use the /api/v2/reports/-0- API to check status before downloading.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ReportNotFinished",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Reports are completed asynchronously.

Please call the [GetReport API](/api-reference/avatax/rest/v2/methods/Reports/GetReport/) to determine a report's status before attempting to download it.
