---
layout: page
title: FailedToUploadReport
number: 180
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A server error prevented the report file from being uploaded.

## Example

```json
{
  "code": "FailedToUploadReport",
  "target": "Unknown",
  "details": [
    {
      "code": "FailedToUploadReport",
      "number": 180,
      "message": "Failed to upload the report file -0-.",
      "description": "-1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FailedToUploadReport",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A server error has occurred that caused the file for the report to fail to be created.

This issue has been automatically reported to the Avalara service reliability engineering team.  No further action is required.
