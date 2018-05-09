---
layout: page
title: InvalidDocumentType
number: 1310
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A document could not be found with the specified type.

## Example

```json
{
  "code": "InvalidDocumentType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentType",
      "number": 1310,
      "message": "Document '-0-' type is '-1-', not expected '-2-'.",
      "description": "To commit or verify a transaction, document type has to match with that in the request.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Transactions are identified by their company, their code, and their type.

To match a transaction, you must specify all three items.

If a transaction cannot be found matching all three items, this error will be returned.
