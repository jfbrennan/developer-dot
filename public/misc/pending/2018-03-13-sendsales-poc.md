---
layout: post
title: Tax Rates API for SendSales
description: Use the AvaTax API to get tax rates by zip code for SendSales, such as retail sales fulfilled from your warehouse
date: 2018-03-23 15:00
author: Robert Bronson
comments: true
categories: [avatax, send sales]
product: blog
doctype: blog
disqus: 1
---


Our customers have a need for a list of tax rates by zip code.  These rates are used in “send sales” transactions, which are purchases made in one location but delivered from another.  An example of this would be purchasing something which has to be shipped to you from a remote warehouse.  Currently, putting together lists of tax rates is time-consuming and expensive.  We built a test app using existing APIs to generate the tax rate files.

<h2>Proof of Concept</h2>

The requirements of our application are:

<ul class="normal">
  <li>Use AvaTax REST API</li>
  <li>Allow the customer to specify desired tax codes</li>
  <li>Build a tax file for all available postal codes using specified tax codes</li>
  <li>Demonstrate acceptable performance, acceptability to be determined</li>
</ul>

<h2>Showcasing the New Python SDK</h2>

We wanted to demonstrate our newly published  <a href="https://developer.avalara.com/sdk/">Python SDK</a> and how it interacts with the AvaTax API.  Using the SDK, we wrote a  Python script to gather the entire list of U.S. postal codes in our system.  Using that list, we created locations at each postal code.  Once we had the locations, we imported the list of desired tax codes from a separate file, and generated a tax file based off of those tax codes at each location. We tracked the time it took to generate each tax file, as well as the overall run time.

<h2>Results</h2>

We ran the app with 50 tax codes for 50 locations to sample the performance.  The app averaged 1.05 seconds per tax file generated. The 1.05 second time seems pretty stable, whether we ran 5 or 50 locations.  For all 41,000+ zip codes, it would take approximately 12 hours to generate all the tax files.  This is a significant improvement to the month-long process Avalara currently uses.

<h2>Conclusion</h2>

Using an app to generate the tax rate files is a quick and easy solution for streamlining the process, and the Python SDK worked flawlessly.  Using this app, the entire tax file can be generated overnight.

The process could be streamlined even further by importing already existing locations.  If a company had a limited number of locations it shipped to, or had a pre-prepared list of all locations, importing those into the app would further reduce run time.  For example, when importing locations to the app I was able to generate tax files averaging 0.87 seconds per file. That comes out to just under 10 hours to generate files for 41,000 locations.

