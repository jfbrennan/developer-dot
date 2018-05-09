---
layout: page
title: Client Headers
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

The AvaTax REST API includes a feature called the "Client Header".  This feature is incorporated into every AvaTax API call, and is stored in Avalara's audit transaction history system.  When used carefully, this feature can help you diagnose and solve problems with your software.

# Auditing your API Usage

As a tax provider, Avalara records information about every call made to the AvaTax API.  This information contains information about errors, system performance, and characteristics of usage.  This information is often helpful to answer questions such as "Who updated my company object?" or "Who created this specific transaction?"

In addition to information such as the identity of a specific user, the software is also able to help you identify information about which version of software was used to make an API call.  If you identify something concerning in your data or your system, the client header contains a "Fingerprint" that can help figure out which software version or library may be affected by the problem.

The "Client Header" field is optional, but recommended.  Client Headers are required for developers of [certified AvaTax integrations](https://developer.avalara.com/certification).  This certification requirement is necessary to verify that your API calls function as expected and that you pass certification criteria.

A client header is a list of names and version numbers separated by a semicolon.  The structure of the client header is:

```
(app name); (app version); (library name); (library version); (machine name)
```

Let's look at what these things are and how they are useful.

## What is the "App"?

The software application using AvaTax is considered the "App".  For example, if you are using an accounting system such as Sage, Epicor, Dynamics, or NetSuite, the app name is the name of your accounting system.  In the case where you are using software developed by a third party, the third party chooses the name of the application.  If you are developing a website or a custom integration, you are free to choose your own app name.

The App Name field is especially useful when you are curious to see how many users may be affected by a software issue.  Avalara can search for all API calls made by a particular app name and version.  In the case where 

## What is the "Adapter"?

For the purposes of the client header identifier, the "Adapter" is a shared library developed by a third party.  If you used a third-party software library, available through a package manager such as [NuGet](https://www.nuget.org/packages/Avalara.AvaTax/) or [NPMJS](https://www.npmjs.com/package/avatax), the adapter refers to the library you used to connect.

If you use one of the official [AvaTax Software Development Kits](https://developer.avalara.com/sdk), the adapter name and version will be automatically filled in for you.

## What is the "Machine Name"?

Avalara also allows, but does not require, the machine name for API call tracking.  This allows support engineers to search for API calls made by a specific computer even when those API calls come from a shared IP address.

## Does this value change any behavior of AvaTax?

The `X-Avalara-Client` value does not change any behavior of AvaTax. You can freely use any text you wish for this value.

Some libraries using the AvaTax SOAP API do change behavior based on a client profile value.  This behavior is limited to legacy SOAP implementations and does not occur in the [AvaTax REST API](https://developer.avalara.com/api-reference/avatax/rest/v2/).

# Field Definitions

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Owner</th>
                <th>Definition</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>App Name</td>
				<td>The author of the application implementing AvaTax chooses the app name.  </td>
                <td>The name of your program or plug-in. For example, if you were creating a website to sell pottery, this name could uniquely identify your site.  You might choose to make it the domain name of your site, or the official name of your company.</td>
                <td><code class="highlight-rouge">Bob's Artisan Pottery Website</code></td>
            </tr>
            <tr>
                <td>App Version</td>
				<td>The author of the application implementing AvaTax</td>
                <td>The version number of your program or plug-in. You should update this version number with each release, so that Avalara Tech Support can help you identify when a customer is using an out-of-date version of your program.</td>
                <td><code class="highlight-rouge">1.16</code></td>
            </tr>
            <tr>
                <td>Adapter Name</td>
				<td>The author of the shared library used to contact AvaTax</td>
                <td>If you are using a client library to connect to AvaTax, this should be the name of the client library.</td>
                <td><code class="highlight-rouge">AvaTax-Java-SDK</code></td>
            </tr>
            <tr>
                <td>Adapter Version</td>
				<td>The author of the shared library used to contact AvaTax</td>
                <td>The version number of the client library you are using to connect to AvaTax. If your client library is a shared library, this version number should update only with each release of the shared client library.</td>
                <td><code class="highlight-rouge">17.12.0.147</code></td>
            </tr>
            <tr>
                <td>Machine Name</td>
				<td>The author of the application implementing AvaTax</td>
                <td>The name of the computer making this API call. This can be as simple as a hostname or IP address, and can assist you in identifying different operators of a shared system.</td>
                <td><code class="highlight-rouge">LAPTOP-W601</code></td>
            </tr>
        </tbody>
    </table>
</div>
            
