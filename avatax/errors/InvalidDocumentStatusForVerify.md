---
layout: page
title: InvalidDocumentStatusForVerify
number: 1306
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Documents can only be verified from the `Saved` or `Posted` statuses.

## Example

```json
{
  "code": "InvalidDocumentStatusForVerify",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentStatusForVerify",
      "number": 1306,
      "message": "Documents cannot be verified when in the status  '-0-'.",
      "description": "To verify a transaction, the document must be in 'Saved' or 'Posted' status.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentStatusForVerify",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Documents can only be verified from the `Saved` or `Posted` statuses.

When the verify call succeeds, the document will be moved to the `Posted` status.

If the verify call fails because the data does not match your reconciliation data, you will receive an error message indicating which data point does not match.
