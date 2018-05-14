---
layout: page
title: Finding your CompanyId
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

Some AvaTax APIs require the use of a `companyId` to refer to a particular company.  All company objects in AvaTax have both a `companyCode` and a `companyId` value.

* `companyCode` is intended to be a name you can customize to match the name of your company in your accounting system.
* `companyId` is a globally unique ID number that refers to your company within AvaTax.

It's also worth knowing that your account has a "default" company.  That company record has the field `isDefault` set to true; every account must have one default company in order to work.

The easiest way to locate your CompanyId is by calling the [QueryCompanies API](/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/).  You could fetch your default company object using this request:

```json
GET /api/v2/companies?$filter=isDefault eq true
```

You can create new companies anytime by using the convenient quick startup [CompanyInitialize API](/api-reference/avatax/rest/v2/methods/Companies/CompanyInitialize/).  This API is designed to provide a quick-start for a simple company object that has one physical point of presence, one contact, and a basic tax profile.

If you would like to configure a company with more control, please visit the [AvaTax Website](https://admin.avalara.com) or use the full [CreateCompanies API](/api-reference/avatax/rest/v2/methods/Companies/CreateCompanies/).