---
layout: post
title: AvaTax API 18.1 Patch Notes
description: Release Notes for the January 2018 update to the AvaTax API
date: 2018-01-04 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the January 2018 monthly update to the AvaTax API.

UPDATED 2018-01-12 - More information about importer of record added.

UPDATED 2018-01-23 - Updated release date.

<div class="mobile-table">
    <table class="styled-table">
        <tr>
            <th>Environment</th>
            <th>URL</th>
            <th>Release Date</th>
        </tr>
        <tr>
            <td>Sandbox</td>
            <td><a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></td>
            <td>2018-01-17</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-01-29 (UPDATED)</td>
        </tr>
    </table>
</div>

<h3>Changes in Cross-Border Customs and Duty Taxes</h3>

Avalara is updating the Landed Cost tax calculation engine with new features and capabilities.  Among the changes are key features including:

<ul class="normal">
  <li>Ability to designate seller/importer of record on a country-by-country configuration basis</li>
  <li>Each custom or duty tax contains information about whether it may be charged to the buyer</li>
  <li>New definitions API for browsing through the harmonized tariff system database for HS codes</li>
  <li>Support for company distance threshold data for EU VAT tax calculation</li>
  <li>Support for Mini-One-Stop-Shop metadata for EU VAT customers</li>
</ul>

<h3>Importer of Record</h3>

In AvaTax 18.1, Avalara will re-introduce the "Importer of Record" (IOR) system for identifying companies obligated to pay certain value-added and customs/tariff/duty taxes.  This feature has been present in AvaTax for a while, but we are improving and upcating our documentation to clarify its purpose and utility.

With the release of Avalara's newly researched content for IOR rules, customers may see changes in tax results for US imports/exports based on the value used for IOR. Though this is due to new and accurate content research, customers using this behavior in production will be notified and they will have the ability to set the IOR value as needed. Since some applications and connectors do not give the user control over this field, users will have the ability to set these values in their nexus configuration as well as through the transaction call.

The IOR field will be available in both the [CreateTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) and the [CreateNexus API](/api-reference/avatax/rest/v2/methods/Nexus/CreateNexus/).  You can choose whether a company is considered the importer of record either by configuring the company's nexus settings, or during each individual transaction by setting the flag on the [CreateTransactionModel](/api-reference/avatax/rest/v2/models/CreateTransactionModel/).  Additionally, a company configuration value that controls how these fields behave will be available in the [SetCompanyConfiguration API](/api-reference/avatax/rest/v2/methods/Companies/SetCompanyConfiguration/).

When you declare your company as the importer of record, many customs, duties, and value-added taxes will apply to your company.  If you are not the importer of record, those taxes will not apply to your company.  In general, the value you provide in the CreateTransaction API call will take precedence over the value set in your nexus, although this can be controlled with the configuration setting.

For customers calculating international taxes, or taxes that apply when products are shipped cross border, you should review how your code sets this value.

<h3>Coming Soon: Item Attributes</h3>

As AvaTax grows to handle new tax types and new content types, correct tax calculation will require more information about products in order to determine their taxability across a variety of different laws.  To store this information, we will be extending the [Items APIs](/api-reference/avatax/rest/v2/methods/Items/) to include attributes.

These attributes will be automatically loaded and processed by AvaTax whenever you calculate tax on a product.  By using the Item system, you can offload the complexity of tax laws onto your accounting department and avoid having to update your software every time the tax classification data for your product catalog changes.

Here's how it works:

<ul class="normal">
  <li>Your software should call the <a href="/api-reference/avatax/rest/v2/methods/Items/CreateItems/">CreateItems API</a> for each product in your catalog.  You can call this API on demand any time a new product is first handled.</li>
  <li>Your accounting or compliance teams can manage the tax data and custom item attributes for each item using the <a href="https://admin.avalara.com/">AvaTax Website</a>.  Any items they don't configure will be calculated as tangible personal property; but any items that need special tax treatment can be managed as needed in the friendly AvaTax website user interface.</li>
  <li>When you call the <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a>, your software only has to pass the <code class="rouge">itemCode</code> parameter for each line item.  If your compliance team has updated any tax information for this product, AvaTax will automatically use it - without any code changes!</li>
</ul>

The item attribute system allows you to keep the complexity where it belongs: fully in control of your accounting / compliance department.  You'll never have to update your software again to customize your product catalog!

Please be on the lookout for more announcements about Item Attributes during Q1 2018 as we move more complex tax logic into the item system and simplify the AvaTax API!

<h3>TaxContent API Improvements</h3>

The [TaxContent API](/api-reference/avatax/rest/v2/methods/TaxContent/) has been updated with some usability improvements and bug fixes.

<ul class="normal">
  <li>Connecticut luxury taxes no longer have conflicting scenario ID numbers.</li>
  <li>Added support for attributes at the item level (as above) to allow for more complex tax calculation</li>
  <li>Scenarios are sorted for ease of browsing.</li>
  <li>Fixed an unhandled exception that occurred when providing some null values to the TaxContent API.</li>
</ul>

<h3>Exemption Certificate Provisioning</h3>

The integrated [AvaTax Exemption Certificates API suite](/api-reference/avatax/rest/v2/methods/Certificates/) has been updated to automatically provision your exemption certificate service the first time you make any API call related to certificates, customers, or CertExpress invites.

<h3>CreateTransaction API</h3>

The following changes affect the [CreateTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/):

<ul class="normal">
  <li>Added a custom error message for discounts that could not be applied.  If you set the <code class="rouge">discount</code> field on your request, but you forget to specify which lines within the invoice will be discounted, the API will now return an error indicating that the requested discount could not be applied rather than proceeding without applying the discount.</li>
  <li>Fixed an unhandled exception when address data exceeded a specific length</li>
  <li>Improvements to the help text for <a href="/api-reference/avatax/rest/v2/models/LineItemModel/">LineItemModel</a> to clarify the behavior of negative values.  Negative values are allowed for the <code class="rouge">amount</code> field, but negatives are not intended to be used for the <code class="rouge">quantity</code> field.</li>
  <li>Fixed an issue that reported incorrect region names for international regions when there were ISO 3166 code matching issues.</li>
  <li>Taxes that are not allowed to be passed through to the customer are now present in a new data structure called the "Non Passthrough Details" structure.  Taxes that can be charged to the customer will continue to appear in the <code class="rouge">details</code> structure as normal.</li>
</ul>

<h3>Other Improvements and Bug Fixes</h3>

<ul class="normal">
  <li>Added definitions API for unit of measurement and measurement types</li>
  <li>Improvements to US postal code validation logic for <a href="/api-reference/avatax/rest/v2/methods/Free/TaxRatesByAddress/">TaxRatesByAddress</a> and other APIs, fixing an unhandled exception that occurred in some cases.</li>
  <li>Free trial emails now direct you to the updated <a href="https://admin.avalara.com">AvaTax Website</a></li>
  <li>Fixed an issue affecting SST customers when using <a href="">RefundTransaction</a> for percentage-based discounts</li>
  <li>Improved help text for the <a href="/avatax/client-headers/">X-Avalara-Client</a> value, linking to the new developer documentation page for this feature.</li>
  <li>Added support for different transaction types to <a href="/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction</a>, <a href="/api-reference/avatax/rest/v2/methods/Transactions/SettleTransaction/">SettleTransaction</a>, <a href="/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a>, and <a href="/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a>.  You will now be able to call these APIs to handle transactions that share the same transaction code but have different transaction types.</li>
  <li>Corrected some issues with blank space parsing in the Free Trial API.</li>
  <li>The <code class="rouge">locationCode</code> field was incorrectly set to case sensitive in some circumstances.  It is intended to be case insensitive.</li>
  <li>The TaxRule API has been extended to include a new region field.</li>
  <li>Fixed an issue that affected <a href="/api-reference/avatax/rest/v2/methods/Transactions/SettleTransaction/">SettleTransaction</a> and <a href="/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a> when date values were not passed.  The documentation for these APIs has been updated to match the functionality as expected.</li>
  <li>Added support for in-memory filtering using "IN" clauses for cached data sets.</li>
  <li>The onboarding API now permits payment method configuration.</li>
  <li>Modified the ListParameters API to only display end-user parameters.</li>
  <li>Updated country and region data licensed from the International Standards Organization.</li>
  <li>Flagged the companyCode value correctly for the Initialize API.</li>
  <li>Fixed an issue that allowed users to provide negative percentages in some circumstances when not intended.</li>
  <li>Fixed an issue that prevented users from searching for certificate exposure zones filtering by country.</li>
  <li>Fixed an unhandled exception that occurred when accessing logon data during a cache refresh cycle.</li>
  <li>Fixed an unhandled exception when providing complex query structures using the $filter parameter.</li>
  <li>Fixed an unhandled exception in the report API.</li>
  <li>Fixed an unhandled exception on cache load of ISO country data.</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine
