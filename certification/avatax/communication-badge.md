---
layout: default
title: AvaTax Communications Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/COMMS.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara Communications Badge Requirements</h2>
      <!--<h3>Do we want to say anything here?</h3>-->
      
      <hr>
        <h3>Administration/Utilities Integration</h3>
            <h5>Validate ability to associate materials/products to AFC Transaction Service type pair (T/S pair) - <em>Required</em></h5>
                <p class="badgerequirement">You should be able to run a transaction with valid AFC T/S pair.<br>
                How AFC T/S pairs are aligned to material/product in source system.
                </p>
            
            <h5>Validate process to determine Jurisdiction(s) - <em>Required</em></h5>
                <p class="badgerequirement">You should be able to obtain correct Pcode/FIPS/NPaNxx for the jurisdiction. For example, ability to obtain correct Pcode using ZipToPCode API.<br>
                Display the correct Pcode for the jurisdiction.
                </p>
                
            <h5>Validate Company specific data in AFC transactional inputs - <em>Required</em></h5>
                <p class="badgerequirement">You should have the ability to pass through all types of inputs through with transactions:</p>
                    <ul class="normal">
                        <li>Service Class: Primary Local or Primary Long Distance.</li>
                        <li>Regulated or Unregulated.</li>
                        <li>Customer Type: Business, Residential, Industrial, Senior Citizen.</li>
                        <li>business Class: ILEC, CLEC, or Other.</li>
                        <li>Facilities Based.</li>
                        <li>Franchise.</li>
                        <li>Sale Type.</li>
                        <li>Company Identifier.</li>
                    </ul>
                <p class="badgerequirement">Display the correct pcode for the jurisdiction.</p>
            
            <h5>Validate execution of base calculate tax function - <em>Required</em></h5>
                <p class="badgerequirement">You should be able to submit basic transactions with required data values. For example, ability to calculate taxes using CalcTaxesWithPcode API call and get correct tax results.<br>
                Display in source system how each of the input values are configured and passed to the API fields.<br>
                Demonstrate results in source system based upon different input parameters required for a basic transaction.
                </p>
                
            <h5>Validate Company specific data in AFC transactional inputs - <em>Required</em></h5>
                <p class="badgerequirement">You should be able to submit basic transaction with required data values. For example, ability to calculate taxes using CalcTaxesWithPcode API call and get correct tax results.<br>
                Display in source system how each of the input values are configured and passed to the API fields.<br>
                Demonstrate results in source system based upon different input parameters required for a basic transaction.
                </p>
            
            <h5>Validate Adjustment handling - <em>Required</em></h5>
                <p class="badgerequirement">Ability to use an adjustment call for a normal transaction.<br>
                Ability to apply adjustment call for current/previous month transactions.<br>
                You should be able to submit adjustment transactions. For example, ability to apply adjustments using CalcAdjWithPcode API call and get correct tax results.<br>
                Pre API call setup and display adjustment results in source system.
                </p>
                
            <h5>Validate Exemption handling - <em>Required</em></h5>
                <p class="badgerequirement">Ability to handle specific exemptions<br>
                Ability to handle category exemptions</p>
                
            <h5>Ability to handle level exemptions - <em>optional</em><br>
                <p class="badgerequirement">You should be able to submit transactions with exemption information for Level, category, and specific exemption. The results should reflect the exempted taxes.<br>
                For example, Ability to submit Tax exemption[] along with Transaction[] using CalcTaxesWithPcode API call and verify correct tax results.<br>
                Display Pre API setup and execute transaction without exemption, displaying results in originating system.<br>
                Display Pre API setup with level exemptions and execute transaction, displaying results in originating system.<br>
                Display Pre API setup with specify exemptions and execute transaction, displaying results in originating system.<br>
                Display Pre API setup with category exemptions and execute transaction, displaying results in originating system.
                </p>
            
            <h5>Validate Invoice transaction (Customer Mode) - <em>Required</em></h5>
                <p class="badgerequirement">Batch customer mode.<br>
                Transaction Customer Mode.	User should be able to submit invoice mode/customer mode transactions and received results from API service For example, Ability to submit a single transaction to be processed for a customer batch using "CalcCustTaxes" API and verify results using "ProcessCustomerbatch" API.<br>
                Show API setup in Invoice mode and execute transaction, displaying results in source system.<br>
                Show API setup in Batch mode and execute transaction, displaying results in source system.
                </p>
                
            <h5>Validate Batch Invoice/Customer Mode Adjustment handling - <em>Required</em></h5>
                <p class="badgerequirement">How to apply adjustment to current batch/previous batch.<br>
                Ability to use an adjustment call for batch transaction.<br>
                User should be able to submit invoice mode/customer mode adjustment transactions and received results from API service. For example, ability to submit a single adjustment transaction to be processed for a customer batch using "CalcCustAdj" API and verify results using "ProcessCustomerbatch" API.<br>
                Show API setup in Invoice mode and execute adjustment transaction, displaying results in source system.<br>
                Show API setup in Batch mode and execute adjustment transaction, displaying results in source system.
                </p>
            
            <h5>Validate ability to pass a single channel line and a multi-channel line - <em>Required</em></h5>
                <p class="badgerequirement">Ability to pass following line transactions together for system to return taxes.<br>
                Local/PBX Trunk, Local/PBX Extension, Local/PBX outbound channel.<br>
                Ability to pass following Trunk transactions together<br>
                Local/Centrex/DID Extension, Local/Centrex Trunk, Local/Centrex, outbound Channel.<br>
                Ability to pass following channel transactions together<br>
                Local/High Capacity Trunk Bundle, Local/High Capacity Extension Bundle,Local/High Capacity Outbound Channel Bundle.<br>
                Display API set and execute transaction, showing results in source system.
                </p>
                
            <h5>Validate ability to treat common AFC returned exceptions - <em>Required</em></h5>
                <p class="badgerequirement">Invalid Address<br>
                No Jurisdiction found<br>
                Ability to distinguish between these exceptions and how to handle these:<br>
                Display error code
                </p>
      