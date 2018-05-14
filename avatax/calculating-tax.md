---
layout: page
title: Calculating Tax
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
Getting a tax calculation is the primary reason developers use the Avalara AvaTax Service. Whether you are just looking to get a tax rate to populate into a database or application field, or you need to utilize all of the reporting and filing functionality that AvaTax offers, GetTax is the starting point.

The request for this method consists of sales document attributes, like date, customer id, addresses, and line items. Please see the <a href="/api-reference/avatax/rest/v2/">API reference</a> for a full listing of the available operations and attributes.
<h3><a name="Items"></a>ItemCode, Description, and TaxCode</h3>
On the document lines that you will pass to us in the GetTaxRequest, there are a few properties that allow you to identify your products or product categories - ItemCode, Description, and TaxCode.

<strong>ItemCode</strong> is typically a SKU or other product ID, and usually represents individual products or services.

The <strong>Line Description</strong> is a string that will elaborate more details about the product, such as name, color, size, etc.
<blockquote><strong>Note:</strong> If you are working within the constraints of the <strong>Streamlined Sales Tax (SST)</strong> program, you are required to provide both an ItemCode and Description for each product line on your orders. As such, we consider this to be the <strong>best practice</strong> for all clients, including those not currently participating in SST.</blockquote>
The other product property you need to make note of on document lines is <strong>TaxCode</strong>. Subscribers to our Pro service are able to utilize our Compliance team's tax rule research by mapping <a href="https://developer.avalara.com/avatax/dev-guide/product-taxability/mapping-items-to-tax-code">AvaTax System Tax Codes</a> to their items. Your selections from this list of tax codes can be passed in the TaxCode property of each Line to allocate that product to a particular taxability category. This is generally the <strong>best practice</strong> if you can manage TaxCodes in your application.

As an alternative, you may <a href="https://admin.avalara.com/cup/a/2000062458/c/167742/items/add">map items to tax codes in the AvaTax Website</a> if you have no way to do that in your application. If you do this, you only need to send the ItemCode in your request since it will already be associated with a TaxCode in the <a href="https://admin.avalara.com">AvaTax Website</a>. However, there is a drawback. This will introduce an extra step into the item maintenance process when new items are added to your catalog and could get out of synch if the user isn't diligent to maintain the relationship.

If somehow both of these options are used, the AvaTax Website mapping takes precedence.
<h3><a name="ShippingAndFreight"></a>Shipping and Freight</h3>
We expect to see freight charges passed to AvaTax just like any other charge – as an additional line item. You can populate the TaxCode property of the Line object with an <a href="https://developer.avalara.com/avatax/dev-guide/product-taxability/finding-a-tax-code">AvaTax System Tax Code</a> like FR020100, or just FR for AvaTax Basic subscribers, to classify the item as a freight charge. This tax code will allow AvaTax to calculate tax on freight according to the regulations of the state referenced in the Destination or Ship-to address.

<hr />
