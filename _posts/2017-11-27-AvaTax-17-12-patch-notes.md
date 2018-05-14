---
layout: post
title: AvaTax API 17.12 Patch Notes
description: Release Notes for the December 2017 update to the AvaTax API
date: 2017-11-27 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the December 2017 monthly update to the AvaTax API.

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
            <td>2017-12-11</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2017-12-14</td>
        </tr>
    </table>
</div>

<h3>Performance Tuning</h3>

During the months since the [17.9 Patch Notes](/blog/2017/09/22/AvaTax-17-9-patch-notes), our team has been hard at work tuning the performance of AvaTax for the once-a-year sales events that happen in November.  Here's a summary of the improvements that have been made since the September release:

<ul class="normal">
	<li>Reduced the impact of calling the <a href="/api-reference/avatax/rest/v2/methods/Transactions/GetTransactionByCode/">GetTransactionByCode API</a> and <a href="/api-reference/avatax/rest/v2/methods/Transactions/GetTransactionByCodeAndType/">GetTransactionByTypeAndCode API</a>.  This change improved performance for customers whose products used a mix of calls to these APIs alongside creating new transactions.</li>
	<li>Eliminated caching delays caused by updating user credentials or license keys rapidly before they had time to propagate through the AvaTax storage cluster.</li>
	<li>Enforced a limitation on the <a href="/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionsByCompany API</a> to avoid extremely long timeouts for customers with a large number of transactions.  By default, this API now limits you to fetching data within the current 30-day window.</li>
	<li>Better query optimization when fetching data from our data store, and better use of our three-tiered data caching strategy throughout the REST API.</li>
	<li>Improved performance for the free <a href="/api-reference/avatax/rest/v2/methods/Free/TaxRatesByPostalCode/">TaxRatesByPostalCode API</a>.</li>
</ul>

These changes were released gradually during the October and November timeframe as our team prepared for Black Friday and Cyber Monday sales events.

<h3>MultiDocument API Suite</h3>

Are you building a marketplace website that provides the ability for a wide variety of vendors to list their wares?  Does your company make purchases for multiple business entities with a single transaction?  If so, you may be a candidate for Avalara's newest API: the MultiDocument API Suite.

This collection of APIs makes it convenient to record a transaction for a variety of vendors in one place, and to automatically break up the transaction so that it can be reported on multiple separate tax returns, one per business entity.  We'll update our documentation for this feature and share with you a variety of blog posts explaining how this API suite can help you create, track, adjust, and reconcile transactions in a multi-vendor marketplace.

<h3>Support for Country and Region Naming</h3>

As of the December release of AvaTax, all of our APIs now allow you to specify full length country names, abbreviations, and even some common misspellings of various countries.  We have subscribed to the International Standards Organization's ISO3166 database, which provides us with official names and abbreviations of countries and region codes throughout the world and in many popular languages.  

All of this data and localized names are now available to you through the [ListCountries API](/api-reference/avatax/rest/v2/methods/Definitions/ListCountries/) and [ListRegions API](/api-reference/avatax/rest/v2/methods/Definitions/ListRegions/).  Try out the API and see what you can find!

Now that you are able to use fully spelled out names of countries and regions in all AvaTax APIs, here are a few examples:

<ul class="normal">
	<li>You can now use <b>UNITED STATES</b> as well as <b>US</b> when referring to the United States.</li>
	<li>You can now use <b>CALIFORNIA</b> as well as <b>CA</b> when referring to the west coast state.</li>
	<li>You can now use <b>ZURICH</b> or <b>ZÜRICH</b> as well as <b>ZH</b> when referring to the region within Switzerland.  Character accents are optional, but supported.</li>
	<li>You can now use <b>GERMANY</b> or <b>DEUTSCHLAND</b> or <B>ALLEMAGNE</B> as well as <b>DE</b> to refer to the Republic of Germany.  The same country name is available in certain formally recognized linguistic variants.</li>
</ul>

<h3>Changes to CreateTransaction</h3>

A variety of improvements and bugfixes have been made to the CreateTransaction API.

<ul class="normal">
	<li>If you omit the field <code>date</code> when calling the <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a>, you will now get a proper error message indicating that the field cannot be null or empty.</li>
	<li>For consistency, the field <code>customerUsageType</code> is being replaced with <code>entityUseCode</code>.  We have chosen to standardize on the naming of this field all throughout our API; so please expect to see the same field have the same name in all instances.</li>
	<li>Fixed a bug where transactions in Canada would occasionally see incorrect jurisdiction type ID values when using the transaction type <code>SalesOrder</code>.</li>
	<li>Fixed an unhandled exception when sending <code>referenceCode</code> fields longer than 1,024 characters.</li>
	<li>Fixed an unhandled exception when transmitting unusual values in the type field for tax overrides.</li>
	<li>Marked the <code>lines</code> element as required, since a transaction cannot be created if there are no invoice lines on it.</li>
	<li>Improved documentation for the <code>isSellerImporterOfRecord</code> and <code>taxIncluded</code> fields.</li>
	<li>Added a new field, <code>totalDiscount</code>, to the transaction model.  This field contains the sum of all discounts for each individual line in the overall transaction.</li>
</ul>

<h3>Other Improvements</h3>

<ul class="normal">
	<li>The <a href="/api-reference/avatax/rest/v2/methods/Transactions/LockTransaction/">LockTransaction API</a> now gives an error message if you call it without returns enabled.</li>
	<li>The <a href="/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/">ResolveAddress API</a> will return an error message if you attempt to validate addresses in a country that is not supported by Avalara's address matching logic.</li>
	<li>Improved documentation and error messages for the <a href="/api-reference/avatax/rest/v2/methods/Transactions/ChangeTransactionCode/">ChangeTransactionCode API</a>.</li>
	<li>Removed the trace file from the filing confirmations download API.  Payment traces can now be downloaded through a separate API call.</li>
	<li>Improved the use of example objects in the API documentation and added tests to ensure that all models used in the API have a valid example object.</li>
	<li>Improved the error messages provided when a user attempts to change their security role without sufficient permissions.</li>
	<li>Improved data store operations on the tables related to the reporting API.</li>
	<li>Updated documentation for a variety of APIs</li>
	<li>Improved model validation for complex nested models.  You should now see better validation errors for all sorts of data problems in the API.</li>
	<li>Improved caching for code that checks your returns filing configuration.</li>
	<li>Improved documentation for <code>nexusTypeId</code> in the Nexus API suite.</li>
	<li>The CreateUser API has been moved to the Users API suite, and its documentation has been updated to indicate that it is available to use to generate users.</li>
	<li>New API available for determining the status of a tax filing quickly by its filing calendar ID.</li>
	<li>Updated the <a href="/api-reference/avatax/rest/v2/methods/Transactions/AddLines/">AddLines API</a> to work with <code>$include</code> options.</li>
	<li>Marked the <code>verifyTransactionDate</code> parameter as optional in the <a href="/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction API</a>.</li>
	<li>Improved documentation for the <code>X-Avalara-Client</code> parameter for all APIs.</li>
	<li>Corrected an issue that incorrectly marked <code>registrationId</code> field as required for filing requests.</li>
</ul>

<h3>Bugfixes</h3>

<ul class="normal">
	<li>Fixed a bug in the <a href="/api-reference/avatax/rest/v2/methods/TaxContent/BuildTaxContentFile/">BuildTaxContentFile API</a> that caused certain sales tax holidays to appear incorrectly.  Another problem caused jurisdictions with commas in their names to parse incorrectly.</li>
	<li>Fixed an unhandled exception when you provided a date value earlier than the year 1900.</li>
	<li>Fixed an unhandled exception when saving negative adjustments to tax filings.</li>
	<li>Fixed a variety of unhandled exceptions with complex <code>?$filter=</code> query string parameters.  One error was only triggered if you specified a field name but no operation; another error occurred if you specified multiple clauses within an API call but forgot a conjunction between clauses.  Other errors could occur if you specified certain criteria that were not supported on specific data models.</li>
	<li>Fixed an unhandled exception in the <a href="/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a> that occurred when certain fields were left null or omitted.</li>
	<li>Fixed an unhandled exception that occurred if you called the <a href="/api-reference/avatax/rest/v2/methods/Locations/CreateLocations/">CreateLocations API</a>a when one of the <code>settings</code> elements had a name with an inappropriate length.</li>
	<li>Fixed an unhandled exception that occurred if you attempted to fetch return filings using undefined or empty values, or if you attempted to fetch a specific tax filing with an invalid ID number.</li>
	<li>Fixed an unhandled exception in the configuration settings for communications tax</li>
	<li>Fixed an unhandled exception when fetching reports that do not exist.</li>
	<li>Fixed a problem with the filing confirmation API that would prevent downloading of some Streamlined Sales Tax returns.</li>
	<li>Fixed an unhandled exception that could occur when adding lines to a transaction that was created with older versions of the AvaTax software.</li>
	<li>Fixed an unhandled exception that could occur if you transmit a null post body to the <a href="/api-reference/avatax/rest/v2/methods/TaxCodes/CreateTaxCodes/">CreateTaxCodes API</a>, or if you were to send in a null or invalid company reference.</li>
	<li>Fixed an unhandled exception in the TaxContent API suite that occurred if you attempted to build tax content files for an invalid location code.</li>
	<li>Fixed an unhandled exception on the <a href="/api-reference/avatax/rest/v2/methods/Onboarding/RequestNewAccount/">RequestNewAccount API</a> that occurred if you omitted the postal code or accidentally sent data too long for the field.</li>
	<li>Fixed an issue that caused incorrect tax authorities to be listed in some nexus queries.</li>
</ul>

-- Ted Spence, Director, AvaTax Core Engine
