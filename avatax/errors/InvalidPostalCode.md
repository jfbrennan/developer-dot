---
layout: page
title: InvalidPostalCode
number: 318
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The postal code you provided could not be found.

## Example

```json
{
  "code": "InvalidPostalCode",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidPostalCode",
      "number": 318,
      "message": "The postal code is invalid: -0-.",
      "description": "You have attempted to get the tax rates for an invalid postal code -0-. Please provide a valid postal code.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidPostalCode",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The AvaTax [TaxRatesByPostalCode API](/api-reference/avatax/rest/v2/methods/Free/TaxRatesByPostalCode/) keeps track of tax rates for all known postal codes (also known as Zip Codes) in the United States.

Your API call provided a postal code that was not recognized.

Please check your postal code.
