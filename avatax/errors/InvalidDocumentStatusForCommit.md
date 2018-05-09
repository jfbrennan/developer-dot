---
layout: page
title: InvalidDocumentStatusForCommit
number: 1309
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Documents can only be committed from the `Saved` or `Posted` statuses.

## Example

```json
{
  "code": "InvalidDocumentStatusForCommit",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentStatusForCommit",
      "number": 1309,
      "message": "Documents cannot be committed in the status '-0-'.",
      "description": "To commit a transaction, the document must be in 'Saved' or 'Posted' status.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentStatusForCommit",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A document can only be committed from the `Saved` or `Posted` statuses.  

Documents in any other status cannot be committed.
