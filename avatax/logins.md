---
layout: page
title: Logins and Resources
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---

To activate your Avalara AvaTax Sales Tax API account, please login to the [AvaTax Website](https://admin.avalara.com).  If you are using Avalara's Sandbox environment for testing, please use the [Sandbox version of the AvaTax website](https://sandbox.admin.avalara.com).

You can use the AvaTax API with your username/password, or with an AvaTax `accountId` and `licenseKey`.  You obtain your license key through the AvaTax Website.  Please be sure to record your account number and license key!

For more information on authenticating the API, please see [Authentication in REST](/avatax/authentication-in-rest/)

# Resetting your License Key

An important part of our security trust with our clients is that Avalara Support does not reset a license key for any account without the explicit direction of the posted Account Administrator.

You can reset your own license key as follows:

* Visit the [AvaTax Website](https://admin.avalara.com) for your account
* Click on *Settings*
* Click on *Generate a license key*

When a license key is generated, the new key is emailed to the Account Admin(s) on this list and no one else. Any previous keys that were created for this account become invalid.  Please ensure that you only reset the license key if you have ensured that all existing AvaTax integrations are ready to be updated.

Warning: Resetting the license key has the effect of invalidating the old key, and breaks all connectors' future connection to the AvaTax web service still using that old license key (including AvaTax ERP Connectors using the same account number). In other words, when you reset your license key, you will need to change the credential properties on any and all connector(s) you have built, installed and/or deployed, but also the AvaTax ERP Connector using the same account number.

