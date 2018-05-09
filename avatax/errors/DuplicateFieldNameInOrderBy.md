---
layout: page
title: DuplicateFieldNameInOrderBy
number: 194
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A sort or order filter criteria for this request was repeated.

## Example

```json
{
  "code": "DuplicateFieldNameInOrderBy",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateFieldNameInOrderBy",
      "number": 194,
      "message": "Duplicate field name is not allowed.",
      "description": "The field named '-0-' is duplicated.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateFieldNameInOrderBy",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A given filter clause can be used only once per request. For example, when searching for companies, using "orderby 'name', orderby 'name'" will result in this error. 

Check your filter clause for repeated filter criteria and try your API call again.
