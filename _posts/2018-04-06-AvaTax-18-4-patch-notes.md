---
layout: post
title: AvaTax API 18.4 Patch Notes
description: Release Notes for the April 2018 update to the AvaTax API
date: 2018-04-06 10:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the April 2018 monthly update to the AvaTax API.

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
            <td>2018-04-16 (revised)</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-04-25</td>
        </tr>
    </table>
</div>

<b>UPDATED 2018-04-12:</b> The sandbox release date has been adjusted to April 16, 2018.

<h3>Patch Notes Webinar</h3>

The AvaTax April release will launch to the Sandbox environment two weeks before production. If your engineering team would like a sandbox account for testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

The AvaTax API team hosts a [weekly developer webinar](https://developer.avalara.com/resources/webinars/) where you can meet and talk to the developers directly.  If you would like to ask questions about the release, please sign up and join us for a lively discussion of the AvaTax API.

<h3>Marketplace Locations</h3>

Customers doing business through marketplace vendors may be affected by the [Washington Marketplace Fairness Act](https://dor.wa.gov/marketplacefairness), which requires ecommerce marketplace facilitators to collect and remit sales tax on behalf of sellers.  In AvaTax 18.4, you can designate specific [Locations](/api-reference/avatax/rest/v2/methods/Locations/) as marketplace locations, and you can specify whether a marketplace collects and remits taxes for you.

To use this feature, follow these steps:

<ul class="normal">
    <li>First call the [CreateLocation API]() to create a location with the `addressTypeId` field set to  `Marketplace` and choose either the `SellersRemitsTax` or `MarketplaceRemitsTax` option for the `addressCategoryId` field.</li>
    <li>When creating transactions, select the `reportingLocationCode` field on the [CreateTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) to the `locationCode` field of the marketplace location you created.</li>
    <li>All transactions that are tagged with a `reportingLocationCode` that connects them to a location of type `Marketplace` with category `MarketplaceRemitsTax` will be filed on your sales tax returns as already remitted.</li>
</ul>

<h3>Company Code</h3>

As requested by many customers, the `companyCode` field on the [CompanyModel](/api-reference/avatax/rest/v2/models/CompanyModel/) is now editable.  This field was originally marked as not-editable in order to provide compatibility with older software that expected the `companyCode` field to be static.  Now that this field is editable, customers can make adjustments to their company's code as necessary.

<h3>ISO3166 Regions</h3>

Based on research from our international teams, we have added additional information to our ISO3166 database indicating which countries require `region` codes to be present in their postal addresses.  This information is available by calling the [ListCountries API](/api-reference/avatax/rest/v2/methods/Definitions/ListCountries/).

AvaTax APIs that take ISO3166 country and region codes as input have been updated to make the `region` field optional for countries that do not require it for mailing addresses.

<h3>RequestFreeTrial API Changes</h3>

The AvaTax [RequestFreeTrial API](/api-reference/avatax/rest/v2/methods/Free/RequestFreeTrial/) has been updated to request that the user read and accept Avalara's terms and conditions prior to creating a free trial.

<h3>RequestNewAccount API Changes</h3>

The [RequestNewAccount API](/api-reference/avatax/rest/v2/methods/Onboarding/RequestNewAccount/) for partner account creation has been updated with the latest corporate policies for password complexity.  Partners are strongly encouraged to leave the `userPassword` field blank; in which case users will receive an invitation email to create their password via the Avalara Identity user interface.

<h3>New API: DeclareNexusByAddress</h3>

Based on feedback from customers, declaring nexus correctly can be a challenge.  Nexus jurisdictions must match one of Avalara's defined system nexus in order to be usable by the AvaTax software.

To simplify the process of declaring nexus, we provide a new API, DeclareNexusByAddress.  This API allows you to provide an array listing all of the places of business for your software plus their dates, and it will identify and create all the appropriate nexus objects for your company.

<h3>Feature Preview: Advanced Rules</h3>

AvaTax now includes a scripting language that can be used to apply complex rules to tax calculations progammatically.  This feature allows complex tax scenarios to be handled through a flexible and powerful engine that can help improve your compliance process.

Advanced Rules is now available by invitation for preview customers.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Improved documentation for <code class="highlight-rouge">taxCollected</code> fields to better explain overrides</li>
    <li>Improved "duplicate object" error messages to better explain why two objects had a conflict</li>
    <li>Improvement to the <a href="/api-reference/avatax/rest/v2/methods/Free/TaxRatesByPostalCode/">TaxRatesByPostalCode API</a> to better handle input data with whitespace or formatting issues</li>
    <li>Updated the New User email to include information about whether the user login was created on sandbox or production</li>
    <li>Fix unhandled exceptions with Tax Content API</li>
    <li>Fix unhandled exception when filtering on ListEntityUseCodes by countries</li>
    <li>Custom error when user sends negative $top or $skip values</li>
    <li>Fix unhandled exception in Locations controller</li>
    <li>Do not return intermediate HS codes when filtering</li>
    <li>Fix bug on filtering by SIUOM on definitions APIs</li>
    <li>Fix unhandled exception in filtering by filing frequency ID</li>
    <li>Fixed bug that prevented sorting countries by name or code</li>
    <li>Fix bug that prevented users from seeing custom TaxCodes in tax content API</li>
    <li>Fixed bug with filtering using apostrophes or double quotes</li>
    <li>Fixed bug in filtering jurisdiction overrides by end date</li>
    <li>Fixed bug that caused location address changes to not update questions</li>
    <li>Include location question names in location settings</li>
    <li>Updated filings checkup API to return ISO 3166 compatible tax form codes</li>
    <li>Fix unhandled exception on filings controller</li>
</ul>

-- Ted Spence, Director, AvaTax API
