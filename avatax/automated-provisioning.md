---
layout: page
title: Overview
product: avaTax
doctype: use_cases
nav: apis
---

# Account Provisioning and Company Management

The [AvaTax REST API](/api-reference/avatax/rest/v2/) allows Avalara partners to create customer accounts, quickly set up company tax profiles, or add new users to an account.  These features can help you build a connector that automatically allows a customer to set up their AvaTax integration right in your installation user interface!

To begin using the automated provisioning features of AvaTax, here's what you need to know.

* To obtain a free trial account, please use the [RequestFreeTrial API](/api-reference/avatax/rest/v2/methods/Free/RequestFreeTrial/).  This API allows a customer to obtain a free AvaTax trial account at any time without any prior approval or review.  Everyone is welcome to try out AvaTax!
* The free trial API configures a basic account with a very simple setup.  To customize your new account setup process, you would use the [RequestNewAccount API](/api-reference/avatax/rest/v2/methods/Onboarding/RequestNewAccount/) which offers more features.  This API is available to certified partners and connector developers; to obtain certification, please contact [Avalara Sales](https://www.avalara.com/signup/) to request approval as a certified partner or developer.
* To quickly set up a single company, use the [CompanyInitialize API](/api-reference/avatax/rest/v2/methods/Companies/CompanyInitialize/).  This API helps you set up a single company, with a single physical location, with a single API call.  
* If a customer needs a more complex company configuration, you should direct customers to the [AvaTax Website](https://admin.avalara.com).  You should put a hyperlink into your installation program that asks the user if they would like to set up a complete tax profile for their company.  If the click the link, please launch a web browser targeted to the AvaTax Website at [https://admin.avalara.com](https://admin.avalara.com).  The customer will then see a user-friendly process that guides them through setting up their company's tax configuration.

The full steps involved in configuring a tax profile can be challenging.  We encourage you to allow your customers to complete very simple configuration through the CompanyInitialize API; if the customer requires anything more complex, they should use the AvaTax website.

# Payment Methods

Creating a new account does not require that the customer provide payment details.  The customer is encouraged to experiment with AvaTax - no commitment is required.  When they are satisfied that Avalara does tax compliance right, we will be happy to work with them to upgrade their account with whatever features and functionality they require.

# Need More?

We'd be happy to speak with you to help you use the AvaTax API to design a great experience for your integrated tax functionality.  Please [open a case](https://help.avalara.com/Directory/Contact_Us/Submit_a_Case) and we will put you in touch with the right team within Avalara to help you design an integrated workflow.
