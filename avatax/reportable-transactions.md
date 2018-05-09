---
layout: page
title: Reportable Transactions
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

When you call the [CreateTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) with `type` set to `SalesInvoice`, the transaction is saved on the [AvaTax Website](https://admin.avalara.com) as uncommitted.  The `status` of an uncommitted transaction will be either `Saved` or `Posted` - for more information, see the [DocumentStatus](/api-reference/avatax/rest/v2/models/enums/DocumentStatus/) reference page.  Uncommitted transactions are considered provisional - they are subject to review and will generally not appear in reports or liability calculations.

This means that, in order to make your transactions reportable, you must commit them.  You can do this in one of three ways:

* First, you can commit transactions directly by setting the `commit` flag to `true` when calling CreateTransaction.  This causes the transaction to be immediately committed.
* Second, you can call the [CommitTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/) to explicitly commit specific transactions.
* Third, you can visit the [AvaTax Website](https://admin.avalara.com) and commit transactions yourself.

Committing an invoice should be performed at whatever point an invoice will no longer need to be changed or modified in any way by your application.  For more information on committing transactions, please see the [Developer Guide chapter on Transactions](/avatax/dev-guide/transactions/should-i-commit).

