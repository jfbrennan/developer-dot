---
layout: page
title: DuplicateEntry
number: 193
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The key or name already exists.

## Example

```json
{
  "code": "DuplicateEntry",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateEntry",
      "number": 193,
      "message": "The object is a duplicate of an existing object.",
      "description": "The object that you are trying to create already exists. Please check your input data.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateEntry",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Objects must be uniquely named and identified. In most cases, two objects cannot have the same code or name. Please check your object, ensure the name and code are unique, and try your API call again.
