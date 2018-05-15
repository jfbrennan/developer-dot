---
layout: post
title: AvaTax API 18.5 Patch Notes
description: Release Notes for the May 2018 update to the AvaTax API
relevantapimethods: BuildTaxContentFile, BuildTaxContentFileForLocation, CreateCertificates, CreateCustomers, CreateTransaction, CreateOrAdjustTransaction
date: 2018-05-08 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the May 2018 monthly update to the AvaTax API.

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
            <td>2018-05-15</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-05-29</td>
        </tr>
    </table>
</div>

<h3>Weekly Office Hours Webinar</h3>

The AvaTax API team hosts a [weekly developer webinar](https://developer.avalara.com/resources/webinars/) where you can meet and talk to the developers directly.  If you would like to ask questions about this release, please sign up and join us for a lively discussion of the AvaTax API.

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>TaxContent API Improvements</h3>

The TaxContent API suite now supports using custom tax cod values.  To use custom tax codes, you must create items within your company tied to those custom tax codes.

Documentation for the TaxContent API suite has been extended to clarify timeout behavior.  The TaxContent API may take a number of minutes to calculate tax for all the scenarios specified in the combination of locations and tax codes.  Please note that long running API calls may cause routers or other network connections to drop.

If you experience any difficulties using the tax content APIs, please consider reducing the size of your API call and making separate calls for each location.

<h3>Customers and Certificates API</h3>

Due to problems handling certificates that are not yet assigned to a country or region, we are updating the `required` flag for the `country` and `region` fields on [CertificateModel](/api-reference/avatax/rest/v2/models/CertificateModel/) and [CustomerModel](/api-reference/avatax/rest/v2/models/CustomerModel/).  The `country` and `region` fields are now required in all cases.

Updated the default certificate object to include the exemption reason `RESALE`, which represents the most common use case for exemption certificates.

<h3>Invoice Messages in Transactions</h3>

The [CreateTransaction API](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) now includes data elements provided for the convenience of European VAT calculations.  Many EU countries require invoice messaging indicating VAT compliance.  These new message objects permit you to use the exact EU terminology for messaging for VAT tax.

<h3>Advanced Rules Improvements</h3>

New API introduced to allow customers to enable and disable their advanced rules.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Documentation improvements for DeleteBatch, UpdateCompany, RequestFreeTrial, and ListRateTypes.</li>
    <li>Updated the treasury funding API requirements to permit easier onboarding for customers beginning work with Avalara's Managed Returns Services.</li>
    <li>CreateLocations API now allows creation of a location even when the address fails validation.</li>
    <li>Added new APIs to the Tax Notice suite/li>
    <li>Add support for AccruedTaxableSales to the filings API</li>
    <li>Ability to fetch related filing requests for a filing calendar</li>
    <li>Updated the repository of tax data questions asked by various taxing jurisdictions</li>
    <li>Fixed bugs in ListLoginVerifiers & GetLoginVerifierByForm APIs</li>
    <li>Fixed recordsetCount value for ListParameters API and exclude derived parameters</li>
    <li>Fix bug in CreateNexus when parent could not correctly find its parent in some countries/regions</li>
    <li>Add a custom error message for "Duplicate TaxCode" object</li>
    <li>Fix bug in CreateNexus where different ExpirationDates are not compared correctly to each other if they are past year 9000</li>
    <li>Fixed unhandled exception in AccountSettings: Index out of Range</li>
    <li>Removed Filter and OrderBy parameters for APIs that do not support them (ListTaxCodeTypes, ListPermissions)</li>
    <li>Fixed an error that occurs if new account provisioning occurs during a cache cycle refresh</li>
    <li>Fixed bug in GetFilingsByReturnName that was not filtering correctly</li>
    <li>Fixed bug that caused attachments to be missed in GetFilingsReturns</li>
    <li>Fixed "IN" clause support for querying on NexusTaxTypeGroup when querying Nexus</li>
    <li>Fixed bug in filings checkup API returning some forms that were inappropriate</li>
    <li>Fixed bug that caused EntityNotFound error when listing nexus by country</li>
    <li>Fixed bug that prevented filtering by JurisdictionType for ListLocationQuestionsByAddress API</li>
    <li>Fix bugs with filtering and ordering for ListJurisdictionsByAddress</li>
    <li>Fixed error when filtering in ListCommunicationsServiceTypes</li>
    <li>Fixed error message when creating a nexus for an unknown NexusTaxTypeGroup</li>
    <li>Fix bugs in AvaFileForm filtering and ordering</li>
    <li>Allow the ListTransactionsByCompany API to work using either CompanyId or CompanyCode</li>
    <li>Improved error messages when SST customers attempt to use Lat/Long geocoding</li>
</ul>

-- Ted Spence, Director, AvaTax API
