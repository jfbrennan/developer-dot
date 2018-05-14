---
layout: page
title: CircularCompanyHierarchies
number: 192
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Creating this company as submitted would result in a circular hierarchical reference.

## Example

```json
{
  "code": "CircularCompanyHierarchies",
  "target": "Unknown",
  "details": [
    {
      "code": "CircularCompanyHierarchies",
      "number": 192,
      "message": "Circular parent/child company relationships are not allowed.",
      "description": "The company -0- has circular hierarchy on its creation chain.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CircularCompanyHierarchies",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

The company as submitted would result in a parent company being the child of itself, or a child company being the parent of itself.

Please change the parent ID and resubmit your request.
