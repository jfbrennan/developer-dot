---
layout: page
title: MalformedFilterException
number: 182
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The `$filter` parameter could not be parsed.

## Example

```json
{
  "code": "MalformedFilterException",
  "target": "Unknown",
  "details": [
    {
      "code": "MalformedFilterException",
      "number": 182,
      "message": "Filter is malformed.",
      "description": "The filter is invalid: -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MalformedFilterException",
      "severity": "Error"
    }
  ]
}
```

## Explanation

If you receive this error message, please review your `$filter` parameter and look at the features listed in the [Filtering in REST](/avatax/filtering-in-rest/) page.  

The AvaTax API permits you to specify complex filters, but the filter must be constructed carefully.  Please review your filter and search for a valid filter clause.
