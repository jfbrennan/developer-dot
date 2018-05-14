---
layout: post
title: Florida Split Tax Feature for Discretionary SurTax
date: 2018-04-16 17:00
author: John Horsley
comments: true
categories: [avatax, taxrules]
product: blog
doctype: blog
disqus: 1
---

<h2>Struggling with the Florida Discretionary Sales Tax over your multiple invoices? AvaTax can help!</h2>

We all know tax is complicated, but when you add in the Florida Discretionary Sales Surtax, it becomes even more complex. Add in needing to have this surtax split over multiple invoices and you’ve got a real headache on your hands. Let us help you with that!

With AvaTax Florida Split Tax Feature, you can utilize the `purchaseOrderNo` field to accomplish this. To make this work you will need to import a set of custom rules into your account that allows this logic to work. If you need assistance importing the rule template into your admin console, please see our help document on <a href="https://help.avalara.com/000_Avalara_AvaTax/Add_or_Import_Custom_Tax_Rules" target="_blank">importing Custom Tax Rules</a>
<a name="template"></a>
<h4><a href="/public/data/Rules-FL-DocLevelCap-PONumber.xls" target="_blank">Download Rule Template</a></h4>

First let's go over three scenario's in which you would want the Florida SurTax to be calculated. If you just want to jump to the section on how to split the tax amongst two invoices, jump to <a href="#scenario3">scenario 3</a>.

<h3>Scenario 1</h3>

$5,000 County SurTax kicks in on a single transaction with multiple line items as shown below (if the sum amount of all items are more than $5,000)

Invoice 1:
<table border="1">
	<tr bgcolor="c2c3c4">
		<th text-align="left">Line No</th>
		<th text-align="left">Item</th>
		<th text-align="left">Quantity</th>
		<th text-align="left">Amount</th>
		<th text-align="left">Taxable</th>
		<th text-align="left">Nontaxable</th>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line1</td>
		<td>Refrigerator</td>
		<td>1</td>
		<td>6000</td>
		<td>5000</td>
		<td>1000</td>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line2</td>
		<td>Refrigerator</td>
		<td>1</td>
		<td>6000</td>
		<td>0</td>
		<td>6000</td>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line3</td>
		<td>Refrigerator</td>
		<td>1</td>
		<td>6000</td>
		<td>0</td>
		<td>6000</td>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line4</td>
		<td>Range</td>
		<td>1</td>
		<td>4000</td>
		<td>4000</td>
		<td>0</td>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line4</td>
		<td>Range</td>
		<td>1</td>
		<td>4000</td>
		<td>1000</td>
		<td>3000</td>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line4</td>
		<td>Range</td>
		<td>1</td>
		<td>4000</td>
		<td>0</td>
		<td>4000</td>
	</tr>
</table>

<h3>Scenario 2 </h3>

$5000 County Surtax kicks in on a single transaction with a single line item that is more than the $5000 amount

<table border="1">
	<tr bgcolor="c2c3c4">
		<th text-align="left">Line No</th>
		<th text-align="left">Item</th>
		<th text-align="left">Quantity</th>
		<th text-align="left">Amount</th>
		<th text-align="left">Taxable</th>
		<th text-align="left">Nontaxable</th>
	</tr>
	<tr bgcolor="e3e4e5">
		<td>Line1</td>
		<td>Refrigerator</td>
		<td>1</td>
		<td>6000</td>
		<td>5000</td>
		<td>1000</td>
	</tr>
</table>
<a name="scenario3"></a>

<h3>Scenario 3</h3>

$5000 Country SurTax kicks in on first invoice and continues over to second invoice with the same `customercode`, `purchaseOrderNo`, `taxCode` and in the same taxing county.

Invoice 1 issued against `purchaseOrderNo` "SurTaxTEST"

```json
{
    "lines": [
        {
            "number": "1",
            "quantity": 1,
            "amount": 5000,
            "taxCode": "TAXCODE",
            "itemCode": "SAMPLE",
            "description": "SAMPLE"
        }
    ],
    "type": "SalesInvoice",
    "companyCode": "DEFAULT",
    "code": "Invoice01",
    "date": "2018-03-01",
    "customerCode": "FL-SurTax-Customer-Test",
    "purchaseOrderNo": "SurTaxTEST",
    "addresses": {
        "singleLocation": {
            "line1": "2200 NW 72ND AVE STOP 3",
            "city": "Miami",
            "region": "FL",
            "country": "US",
            "postalCode": "33152"
        }
    },
    "commit": true,
    "currencyCode": "USD",
    "description": "STUFF"
}
```

With this you get a tax break out of:

State Tax (6% x $5,000) = $300

County Tax (0.5% x 5,000) = $25

Total Item $5,000

Total Tax $325

Invoice 2 issued against `purchaseOrderNo` "SurTaxTEST"

```json
{
    "lines": [
        {
            "number": "1",
            "quantity": 1,
            "amount": 1000,
            "taxCode": "TAXCODE",
            "itemCode": "SAMPLE",
            "description": "SAMPLE"
        }
    ],
    "type": "SalesInvoice",
    "companyCode": "DEFAULT",
    "code": "Invoice02",
    "date": "2018-03-01",
    "customerCode": "FL-SurTax-Customer-Test",
    "purchaseOrderNo": "SurTaxTEST",
    "addresses": {
        "singleLocation": {
            "line1": "2200 NW 72ND AVE STOP 3",
            "city": "Miami",
            "region": "FL",
            "country": "US",
            "postalCode": "33152"
        }
    },
    "commit": true,
    "currencyCode": "USD",
    "description": "STUFF"
}
```

With this you get a tax break out of:

State Tax (6% x $1,000) = $60

County Tax (0.5% x $0) = $0

Total Item $1,000

Total Tax $60

As you can see the Country level discretionary surtax was not applied to the second invoice because the `customercode`, `purchaseOrderNo`, `taxCode` were all the same and it was in the same taxing county as the first invoice. 

Remember, to make this work on your account you will need to import in the custom rules mentioned <a href="#template">above</a>. 