---
layout: page
title: FailedToDelete
number: 191
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to delete an object that was in use.

## Example

```json
{
  "code": "FailedToDelete",
  "target": "Unknown",
  "details": [
    {
      "code": "FailedToDelete",
      "number": 191,
      "message": "Failed to delete.",
      "description": "Failed to delete as this is being referenced by an existing -0-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FailedToDelete",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error message indicates that you attempted to delete an object that is currently active and being referenced by another object.

To fix this error, you must remove this object from use or wait to call delete until it is no longer in use.
