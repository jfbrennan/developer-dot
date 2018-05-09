---
layout: page
title: UnknownConjunctionError
number: 189
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to use an invalid conjunction in your filter.

## Example

```json
{
  "code": "UnknownConjunctionError",
  "target": "Unknown",
  "details": [
    {
      "code": "UnknownConjunctionError",
      "number": 189,
      "message": "The filter has no conjunction.",
      "description": "Found -0- in -1- instead of a conjunction. Use one of the conjunctions 'AND' or 'OR' to join the filter clauses",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnknownConjunctionError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The `$filter` parameter permits a variety of complex rules and criteria in order to help you search for the object you wish to find.

You can join multiple criteria together with conjunctions.  Avalara supports the "AND" and "OR" conjunctions.  Any other conjunction would produce this error.

To fix this error, please review your `$filter` parameter and ensure that all criteria are joined by the use of the AND or OR conjunctions.

Please see [Filtering in REST](https://developer.avalara.com/avatax/filtering-in-rest) for more information about filtering.
