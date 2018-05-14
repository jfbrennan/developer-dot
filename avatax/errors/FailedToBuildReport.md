---
layout: page
title: FailedToBuildReport
number: 178
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The report request you submitted could not be processed.

## Example

```json
{
  "code": "FailedToBuildReport",
  "target": "Unknown",
  "details": [
    {
      "code": "FailedToBuildReport",
      "number": 178,
      "message": "Failed to process the report request -0-. Please correct errors and initiate the request again.",
      "description": "-1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FailedToBuildReport",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please review your report request and identify whether some of the criteria in the report should be updated.
