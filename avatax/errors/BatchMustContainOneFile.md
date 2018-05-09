---
layout: page
title: BatchMustContainOneFile
number: 206
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This batch object must contain only one file.

## Example

```json
{
  "code": "BatchMustContainOneFile",
  "target": "Unknown",
  "details": [
    {
      "code": "BatchMustContainOneFile",
      "number": 206,
      "message": "A batch must contain one input file.",
      "description": "The batch you uploaded had -0- input files.  Batches may have only one input file.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BatchMustContainOneFile",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A [Batch](/api-reference/avatax/rest/v2/models/BatchModel/) object is a file that contains a list of objects being created.

It must have one file, and that file may have no more than 100,000 rows in it.
