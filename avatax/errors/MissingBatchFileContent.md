---
layout: page
title: MissingBatchFileContent
number: 207
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The batch object must contain a file to be processed.

## Example

```json
{
  "code": "MissingBatchFileContent",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingBatchFileContent",
      "number": 207,
      "message": "Batch file content was missing.",
      "description": "The batch file -0- must contain a file with non-empty contents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingBatchFileContent",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A batch object must have a file to be created.
