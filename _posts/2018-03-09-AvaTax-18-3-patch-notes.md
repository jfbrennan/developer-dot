---
layout: post
title: AvaTax API 18.3 Patch Notes
description: Release Notes for the March 2018 update to the AvaTax API
date: 2018-03-12 10:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the March 2018 monthly update to the AvaTax API.

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
            <td>2018-03-14</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-03-28</td>
        </tr>
    </table>
</div>

<h3>Patch Notes Webinar</h3>

The AvaTax March release will provide a two-week period where the March release of AvaTax will be available for integration testing into the Sandbox environment.  If your engineering team would like a sandbox account for testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

The AvaTax API team will host a [developer webinar to discuss the March release](https://attendee.gotowebinar.com/register/8135505725963625219) on Monday, March 19th, 2018, at 10:00 AM Pacific time.  If you would like to ask questions about the AvaTax API 18.3 release, please sign up and join us for a lively discussion of the changes to the AvaTax API.  The webinar will conclude with a 15 minute Q&A session for developers to ask any questions about this release cycle.

<p class="btn-callout"><a href="https://attendee.gotowebinar.com/register/8135505725963625219" role="button">Register for AvaTax API 18.3 Release Preview Webinar</a></p>

<h3>Exemption Certificates API</h3>

Improvements to the [exemption certificate system](/api-reference/avatax/rest/v2/methods/Certificates/) in the March release include general performance improvements, provisioning improvements, and some API quality changes.

The provisioning model for exemption certificates has been updated.  Each company requires an initial setup process to allocate data storage for exemption certificates; you can call the new [RequestCertificateSetup API](/api-reference/avatax/rest/v2/methods/Certificates/) to request that your company be configured for certificate data storage.

<ul class="normal">
  <li>Corrected bugs that caused incorrect pagination when performing multi-page queries against exemption certificates and customer data.</li>
  <li>Corrected a bug that prevented certain certificates with extension data in them from being retrieved.</li>
  <li>Improved documentation for <a href="/api-reference/avatax/rest/v2/methods/CertExpressInvites/">CertExpressInvites</a> to better explain the <code class="highlight-rouge">requestLink</code> field.</li>
  <li>Added new "Customer Type" data fields for customer objects.</li>
</ul>

<h3>Tax Returns API Changes</h3>

<ul class="normal">
  <li>Improvements to APIs related to the AvaFileForms data source.</li>
  <li>Fixed a bug that prevented certain attachments or trace files from being downloaded.</li>
  <li>Updated the treasury integration system.</li>
  <li>Corrected some bugs in the filing calendar API that returned incorrect error codes.</li>
  <li>Corrected an issue that prevented storing tax notices with certain flags indicating it was for a paper filing.</li>
</ul>

<h3>Transaction API Changes</h3>

Changes made to the [Transaction API suite](/api-reference/avatax/rest/v2/methods/Transactions/) in the March release include:

<ul class="normal">
  <li>Corrected a bug that caused <code class="highlight-rouge">taxDate</code> on <a href="/api-reference/avatax/rest/v2/models/TransactionModel/">TransactionModel</a> objects to be returned incorrectly for certain sales orders / estimates.</li>
  <li>Deprecated the field <code class="highlight-rouge">customerVendorCode</code> and renamed as <code class="highlight-rouge">customerCode</code> for consistency with other APIs.  The old field will continue to be supported but we encourage users to switch to the new consistently named field instead.</li>
  <li>Corrected an issue that could cause an unhandled exception in <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/">CreateOrAdjustTransaction API</a>.</li>
  <li>Support for the fully-spelled-out <code class="highlight-rouge">jurisdictionTypeId</code> value is now present in the transaction model.</li>
  <li>Improved documentation for the reportingLocationCode field to explain how it differs from other location code functionality.  For more information about reporting location codes, please read the <a href="/avatax/dev-guide/locations/location-based-reporting/">Developer Guide chapter on location based reporting</a>.</li>
  <li>Fixed a bug that affected APIs retrieving a single transaction with an unspecified document type value.</li>
  <li>Updated logic for fetching transactions to permit fetching the last version of a cancelled transaction.</li>
  <li>The <a href="/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a> now includes an option for recalculating taxes based on the most recent tax laws for a state as of the date of the original sale.  This option is mandatory for customers using Streamlined Sales Tax.</li>
  <li>Added a custom error message when attempting to void an already-voided or cancelled transaction.  Please note that void and cancel are synonyms in AvaTax.</li>
</ul>

<h3>Nexus Behavior Changes</h3>

To ensure consistency in a company's tax profile, changes have been made to the [Nexus API suite](/api-reference/avatax/rest/v2/methods/Nexus/).  If you attempt to declare a nexus in a smaller jurisdiction (for example, a city) without having declared nexus in a parent jurisdiction (for example, the state where the city is located) you will receive a more detailed error.

This behavior is also being extended to handle nexus deletion, end-date changes, and updates.

To cancel a nexus, you will have to cancel all child nexus declarations prior to cancelling the parent nexus.

New Nexus Tax Type Groups are being added in this release.  As a result, the enumeration that was used to track tax type group names is being replaced with a string, so that users will have a more flexible data set that accommodates future changes.

<h3>Account Defaults Update</h3>

Newly created accounts will now have the "Use Importer Of Record From Nexus" setting enabled, to help ensure that customers can choose on a country-by-country basis whether they would like to calculate customs and duty taxes.

Newly created accounts will now have exemption certificate support automatically enabled for both the United States and Canada.

Existing accounts can change these settings by visiting [https://admin.avalara.com/](https://admin.avalara.com/).

<h3>Other Improvements and Bug Fixes</h3>

<ul class="normal">
  <li>Corrected a bug that prevented units of measurement from being sorted.</li>
  <li>Fixed an unhandled exception that could occur when listing user entitlements in particular caching scenarios.</li>
  <li>Included question name in the data model for <a href="/api-reference/avatax/rest/v2/models/LocationSettingModel/">LocationSettings</a>.</li>
  <li>Ensure that Use Importer Of Record Setting From Nexus Selection is now defaulted to true for newly created accounts.</li>
  <li>Added support for the Admin website to provide a better experience when creating new usernames.</li>
  <li>Improved documentation for batch upload processing times.</li>
  <li>Corrected a bug in the TaxRule API that presented an unexpected error message when creating with the new JurisdictionTypeId value.</li>
  <li>Corrected documentation for <code class="highlight-rouge">code</code> parameter in the MultiDocument API suite.</li>
  <li>The user browse API will now automatically hide your license key user.  This license key user is known as the "Anonymous User" since it represents API calls that have occurred using the company's license key authentication.</li>
  <li>Improved error messages when a user attempts to use a <code class="highlight-rouge">$filter</code> command against a field that is non-filterable.</li>
  <li>Corrected a bug that failed to return three character alphabetic codes for ISO3166 countries.</li>
  <li>Correction to multi document API suites related to <code class="highlight-rouge">Any</code> document types.</li>
  <li>Corrected a general bug in multi-page pagination that affected some in-memory cached datasets.</li>
  <li>Custom error message for inserting a new subscription with a different service type.</li>
  <li>Ensure <code class="highlight-rouge">system</code> field is blank when fetching harmonized tariff system code sections.</li>
  <li>Corrected an issue that incorrectly flagged some landed cost transactions as errors instead.</li>
  <li>Added new entity use codes for new types of exempt categories.</li>
  <li>Ability to search using filter text against harmonized tariff system codes.</li>
  <li>Improvements to quality assurance system tools for simulating customer problems.</li>
  <li>Corrected some issues regarding unit-of-measurement data in the landed cost tax calculation process.</li>
</ul>

-- Ted Spence, Director, AvaTax API
