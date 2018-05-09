---
layout: default
title: AvaTax Tax Content Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/taxcontent.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Tax Content Badge Requirements</h2>
      <h3>Prerequisite - Avalara Certified for Sales Tax</h3>
      
      <hr>
      
      <p>Avalara strategy for transaction tax calculation for Point-of-Sale (POS) applications includes two primary models:
        <ul class="normal">
            <li>100% connected, direct call to AvaTax</li>
            <li>Hybrid, provide tax content for in-store, disconnected transactions & direct call to AvaTax for send sales</li>
        </ul>
        This document provides requirements and business process flow for the Hybrid model, specifically the requirements and flow for requesting AvaTax tax content, consuming the content, and generating a transaction feed from the POS application to AvaTax for all sales activity using the POS disconnected tax calculation. The 100% connected model noted above is designed and developed in a similar fashion as an eCommerce application.</p>
        
        <h3>Requirements</h3>
        <p>Avalara shall generate tax content in a standard format providing a data feed that is consumed by the POS application supporting its native tax functionality. The tax content feed shall be tailored to each Avalara AvaTax client. The tax content data shall include, at a minimum, tax jurisdiction, tax rate and product/service taxability information for each brick & mortar store location.</p>
        
        <p>The merchant shall provide the following information facilitating the generation of its tax content feed:
            <ul class="normal">
                <li>Nexus information – nexus selections made by the merchant on its AvaTax account shall provide this information</li>
                <li>Store Location(s) – the merchant must define each of its brick & mortar stores as AvaTax Location Codes with a Location Category of Storefront</li>
                <li>Tax Code(s) – the merchant must select the AvaTax Tax Codes (Goods & Services Type) applicable for its product catalog</li>
            </ul>
        The POS application shall call AvaTax for the tax content feed. The Development Solution Partner (DSP) is responsible for transforming the tax content data into a format compatible with the application’s tax tables and loading the transformed data into the application’s tax tables.</p>
        
        <p>The DSP is responsible for capturing POS transaction data calculated using the AvaTax tax content and submitting, via transaction feed, to the merchant’s AvaTax account. The DSP shall:
            <ul class="normal">
                <li>Capture transaction data from POS application
                    <ul class="normal">
                        <li>Daily</li>
                        <li>Weekly</li>
                        <li>Monthly</li>
                        <li>On Demand</li>
                    </ul>
                </li>    
                <li>Transform transaction data into standard AvaTax transaction format</li>
                <li>Submit Transformed transaction data into AvaTax</li>
            </ul></p>
            
            <h3>Business Process Flow - Tax Content Request</h3>
            <p>The AvaTax tax content request process is defined as follows:
                <ol class="normal">
                    <li>Merchant configures its AvaTax account via the AvaTax Website:
                        <ul class="normal">
                            <li>Define Nexus Selections</li>
                            <li>Setup each brick and mortar store location as Location Code 
                                <ul class="normal">
                                    <li>Complete street level address required</li>
                                    <li>Storefront Location Category required</li>
                                </ul>
                            </li>
                            <li>Merchant selects AvaTax Tax Codes (Goods & Services types), and records desired Tax Codes locally in the POS application that sends tax content requests to AvaTax</li>
                        </ul>
                    </li>
                    <li>Merchant defines tax content request schedule via the integration in its POS application
                        <ul class="normal">
                            <li>Suggested frequency: Daily
                                <ul class="normal">
                                    <li>AvaTax integration in the POS application makes tax content request to AvaTax</li>
                                    <li>AvaTax collects Location Code and Tax Code information, generates requested tax content, and sends response, response can be packaged</li>
                                </ul>
                            </li>
                            <li>File format - CSV or XML
                                <ul class="normal">
                                    <li>AvaTax integration un-packages tax content in response, and consumes tax content for local tax calculation</li>
                                    <li>Merchant adds new brick & mortar store location, and can request tax content selectively for one or more Location Codes</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
<hr>
      <h3>Tax Content Request - Disconnected</h3>
        <h5>Send API tax content request with required data elements   - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Company Code</li>
                    <li>Document Date</li>
                    <li>Tax Codes</li>
                    <li>Location Codes</li>
                </ul>
            </p>
            
        <h5>Capture Tax Content response and transform content into application compatible format - <em>Required</em></h5>
            <p class="badgerequirement">The transformation requirement mandates making the Tax Content response, in either JSON, CSV or XML format, and convert it into the import-ready format for tax content, including:
                <ul class="normal">
                    <li>Transform Tax Jurisdiction content to application tax schedule/tax item format</li>
                    <li>Transform Tax Rate content to application tax schedule/tax item format</li>
                    <li>Transform Tax Code content to application product/service taxability format</li>
                </ul>
            </p>
            
        <h5>Load application-compatible tax content into application and distribute to store locations - <em>Required</em></h5>
            <p class="badgerequirement">Suggest leveraging existing application import and distribution functionality when available.</p>
            
        <h5>Store AvaTax Location Codes associated with merchant's brick & mortar sites in application - <em>Required</em></h5>
            <p class="badgerequirement">Location Codes retrieved by integration for use in Tax Content request.</p>
            
        <h5>Store AvaTax Tax Codes selected by merchant in application - <em>Required</em></h5>
            <p class="badgerequirement">Tax Codes retrieved by integration for use in Tax Content request.</p>
            
        <h5>Schedule Tax Content Request job - <em>Required</em></h5>
            <p class="badgerequirement">Suggest leveraging existing application scheduling functionality when available.</p>
    <hr>
       <h3>Transaction Upload - Disconnected </h3>     
        <h5>Capture complete sales transaction and transform into AvaTax transaction import format - <em>Required</em></h5>
            <p class="badgerequirement">The following link provides comprehensive set of information concerning AvaTax transaction import - <a href="https://help.avalara.com/000_Avalara_AvaTax/Add_or_Import_Transactions" target="_blank">Add or Import Transactions.</a></p>
            
        <h5>Submit transaction import file to AvaTax service for upload - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Use Avalara Batch Services API</li>
                    <li><code>LocationCode</code> required</li>
                    <li>Lane Code Required</li>
                    <li>Provide error handling capability</li>
                </ul>
            </p>
        <h5>Schedule transaction upload job - <em>Required</em></h5>
            <p class="badgerequirement"> Suggest leveraging existing application scheduling functionality when available.
    <hr>
    
       <h3>Transaction Upload – Disconnected</h3>
        <h5>Capture complete sales transaction and transform into AvaTax transaction import format - <em>Required</em></h5>
            <p class="badgerequirement">The following link provides comprehensive set of information concerning AvaTax transaction import - <a href="https://help.avalara.com/000_Avalara_AvaTax/Manage_Transactions/Add_or_Import_Transactions" target="_blank">Avalara Help Center - Add or Import Transactions.</a></p>
            
        <h5>Submit transaction import file to AvaTax service for upload - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Use Avalara Batch Services API</li>
                    <li>Location Code required</li>
                    <li>Lane Code required</li>
                    <li>Provide error handling capability</li>
                    <li>Batch Import must use Process code 1 (Import without a calculation)</li>
                </ul>
            </p>
            
        <h5>Schedule transaction upload job - <em>Required</em></h5>
            <p class="badgerequirement">Suggest leveraging existing application scheduling functionality when available.</p>
    <hr>
    
       <h3>Tax Calculation Tests - Disconnected</h3>
        <h5>Calculate tax applying tax threshold - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>New York apparel – Tax Code PC040100 - $110 single item threshold</li>
                    <li>Massachusetts apparel – Tax Code PC040100 - $175 single item threshold</li>
                </ul>
            </p>
            
        <h5>Calculate tax applying tax cap - <em>Required</em></h5>
            <p class="badgerequirement">Florida $5,000 county surcharge cap – Tax Code P0000000</p>
            
        <h5>Calculate tax applying tiered tax - <em>Required</em></h5>
            <p class="badgerequirement">Tennessee $1,600/$3,200 tiers – Tax Code P0000000</p>
    <hr>
    
       <h3>Tax Calculation Failover - Connected to Disconnected</h3>
        <h5>Automatically revert to disconnected mode when online tax service is unavailable - <em>Required</em></h5>
            <p class="badgerequirement">When transacting in a connected mode, and the online tax service becomes unavailable, automatically revert to disconnected calculation mode or alert the user to take action.</p>