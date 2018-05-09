---
layout: default
title: AvaTax Customs Duty & Import Tax Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/CustomsDutyImportTax.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Customs Duty & Import Tax Badge Requirements</h2>
      <h3>Prerequisite - Avalara Certified for Sales Tax</h3>
      
      <hr>
      <h3>Additional Requirements</h3>
        <h5>HS Code  - <em>Required</em></h5>
            <p class="badgerequirement">The harmonized classification code of the product. Verify within app HTS can vary by Country.</p>
            
        <h5>ShippingMode   - <em>Suggested</em></h5>
            <p class="badgerequirement">Shipping method (ocean, air, ground)</p>
            
        <h5>Shipping - <em>Required</em></h5>
            <p class="badgerequirement">Cost of shipping with appropriate Avalara Goods and Service code.</p>
            
        <h5>IsSellerImporterOfRecord - <em>Suggested Conditional</em></h5>
            <p class="badgerequirement">Setting is defaulted and set in Sellers AvaTax Tax Profile; however there are use cases where Sellers will may want to provide a transactional option by Buyer or even at an individual transaction level to over ride the Tax Profile settings.</p>

        <h5>net_weight (aka Unit) - <em>Required / Conditional</em></h5>
            <p class="badgerequirement">Required if the tariff code requires it as a specific unit of measure to determine the customs duty rate (sometimes the rate is assessed per the weight).</p>
            
        <h5>mass_unit (aka Unit of Measure) - <em>Required / Conditional</em></h5>
            <p class="badgerequirement">Required if the tariff code requires it as a specific unit of measure to determine the customs duty rate (sometimes the rate is assessed per the weight).</p>
            
        <h5>Pref program indicator - <em>Suggested</em></h5>
            <p class="badgerequirement">Only required if the customer knows that the item qualifies for a preference program. <strong>We currently only support preference program NAFTA</strong>. This indicator will tell our calculator to use the NAFTA preferred customs duty rate rather than the standard duty rate in the calculation.</p>
            
        <h5>Express ship method - <em>Suggested</em></h5>
            <p class="badgerequirement">If shipment method selected is an express shipment, set flag true.<br>
               <code> "name": "AvaTax.LandedCost.Express",<br>
                "dataType": "Boolean",<br>
                "description": "Is Shipping method."</code>
            </p>
            
        <h5>Preference Program - <em>Suggested</em></h5>
            <p class="badgerequirement">NAFTA is currently the only trade preference supported. This is only one trade preference program per HS Country combination.</p>