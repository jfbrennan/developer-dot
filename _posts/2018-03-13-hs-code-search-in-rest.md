---
layout: post
title: HS Code Search in REST
description: How to search for HS Codes using new REST endpoints.
date: 2018-03-13 17:00
author: Wayne Myer
comments: true
categories: [avatax, landed cost]
product: blog
doctype: blog
disqus: 1
---

<h2>How Do I Know Which HS Code to Use?</h2>
In this post, we will discuss how customers can use our REST API to find the appropriate Harmonized System (HS) Code for items shipped across country borders. For this example, we will search for knitted scarves shipped to Spain. Let’s walk through the process of browsing and searching for HS Codes using the new REST CrossBorder endpoints.

<h2>Wait, What Are HS Codes?</h2>
The <a href="https://en.wikipedia.org/wiki/Harmonized_System" target="_blank">Harmonized System</a> is an internationally standardized system of names and numbers to classify physical, traded products. <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/HsCodeModel/" target="_blank">HS Codes</a> are a hierarchically organized taxonomy of product types, based on attributes of the product. HS Codes have many aliases including: Harmonized Tariff Codes, Nomenclature Codes, or tariff codes. Within REST and this documentation, we will refer to them simply as “HS Codes.” HS Codes are also used by countries to monitor the commodities passing across their borders, to enforce domestic regulations, perform risk assessments, collect trade statistics, and in some cases, to assess domestic taxes.

Typically, the first four to six digits of an HS Code are the same across all countries that observe the Harmonized System. Complete, valid HS Codes are usually eight- to 13-character strings assigned to each item in an international shipment. **Warning!** Complete HS Codes (beyond the first 6 characters) are specific to the destination country. Therefore, an HS Code that applies for one country may be incorrect or non-existent for another country.

Starting at the top of HS Code hierarchy, there are 21 Sections. Sections are high-level categories identified with a Roman numeral in the Harmonized System. Sections do not belong to any specific country so the System field is blank. You may view all Sections using `/api/v2/definitions/crossborder/sections`.

Request: `/api/v2/definitions/crossborder/sections`

Abridged response:
```json
{
  "@recordsetCount": 21,
  "value": [
  {
    "hsCode": "I",
    "id": 116499,
    "parentHsCodeId": 147869,
    "description": "LIVE ANIMALS; ANIMAL PRODUCTS",
    "system": "",
    "effDate": "2018-01-01"
  },
  {
    "hsCode": "II",
    "id": 118382,
    "parentHsCodeId": 147869,
    "description": "VEGETABLE PRODUCTS",
    "system": "",
    "effDate": "2018-01-01"
  },
  ...
  {
    "hsCode": "XI",
    "id": 135252,
    "parentHsCodeId": 147869,
    "description": "TEXTILES AND TEXTILE ARTICLES",
    "system": "",
    "effDate": "2018-01-01"
  }
  ...
  ```
  Section XI, “Textiles and Textile Articles.” looks like a good start for a knitted scarf, so let’s search within that Section. You may recall that HS Codes are specific to countries so we need to include the destination country to search for HS Codes. If we send a request to `/api/v2/definitions/crossborder/{country}/{hsCode}` with Spain (“ES”) as the destination country and the HS code of “XI”, we get the first-level children of Sections:



Request: `/api/v2/definitions/crossborder/ES/XI`

Abridged Response:
```json
{
  "@recordsetCount": 14,
  "value": [
    {
      "hsCode": "50",
      "id": 131487,
      "parentHsCodeId": 135252,
      "description": "Silk.",
      "system": "Integrated Tariff of the European Union",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "51",
      "id": 131673,
      "parentHsCodeId": 135252,
      "description": "Wool, fine or coarse animal hair; horsehair yarn and woven fabric.",
      "system": "Integrated Tariff of the European Union",
      "effDate": "2018-01-01"
    },
    ...
    {
      "hsCode": "60",
      "id": 133875,
      "parentHsCodeId": 135252,
      "description": "Knitted or crocheted fabrics.",
      "system": "Integrated Tariff of the European Union",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "61",
      "id": 134343,
      "parentHsCodeId": 135252,
      "description": "Articles of apparel and clothing accessories, knitted or crocheted.",
      "system": "Integrated Tariff of the European Union",
      "effDate": "2018-01-01"
    }
...
```

These are the first level of children of Section XI, called Chapters. Chapter 61 looks like a good start for a knitted clothing article. We will continue using this search with each new code that best describes the item.

Request: `/api/v2/definitions/crossborder/ES/61`

Response:
```json
{
  "@recordsetCount": 17,
  "value": [
    {
      "hsCode": "6101",
      "id": 133895,
      "parentHsCodeId": 134343,
      "description": "Mens or boys overcoats, car-coats, capes, cloaks, anoraks (including ski-jackets), wind-cheaters, wind-jackets and similar articles, knitted or crocheted, other than those of heading 61.03.",
      "system": "Integrated Tariff of the European Union",
      "effDate": "2018-01-01"
    },
    ...
    {
      "hsCode": "6117",
      "id": 134342,
      "parentHsCodeId": 134343,
      "description": "Other made up clothing accessories, knitted or crocheted; knitted or crocheted parts of garments or of clothing accessories.",
      "system": "Integrated Tariff of the European Union",
      "effDate": "2018-01-01"
    }
  ]
}
```


After two more searches, we arrive at:
```json
{
    [
    ...
    {
        "hsCode": "611710",
        "id": 134333,
        "parentHsCodeId": 134342,
        "description": "Shawls, scarves, mufflers, mantillas, veils and the like",
        "system": "Integrated Tariff of the European Union",
        "effDate": "2018-01-01"
    }
    ...
    ]
}
```

<h2>Is That the Right Code?</h2>
The HS Code of 611710 may look complete. However, I know from experience that HS Codes for European countries need to be at least ten digits long. Other countries may have requirements of 13 digits or can include alphabetical characters.  To help prevent failed requests, misclassification, or other potential errors in duty calculation, the best practice is to continue searching for HS Code children until you receive an empty response. If we search again with 611710, we get our full HS Code of 6117100000. Searching again with 6117100000 will return an empty result.
```json
{
  "@recordsetCount": 0,
  "value": [],
  "@nextLink": "/api/v2/definitions/crossborder/es/611710000?%24skip=0"
}
```
<h2>Well, How Did I Get Here?</h2>
As mentioned previously, the HS Code structure is hierarchical, starting with Sections, with increasingly higher detail in Chapters, Headings, Subheadings, and finally Classifications. In between each of these, there may be are HS Code “branches.” The branches contain information to describe children, but they do not contain an HS Code. Because of this lack of HS Code in branches, we leave them out when you search for the next level of HS Codes. To see how you got to where you are, there is a hierarchy API: `/api/v2/definitions/crossborder/{country}/{hsCode}/hierarchy`.

This API gives you the complete “parentage” of a given HS Code. The reponse is helpful for reviewing the full descriptive ancestry of an HS Code. For example, querying the hierarchy of 8466935340 for shipment to the United States, machine tools for finishing gears, the response looks like:

Request: `/api/v2/definitions/crossborder/US}/8466935340/hierarchy`

Response:
```json
{
  "@recordsetCount": 10,
  "value": [
    {
      "hsCode": "",
      "id": 57902,
      "parentHsCodeId": 0,
      "description": "The root of the Harmonized System code tree.",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "84",
      "id": 49859,
      "parentHsCodeId": 57902,
      "description": "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof.",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "8466",
      "id": 49178,
      "parentHsCodeId": 49859,
      "description": "Parts and accessories suitable for use solely or principally with the machines of headings 84.56 to 84.65, including work or tool holders, self-opening dieheads, dividing heads and other special attachments for the machines; tool holders for any type of tool for working in the hand.",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "",
      "id": 49154,
      "parentHsCodeId": 49178,
      "description": "Other :",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "846693",
      "id": 49142,
      "parentHsCodeId": 49154,
      "description": "For machines of headings 84.56 to 84.61",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "",
      "id": 49140,
      "parentHsCodeId": 49142,
      "description": "Other:",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "",
      "id": 49128,
      "parentHsCodeId": 49140,
      "description": "Bed, base, table, head, tail, saddle, cradle, cross slide, column, arm, saw arm, wheelhead, tailstock, headstock, ram, frame, work-arbor support, and C-frame castings, weldments or fabrications:",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "",
      "id": 49124,
      "parentHsCodeId": 49128,
      "description": "Other:",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "84669353",
      "id": 49123,
      "parentHsCodeId": 49124,
      "description": "Other",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    },
    {
      "hsCode": "8466935340",
      "id": 49121,
      "parentHsCodeId": 49123,
      "description": "Of metalworking machine tools for grinding or finishing gears",
      "system": "Harmonized Tariff Schedule A of the United States",
      "effDate": "2018-01-01"
    }
  ]
}
```
You may notice the branches in the ancestry above. The branch points are distinguishable by the empty hsCode field. The diagram below may help visualize the hierarchical nature of the 8466935340 HS Code.

<img src="../../../../../images/HSCodeHierarchyExample.jpg" />

The red boxes denote branches, green boxes are valid HS Codes, and yellow boxes represent incomplete HS Codes. Starting at the top with code 846693, there is one immediate, complete child HS Code and one branch. Beneath 846693_branch1, there are two more information branches. When using `/api/v2/definitions/crossborder/{country}/{hsCode}`, AvaTax returns information that fits in yellow or green boxes, but not information in the red boxes. These informational nodes will only appear when querying the hierarchy of a valid HS Code.

<h2>This Seems Complicated!</h2>
HS Code classification is understandably complex. If you need help, Avalara can help you choose HS codes for your items for all the countries to which you ship. To learn how we can help, contact your Avalara Customer Account Manager.