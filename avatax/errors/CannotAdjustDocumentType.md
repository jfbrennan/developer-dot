---
layout: page
title: CannotAdjustDocumentType
number: 195
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The document type is an immutable property.

## Example

```json
{
  "code": "CannotAdjustDocumentType",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotAdjustDocumentType",
      "number": 195,
      "message": "Adjusting the document type is not allowed.",
      "description": "Document type cannot be changed from -0- to -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotAdjustDocumentType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Document type is a permanent property of the document object. This cannot be adjusted. If you wish to change the document type, void the existing document and create a new document.
