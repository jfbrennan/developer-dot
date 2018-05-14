---
layout: page
title: InvalidFileContentType
number: 186
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The file content type could not be determined correctly.

## Example

```json
{
  "code": "InvalidFileContentType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidFileContentType",
      "number": 186,
      "message": "The batch file -0- has invalid content type",
      "description": "The batch file content type can not be null or empty string or whitespace only.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidFileContentType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please select a valid file content type for your batch.
