---
layout: page
title: ExpectedConjunctionError
number: 183
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The `$filter` criteria in your API request was missing a conjunction.

## Example

```json
{
  "code": "ExpectedConjunctionError",
  "target": "Unknown",
  "details": [
    {
      "code": "ExpectedConjunctionError",
      "number": 183,
      "message": "The filter was missing a conjunction",
      "description": "Use one of the conjunctions 'AND', 'OR' to join filter clauses",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ExpectedConjunctionError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

If you receive this error message, please review your `$filter` parameter and look at the features listed in the [Filtering in REST](/avatax/filtering-in-rest/) page.  

This error indicates that you had two clauses that did not contain a conjunction such as `AND` or `OR` indicating how they relate to each other.

An example that would trigger this error message is this:

```
GET /api/v2/companies?$filter=companyCode eq 'DEFAULT' name eq 'Bob''s Artisan Pottery'
```

To fix it, please add the word `AND` or `OR` between the first filter criteria and the second one:

```
GET /api/v2/companies?$filter=companyCode eq 'DEFAULT' AND name eq 'Bob''s Artisan Pottery'
```
