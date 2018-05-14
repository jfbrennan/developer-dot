---
layout: page
title: CriteriaNotSupportedError
number: 184
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your `$filter` parameter contains criteria that are not supported.

## Example

```json
{
  "code": "CriteriaNotSupportedError",
  "target": "Unknown",
  "details": [
    {
      "code": "CriteriaNotSupportedError",
      "number": 184,
      "message": "The filter criteria is not supported",
      "description": "The filter contained an expression that is not supported for filtering. -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CriteriaNotSupportedError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

If you receive this error message, please review your `$filter` parameter and look at the features listed in the [Filtering in REST](/avatax/filtering-in-rest/) page.  

The AvaTax API permits you to specify complex filters with many different criteria.  Not all objects support all types of fetch criteria.  You can consider simplifying your query, or using alternative criteria.
