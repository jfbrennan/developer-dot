---
layout: page
title: 11.3 - Tax Content API
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h2>The Tax Content API Response</h2>

Avalara's Tax Content API provides businesses with the content required to calculate tax locally in a disconnected environment. The Content API response includes tax jurisdiction, tax rate, and product/service taxability information for each Tax Code and storefront Location configured in your AvaTax account.
To begin, let's take a look at the fields included in a Tax Content API response.

Here are the details for each field included in a Tax Content API response:

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>ScenarioId</th>
				<th>Field Description</th>
				<th>Sample Data</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>ScenarioId</td>
        <td>This field is used to group tax scenarios together. A tax scenario will consist of a single Location and single Tax Code</td>
        <td>1</td></tr><tr>
          <td>EffDate</td>
          <td>The date the tax information becomes effective</td>
          <td>4/1/2011 12:00:00 AM</td>
        </tr>
        <tr>
          <td>EndDate</td>
          <td>The date the tax information is no longer effective. Tax data is effective on this date, but is not effective on the following date</td>
          <td>
            <span>12/31/9999 12:00:00 AM</span>
          </td>
        </tr>
        <tr>
          <td>LocationCode</td>
          <td>Unique location identifier</td>
          <td>001</td>
        </tr>
        <tr>
          <td>TaxCode</td>
          <td>Avalara System Tax Code or Custom Tax Code</td>
          <td>P0000000</td>
        </tr>
        <tr>
          <td>ShipToCity</td>
          <td>The ship-to city</td>
          <td>Durham</td>
        </tr>
        <tr>
          <td>ShipToCounty</td>
          <td>The ship-to county</td>
          <td>DURHAM</td>
        </tr>
        <tr>
          <td>ShipToState</td>
          <td>The ship-to state</td>
          <td>NC</td>
        </tr>
        <tr>
          <td>ShipToPostalCode</td>
          <td>Postal code associated with the location address</td>
          <td>27707-1764</td>
        </tr>
        <tr>
          <td>ShipToCountry</td>
          <td>The ship-to country</td>
          <td>US</td>
        </tr>
        <tr>
          <td>JurisType</td>
          <td>The jurisdiction type. There are five supported values - Country, State, County, City, Special</td>
          <td>State</td>
        </tr>
        <tr>
          <td>JurisCode</td>
          <td>Unique numeric, alpha, or alphanumeric code identifying a jurisdiction. This field is optional</td>
          <td>001, EKTF0</td>
        </tr>
        <tr>
          <td>JurisName</td>
          <td>The name of the jurisdiction that corresponds to this tax record</td>
          <td>NORTH CAROLINA</td>
        </tr>
        <tr>
          <td>TaxType</td>
          <td>The tax type associated with the rate</td>
          <td>Sales</td>
        </tr>
        <tr>
          <td>Tax_Description</td>
          <td>The description of the tax</td>
          <td>NC STATE TAX</td>
        </tr>
        <tr>
          <td>Tax_Rate</td>
          <td>The tax rate. "0.03" corresponds to 3%. Exempt records will have a rate of 0.</td>
          <td>0.03</td>
        </tr>
        <tr>
          <td>Cap</td>
          <td>Applies a cap to the taxable amount. Amounts up to the cap are taxable. Amounts over the cap are non-taxable. The tax rate applies to the taxable amount.</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Threshold</td>
          <td>Applies a threshold to the taxable amount. Amounts up to and including the threshold are non-taxable. Amounts over the threshold are taxable. The tax rate applies to the taxable amount.</td>
          <td>100</td>
        </tr>
        <tr>
          <td>TaxRuleOptions</td>
          <td>Applies a special tax scenario rule to the transaction. There is only one supported value at this time: TaxAll. With a threshold, this rule taxes the entire amount once the total reaches the threshold</td>
          <td>TaxAll</td>
        </tr>
        <tr>
          <td>TaxApplicationLevel</td>
          <td>This field is not used at this time, but will be leveraged for tax-on-tax scenarios in the future. This field will define the order in which taxes are applied in a tax-on-tax scenario and the tax base for each individual tax</td>
          <td>N/A</td>
        </tr>
      </tbody>
	</table>  
</div>
<br/>

<h2>Consuming Tax Content</h2>

In order to calculate tax locally, you'll need to implement logic in your native POS application that can correctly interpret and calculate tax using the data from the Tax Content API. The next sections will review common uses cases for leveraging the Tax Content API results to calculate tax locally.

<h3>Thresholds & Caps</h3>

This section is about interpreting Cap & Threshold values included in Tax Content API results. By the end of this section, you will learn the following

<ul class="dev-guide-list">
  <li>How to interpret Threshold and Cap values</li>
  <li>How to interpret TaxRule Options associated with Cap and Threshold values</li>
</ul>

<h4>Thresholds</h4>

<h5>Assertions</h5>

Address: 82 Smith St, Providence, RI 02903-1105<br/>
Tax Code(s): PC040100

<h5>Expected API Result</h5>

<pre>
[
  {
      "ScenarioId": 1,
      "EffDate": "12/1/2013 12:00:00 AM",
      "EndDate": "12/31/9999 12:00:00 AM",
      "LocationCode": "RI001",
      "TaxCode": "PC040100",
      "ShipToCity": "Providence",
      "ShipToCounty": "PROVIDENCE",
      "ShipToState": "RI",
      "ShipToPostalCode": "02903-1105",
      "ShipToCountry": "US",
      "JurisType": "State",
      "JurisName": "RHODE ISLAND",
      "TaxType": "Sales",
      "Tax_Description": "RI STATE TAX",
      "Tax_Rate": 0.07,
      "Cap": "0",
      "Threshold": "250.000000",
      "TaxRuleOptions": "",
      "TaxApplicationLevel": ""
  }
]
</pre>
<br/>

As noted in Chapter 1, the Threshold field applies a threshold to the taxable amount. Amounts up to and including the threshold are non-taxable. Amounts over the threshold are taxable. The tax rate included in the API response applies to the taxable amount. In this example, the Threshold value is $250, meaning the products you associate with Tax Code PC040100 for this Location would not become taxable until they were sold for more than $250.

Let's look at a transaction where the LineAmount is $200.00

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>JurisdictionName</th>
				<th>LineAmount</th>
				<th>Tax Base</th>
        <th>Rate</th>
        <th>Tax</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>RHODE ISLAND</td>
        <td>$200.00</td>
        <td>$0.00</td>
        <td>0.07</td>
        <td>$0.00</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

No tax should be calculated because the LineAmount is below the $250.00 threshold state in the Tax Content API results.

Now, let's look at a transaction where the LineAmount is $300.00

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>JurisdictionName</th>
				<th>LineAmount</th>
				<th>Tax Base</th>
        <th>Rate</th>
        <th>Tax</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>RHODE ISLAND</td>
        <td>$300.00</td>
        <td>$50.00</td>
        <td>0.07</td>
        <td>$3.50</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

Tax was calculated against $50.00 of the LineAmount because that is the amount that exceeded the $250.00 threshold stated in the Tax Content API results.

<h4>Thresholds and TaxAll TaxRuleOption</h4>

<h5>Assertions</h5>

Location Address: 50 5th Ave, New York, NY 10118<br/>
Tax Code(s): PC040100

<h5>Expected API Result</h5>

Assuming nexus is configured for the state of New York, the Tax Content API will produce the following response for the asserted Address and Tax Code. The Tax Content API will return three records that share a single ScenarioId. These results represent the taxing jurisdictions and their associated tax rules and rates that are applicable to the Location and TaxCode specified in the results. These results should be used in conjunction with one another for the specified LocationCode and TaxCode.

<pre>
[
  {
      "ScenarioId": 1,
      "EffDate": "4/1/2011 12:00:00 AM",
      "EndDate": "12/31/9999 12:00:00 AM",
      "LocationCode": "NY001",
      "TaxCode": "PC040100",
      "ShipToCity": "New York",
      "ShipToCounty": "NEW YORK",
      "ShipToState": "NY",
      "ShipToPostalCode": "10118-0110",
      "ShipToCountry": "US",
      "JurisType": "City",
      "JurisName": "NEW YORK CITY",
      "TaxType": "Sales",
      "Tax_Description": "NY CITY TAX",
      "Tax_Rate": 0.045,
      "Cap": "0",
      "Threshold": "110.000000",
      "TaxRuleOptions": "TaxAll",
      "TaxApplicationLevel": ""
  },
  {
      "ScenarioId": 1,
      "EffDate": "4/1/2012 12:00:00 AM",
      "EndDate": "12/31/9999 12:00:00 AM",
      "LocationCode": "NY001",
      "TaxCode": "PC040100",
      "ShipToCity": "New York",
      "ShipToCounty": "NEW YORK",
      "ShipToState": "NY",
      "ShipToPostalCode": "10118-0110",
      "ShipToCountry": "US",
      "JurisType": "State",
      "JurisName": "NEW YORK",
      "TaxType": "Sales",
      "Tax_Description": "NY STATE TAX",
      "Tax_Rate": 0.04,
      "Cap": "0",
      "Threshold": "110.000000",
      "TaxRuleOptions": "TaxAll",
      "TaxApplicationLevel": ""
  },
  {
      "ScenarioId": 1,
      "EffDate": "4/1/2012 12:00:00 AM",
      "EndDate": "12/31/9999 12:00:00 AM",
      "LocationCode": "NY001",
      "TaxCode": "PC040100",
      "ShipToCity": "New York",
      "ShipToCounty": "NEW YORK",
      "ShipToState": "NY",
      "ShipToPostalCode": "10118-0110",
      "ShipToCountry": "US",
      "JurisType": "Special",
      "JurisName": "METROPOLITAN COMMUTER TRANSPORTATION DISTRICT",
      "TaxType": "Sales",
      "Tax_Description": "NY SPECIAL TAX",
      "Tax_Rate": 0.00375,
      "Cap": "0",
      "Threshold": "110.000000",
      "TaxRuleOptions": "TaxAll",
      "TaxApplicationLevel": ""
  }
]
</pre>
<br/>

In this example, the Threshold value is $110 for all three records meaning the products associated with PC040100 for this LocationCode would not become taxable until they were sold for $110.00 or more. Additionally, TaxRuleOptions field includes the "TaxAll" value. With TaxAll, the entire LineAmount becomes taxable once the threshold is met. This is different from the Rhode Island example in the previous section where the amount up to and including the Threshold was bucketed as exempt, while any amount over the Threshold was bucketed as taxable.

Let's look at a transaction where the LineAmount is $100.00

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>JurisdictionName</th>
				<th>LineAmount</th>
				<th>Tax Base</th>
        <th>Rate</th>
        <th>Tax</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>NEW YORK</td>
        <td>$100.00</td>
        <td>$0.00</td>
        <td>0.04</td>
        <td>$0.00</td>
      </tr>
      <tr>
        <td>NEW YORK CITY</td>
        <td>$100.00</td>
        <td>$0.00</td>
        <td>0.045</td>
        <td>$0.00</td>
      </tr>
      <tr>
        <td>METROPOLITAN COMMUTER TRANSPORTATION DISTRICT</td>
        <td>$100.00</td>
        <td>$0.00</td>
        <td>0.00375</td>
        <td>$0.00</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

No tax was calculated because the LineAmount was below the $110.00 threshold state in the Tax Content API results.

Now, let's look at a transaction where the LineAmount is $125.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>JurisdictionName</th>
				<th>LineAmount</th>
				<th>Tax Base</th>
        <th>Rate</th>
        <th>Tax</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>NEW YORK</td>
        <td>$125.00</td>
        <td>$125.00</td>
        <td>0.04</td>
        <td>$5.00</td>
      </tr>
      <tr>
        <td>NEW YORK CITY</td>
        <td>$125.00</td>
        <td>$125.00</td>
        <td>0.045</td>
        <td>$5.63</td>
      </tr>
      <tr>
        <td>METROPOLITAN COMMUTER TRANSPORTATION DISTRICT</td>
        <td>$125.00</td>
        <td>$125.00</td>
        <td>0.00375</td>
        <td>$0.47</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

Tax was calculated against the entire LineAmount because the LineAmount exceeded the Threshold value and the TaxAll TaxRuleOption was applicable.

<h4>Caps</h4>

<h5>Assertions</h5>

Location Address: 201 Criser Hall, Gainsville, FL 32611<br/>
Tax Code(s): P0000000

<h5>Expected API Result</h5>

Assuming nexus is configured for the state of Florida, the Tax Content API will produce the following response for the asserted Address and Tax Code. The Tax Content API will return two records that share a single ScenarioId. These results represent the taxing jurisdictions and their associated tax rules and rates that are applicable to the Location and TaxCode specified in the results. These results should be used in conjunction with one another for the specified LocationCode and TaxCode.

<pre>
[
  {
      "ScenarioId": 1,
      "EffDate": "1/1/2017 12:00:00 AM",
      "EndDate": "12/31/9999 12:00:00 AM",
      "LocationCode": "FL",
      "TaxCode": "P0000000",
      "ShipToCity": "GAINESVILLE",
      "ShipToCounty": "ALACHUA",
      "ShipToState": "FL",
      "ShipToPostalCode": "32611-4000",
      "ShipToCountry": "US",
      "JurisType": "County",
      "JurisName": "ALACHUA",
      "TaxType": "Sales",
      "Tax_Description": "FL COUNTY TAX",
      "Tax_Rate": 0.005,
      "Cap": "5000.000000",
      "Threshold": "0.000000",
      "TaxRuleOptions": "",
      "TaxApplicationLevel": ""
  },
  {
      "ScenarioId": 1,
      "EffDate": "1/1/2017 12:00:00 AM",
      "EndDate": "12/31/9999 12:00:00 AM",
      "LocationCode": "FL",
      "TaxCode": "P0000000",
      "ShipToCity": "GAINESVILLE",
      "ShipToCounty": "ALACHUA",
      "ShipToState": "FL",
      "ShipToPostalCode": "32611-4000",
      "ShipToCountry": "US",
      "JurisType": "State",
      "JurisName": "FLORIDA",
      "TaxType": "Sales",
      "Tax_Description": "FL STATE TAX",
      "Tax_Rate": 0.06,
      "Cap": "0.000000",
      "Threshold": "0.000000",
      "TaxRuleOptions": "",
      "TaxApplicationLevel": ""
  }
]
</pre>
<br/>

In this example, the Cap value is Null for the State record and is $5,000 for the County record. In this scenario, the State rate applies to the entire LineAmount, while the County rate only applies to the first $5,000 of the LineAmount, "capping" the tax amount.

Let's look at a transaction where the LineAmount is $4,500.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>JurisdictionName</th>
				<th>LineAmount</th>
				<th>Tax Base</th>
        <th>Rate</th>
        <th>Tax</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>FLORIDA</td>
        <td>$4,500.00</td>
        <td>$4,500.00</td>
        <td>0.06</td>
        <td>$270.00</td>
      </tr>
      <tr>
        <td>ALACHUA</td>
        <td>$4,500.00</td>
        <td>$4,500.00</td>
        <td>0.005</td>
        <td>$22.50</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

Tax was calculated on the full LineAmount for the State because there was no Cap stated in the Tax Content API results.

Tax was calculated on the full LimeAmount for the County because the LineAmount was below the $5,000 Cap stated in the Tax Content API results.

Now, let's look at a transaction where the LineAmount is $7,000.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>JurisdictionName</th>
				<th>LineAmount</th>
				<th>Tax Base</th>
        <th>Rate</th>
        <th>Tax</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>FLORIDA</td>
        <td>$7,000.00</td>
        <td>$7,000.00</td>
        <td>0.06</td>
        <td>$420.00</td>
      </tr>
      <tr>
        <td>ALACHUA</td>
        <td>$7,000.00</td>
        <td>$5,000.00</td>
        <td>0.005</td>
        <td>$25.00</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

Tax was again calculated on the full LineAmount for the State because there was no Cap stated in the Tax Content API results.

Tax was only calculated on the first $5,000 for the county because the LineAmount exceeded the $5,000 Cap stated in the Tax Content API results.  

<h3>Sales Tax Holidays</h3>

Many states offer annual sales tax holidays, providing a reduction or elimination of sales tax on specific categories of products for a short period of time. This section is about interpreting Tax Content API results for Sales Tax Holidays. By the end of this section, you will learn the following:

<ul class="dev-guide-list">
  <li>How to interpret Sales Tax Holidays results</li>
  <li>How to differentiate between Sales Tax Holiday results and normal tax content results</li>
</ul>

<h4>Sales Tax Holiday Results</h4>

<h5>Assertions</h5>

Address: 2501 4th Ave, Canyon, TX 79016-0001<br/>
Tax Code(s): PC040100 <br/>
DocumentDate: 8/10/2017, 8/11/2017

<h5>Expected API Result</h5>

Assuming nexus is configured for the state of Texas, the Tax Content API will produce the following responses for the asserted Address, Tax Code, and DocumentDates. The Tax Content API will return two records in each response that share a single ScenarioId. These results represent the taxing jurisdictions and their associated tax rules and rates that are applicable to the Location and TaxCode specified in the results. These results should be used in conjunction with one another for the specified LocationCode and TaxCode.

<strong>DocumentDate: 8/10/2017</strong>

<pre>
[
    {
        "ScenarioId": 1,
        "EffDate": "8/1/2010 12:00:00 AM",
        "EndDate": "12/31/9999 12:00:00 AM",
        "LocationCode": "TX",
        "TaxCode": "PC040100",
        "ShipToCity": "Canyon",
        "ShipToCounty": "RANDALL",
        "ShipToState": "TX",
        "ShipToPostalCode": "79016-0001",
        "ShipToCountry": "US",
        "JurisType": "City",
        "JurisName": "CANYON",
        "TaxType": "Sales",
        "Tax_Description": "TX CITY TAX",
        "Tax_Rate": 0.02,
        "Cap": "0",
        "Threshold": "0",
        "TaxRuleOptions": "",
        "TaxApplicationLevel": ""
    },
    {
        "ScenarioId": 1,
        "EffDate": "8/1/2010 12:00:00 AM",
        "EndDate": "12/31/9999 12:00:00 AM",
        "LocationCode": "TX",
        "TaxCode": "PC040100",
        "ShipToCity": "Canyon",
        "ShipToCounty": "RANDALL",
        "ShipToState": "TX",
        "ShipToPostalCode": "79016-0001",
        "ShipToCountry": "US",
        "JurisType": "State",
        "JurisName": "TEXAS",
        "TaxType": "Sales",
        "Tax_Description": "TX STATE TAX",
        "Tax_Rate": 0.0625,
        "Cap": "0",
        "Threshold": "0",
        "TaxRuleOptions": "",
        "TaxApplicationLevel": ""
    }
]
</pre>
<br/>

<strong>DocumentDate: 8/11/2017</strong>

<pre>
[
    {
        "ScenarioId": 1,
        "EffDate": "8/11/2017 12:00:00 AM",
        "EndDate": "8/13/2017 12:00:00 AM",
        "LocationCode": "TX",
        "TaxCode": "PC040100",
        "ShipToCity": "Canyon",
        "ShipToCounty": "RANDALL",
        "ShipToState": "TX",
        "ShipToPostalCode": "79016-0001",
        "ShipToCountry": "US",
        "JurisType": "City",
        "JurisName": "CANYON",
        "TaxType": "Sales",
        "Tax_Description": "TX CITY TAX",
        "Tax_Rate": 0.02,
        "Cap": "0",
        "Threshold": "100.000000",
        "TaxRuleOptions": "TaxAll",
        "TaxApplicationLevel": ""
    },
    {
        "ScenarioId": 1,
        "EffDate": "8/11/2017 12:00:00 AM",
        "EndDate": "8/13/2017 12:00:00 AM",
        "LocationCode": "TX",
        "TaxCode": "PC040100",
        "ShipToCity": "Canyon",
        "ShipToCounty": "RANDALL",
        "ShipToState": "TX",
        "ShipToPostalCode": "79016-0001",
        "ShipToCountry": "US",
        "JurisType": "State",
        "JurisName": "TEXAS",
        "TaxType": "Sales",
        "Tax_Description": "TX STATE TAX",
        "Tax_Rate": 0.0625,
        "Cap": "0",
        "Threshold": "100.000000",
        "TaxRuleOptions": "TaxAll",
        "TaxApplicationLevel": ""
    }
]
</pre>

In this example, we have two API calls, one with a DocumentDate of 8/10/2017 and another with a DocumentDate of 8/11/2017. You'll notice, the results of these API calls are different. Specifically, the range of the Effective and End Dates of the second API result fall in between the Effective and End Dates of the first.

If a transaction occurred on or before 8/10/2017, the first response would be applicable because it falls outside of the date range for the SalesTax Holiday Content.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>EffDate</th>
				<th>EndDate</th>
				<th>JurisName</th>
        <th>Tax_Rate</th>
        <th>Cap</th>
        <th>Threshold</th>
        <th>TaxRuleOptions</th>
			</tr>
		</thead>
    <tbody>
      <tr style="background-color:#FFD;">
        <td>8/1/2010</td>
        <td>12/31/9999</td>
        <td>TEXAS</td>
        <td>0.0625</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      <tr style="background-color:#FFD;">
        <td>8/1/2010</td>
        <td>12/31/9999</td>
        <td>CANYON</td>
        <td>0.002</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      <tr>
        <td>8/11/2017</td>
        <td>08/13/2017</td>
        <td>TEXAS</td>
        <td>0.0625</td>
        <td>0</td>
        <td>100.00</td>
        <td>TaxAll</td>
      </tr>
      <tr>
        <td>8/11/2017</td>
        <td>08/13/2017</td>
        <td>CANYON</td>
        <td>0.0625</td>
        <td>0</td>
        <td>100.00</td>
        <td>TaxAll</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

If a transaction occurred between 8/11/2017 and 8/13/2017, the second response would be applicable and the Threshold and TaxRuleOptions should be applied.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>EffDate</th>
				<th>EndDate</th>
				<th>JurisName</th>
        <th>Tax_Rate</th>
        <th>Cap</th>
        <th>Threshold</th>
        <th>TaxRuleOptions</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>8/1/2010</td>
        <td>12/31/9999</td>
        <td>TEXAS</td>
        <td>0.0625</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      <tr>
        <td>8/1/2010</td>
        <td>12/31/9999</td>
        <td>CANYON</td>
        <td>0.002</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      <tr style="background-color:#FFD;">
        <td>8/11/2017</td>
        <td>08/13/2017</td>
        <td>TEXAS</td>
        <td>0.0625</td>
        <td>0</td>
        <td>100.00</td>
        <td>TaxAll</td>
      </tr>
      <tr style="background-color:#FFD;">
        <td>8/11/2017</td>
        <td>08/13/2017</td>
        <td>CANYON</td>
        <td>0.0625</td>
        <td>0</td>
        <td>100.00</td>
        <td>TaxAll</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

If a transaction occurred after 8/14/2017, the first response would again be applicable because it falls outside of the date range for the SalesTax Holiday Content.

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>EffDate</th>
				<th>EndDate</th>
				<th>JurisName</th>
        <th>Tax_Rate</th>
        <th>Cap</th>
        <th>Threshold</th>
        <th>TaxRuleOptions</th>
			</tr>
		</thead>
    <tbody>
      <tr style="background-color:#FFD;">
        <td>8/1/2010</td>
        <td>12/31/9999</td>
        <td>TEXAS</td>
        <td>0.0625</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      <tr style="background-color:#FFD;">
        <td>8/1/2010</td>
        <td>12/31/9999</td>
        <td>CANYON</td>
        <td>0.002</td>
        <td>0</td>
        <td>0</td>
        <td></td>
      </tr>
      <tr>
        <td>8/11/2017</td>
        <td>08/13/2017</td>
        <td>TEXAS</td>
        <td>0.0625</td>
        <td>0</td>
        <td>100.00</td>
        <td>TaxAll</td>
      </tr>
      <tr>
        <td>8/11/2017</td>
        <td>08/13/2017</td>
        <td>CANYON</td>
        <td>0.0625</td>
        <td>0</td>
        <td>100.00</td>
        <td>TaxAll</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

The Tax Content API only supports a single DocumentDate per API call, but users are able to call the API with a post-dated DocumentDate to retrieve content that will be effective in the future.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
