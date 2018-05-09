---
layout: post
title: AvaTax Python SDK now available!
date: 2018-04-19 11:00
author: Han Bao
comments: true
categories: [avatax, sdk]
product: blog
doctype: blog
disqus: 1
imgsrc: /public/images/blog/python.png
---

Python is said to be the <a href="https://adtmag.com/articles/2017/09/07/python-popularity.aspx">"fastest-growing"</a> programming language, and it is constantly growing in areas such as machine learning and data analysis.
For those Avalara REST V2 customers using Python, we have published an official <a href="https://pypi.org/project/Avalara/">AvaTax SDK on PyPI</a>, the official platform for open source Python project! This SDK is already configured with all the code and logic you need to get started incorporating tax calculation into your application, and it can greatly speed up your development cycle.

For today's article, I'll walk you through the process of adding our Python SDK to your python project.

### Installing the SDK

Install simply with pip.
```pip install Avalara```

**OR**

Clone this repository to your local machine.
```
$ git clone https://github.com/avadev/AvaTax-REST-V2-Python-SDK.git
```
Once downloaded, cd into the ```AvaTax-REST-V2-Python-SDK``` directory.
```
$ cd AvaTax-REST-V2-Python-SDK
```
Begin a new virtual environment with Python 3 and activate it.
```
AvaTax-REST-V2-Python-SDK $ python3 -m venv ENV
AvaTax-REST-V2-Python-SDK $ source ENV/bin/activate
```
[pip](https://pip.pypa.io/en/stable) install this package as well as the testing set of extras into your virtual enviroment.
```
(ENV) AvaTax-REST-V2-Python-SDK $ pip install -e .
(ENV) AvaTax-REST-V2-Python-SDK $ pip install -e .[testing]
```

### Create a transaction with the SDK

**<u>Import the AvataxClient from the client module</u>**

First thing to do is to import the AvataxClient constructor module to your name space, or your python script.

```
from client import AvataxClient
```
<br/>
**<u>Now we are ready to construct a client object</u>**

Create a new AvaTaxClient object:
```
    client = AvataxClient('my test app',
                          'ver 0.0',
                          'my test machine',
                          'sandbox')
```
The client constructor takes four string parameters. In squence they are `app_name(required)`, `app_version(required)`, `achine_name(optional)`, and `environment(required)`. 
The app_name, app_version, machine_name will be use to construct the [Client Header](https://developer.avalara.com/avatax/client-headers/) associated with each calls made by this client. Which will be return within the response object to help you keep track of the API calls. 

The `environment` variable can be either `"sandbox"` or `production`, they corresponds to the two different environment AvaTax service has.
If you are an AvaTax API free trail customer or have already purchased an AvaTax API subscription please use `"production"`. If you don't have an account, you can sign up for a free trail account on our [developer site](https://developer.avalara.com/avatax/signup/), this will be a production account as well.
If you wish to obtain a Sandbox account, please contact your [Customer Account Manager](https://help.avalara.com/Frequently_Asked_Questions/Avalara_AvaTax_FAQ/How_do_I_get_access_to_our_development%2F%2Fsandbox_account%3F)

<br/>
**<u>Ping the service</u>**

Now that we have a client object, we can ping the AvaTax REST V2 server to ensure connectivity.
```
  response = client.ping()

  # to view the HTTP respnse text
  print(response.text())

  # to view json version of the response
  print(respnse.json())

  # to view the status code
  print(response.status_code())

  # to view the raw response
  print(response.raw())
```
Note that the response from all REST calls made using this SDK will be [Request](http://docs.python-requests.org/en/master/user/quickstart/#response-content) object, which contains status code, response text, raw josn, and more information on the respnse.

<br />
**<u>Add credentials to your client object</u>**

Unlike `ping`, most methods in our REST V2 API require you to be authenticated to associate the information you provided to your account.
To find out if a method requires authentication, visit our [API Reference](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/) page.
To add credential on the current client object:
```
  client = client.add_credentials('USERNAME/ACCOUNT_ID', 'PASSWORD/LICENSE_KEY')
```
The `add_credential` method will hash your username/password, or account_id/license_key pair and attach to every call made by your client object, meaning you only have to add credential once to each client you are using.

To verify that you have added a valid credential, simply call the `ping` method again, this time in the response text you should see "authenticated: true" in the response text.

<br />
**<u>To create a transaction using your client object</u>**

Now that our client object is authenticated, we can call the create_transaction method which calls the [CreateTransaction API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/)
```
  transaction_response = client.create_transaction(tax_document)
  print(transaction_reaponse.text())

  tax_document = {
      'addresses': {'SingleLocation': {'city': 'Irvine',
                                       'country': 'US',
                                       'line1': '123 Main Street',
                                       'postalCode': '92615',
                                       'region': 'CA'}},
      'commit': False,
      'companyCode': 'DEFAULT',
      'currencyCode': 'USD',
      'customerCode': 'ABC',
      'date': '2017-04-12',
      'description': 'Yarn',
      'lines': [{'amount': 100,
                'description': 'Yarn',
                 'itemCode': 'Y0001',
                 'number': '1',
                 'quantity': 1,
                 'taxCode': 'PS081282'}],
      'purchaseOrderNo': '2017-04-12-001',
      'type': 'SalesInvoice'}

```  
The create_transaction method takes a model (a dictionary type object), which should include all of your transaction information. In this case, we are using the [TransactionModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel/)
For information on other models use by AvaTax APIs, visit our information page [here](https://developer.avalara.com/api-reference/avatax/rest/v2/models)


### To use other API methods

Like our SDKs in other languages, the Python SDK includes all methods offered by the AvaTax REST V2 API. To find a mehtod corresponding to a specific API endpoint, simply visit this [code page](https://github.com/avadev/AvaTax-REST-V2-Python-SDK/blob/master/src/client_methods.py)
To learn more about integrating our REST API into your system, visit our [developer guide](https://developer.avalara.com/avatax/dev-guide/getting-started-with-avatax/) which contains information on using the powerful features offered by our API.


### To use the transaction builder

We realize that having to format the TransactionModel can be complicated and time consuming thus we created a tool called Transaction Builder to help you put together a transaction model, and create it!
First import the transaction builder constructor into your name space: <br />
```from transaction_builder import TransactionBuilder```

Then, create a transaction builder object:
```
  tb = TransactionBuilder(client, "DEFAULT", "SalesInvoice", "ABC")
```
The builder takes four required parameters, in sequence they are

1. The client object 
2. Company name(created through AvaTax portal or by calling [CreateCompany API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/CreateCompanies/)) 
3. The type of transaction, a [full list](https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/DocumentType/) of options. 
4. The customer code, an unique code identifying the customer that requested this transaction. 


Now you are free to add transaction details to this object, by using methods such as  `with_address`, `with_line`, `with_parameter`.
For a fulll list of transaction builder methods available and the parameters they take in, visit the [code page](https://github.com/avadev/AvaTax-REST-V2-Python-SDK/blob/master/src/transaction_builder_methods.py)
In the end, you may call the `create` method on your builder object, which will call the CreateTransaction API with the transaction model you have built so far, and return back the response.


### Setup Testing Credentials

If you wish to run the integration and unit testings, you must store a pair of credentials in the current enviroment.
Add the following to the ```activate``` file in your environment, and restart bash.
OR simply ```export``` them directly:

```
export SANDBOX_USERNAME='your_sandbox_username'
export SANDBOX_PASSWORD='your_sandbox_password'

# OR
SANDBOX_ACCOUNTID='your_sandbox_account_id'
SANDBOX_LICENSEKEY='your_sandbox_license_key'
```
Note: Only *Sandbox credentials* should be used for testing, as the test case will commit/adjust/void dummy transactions on the account to verify functionalities.  


### Question or suggestion

I hope this has helped you see how the Python SDK can help simplify your tax processing work. At Avalara we highly value user feedback, we want to ensure the best experience for every customer using our services. If you have any concern or question regarding this SDK or AvaTax in general, please post your queston/suggestion on our [Developer Relation Forum](https://community.avalara.com/avalara/category_sets/developers) as we will reply to you in a timely manner.
If you wish to contribute to this SDK, please fork the [repository](https://github.com/avadev/AvaTax-REST-V2-Python-SDK) and submit your pull request from the forked version. We are happy to review your contribution, and merge them if all checks has passed!


