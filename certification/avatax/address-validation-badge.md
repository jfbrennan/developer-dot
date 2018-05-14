---
layout: default
title: AvaTax Address Validation Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/AddressValidation.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Address Validation Badge Requirements</h2>
      <!--<h3>Do we want to say anything here?</h3>-->
      
      <hr>
        <h3>Administration/Utilities Integration</h3>
            <h5>Disable address validation option - <em>Required</em></h5>
                <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                
            <h5>Standardize and correct Address input - <em>Required</em></h5>
                <p class="badgerequirement">Providing the ability to standardize and correct the address information and optionally Accept or Ignore the recommended changes from AvaTax.</p>
            
            <h5>Address Validation for North American Addresses Only - <em>Required</em></h5>
                <p class="badgerequirement">Avalara Address Validation endpoint only works with US and Canadian Addresses. Do not call the service for other countries.</p>
                
            <h5>Disable address validation during order entry option - <em>Conditional</em></h5>
                <p class="badgerequirement">The Seller should be able to disable or enable address validation during order entry in the config screen.</p>
                <p class="badgerequirement"><small>If address validation is automatic, merchant must have option to disable this function.</small></p>
            
            <h5>Have an option to return Address Validation results in upper or lower case - <em>Suggested</em></h5>
                <p class="badgerequirement">Avalara Address Validation provides an option for the returning results in upper or lower case.</p>
                
            <h5>Batch Validation Utility/Process - <em>Suggested</em></h5>
                <p class="badgerequirement">Once an address has been Validated (optionally standardized and corrected), recommend marking the address as Validated.</p>
                
            <h5>Implement an Is Dirty Flag on Addresses in your Application - <em>Suggested</em></h5>
                <p class="badgerequirement">Keep track if making a call to Address Validation is even necessary.</p>
            
            <h5>Capture Address Type - <em>Suggested</em></h5>
                <p class="badgerequirement">Does address validation capture address type Business/ Home / ETC.</p>
        <hr>
        
        <h3>Address Validation Touchpoints</h3>
            <h5>Send required header level data elements - <em>Required</em></h5>
                <p class="badgerequirement">Destination Address<br>
                Origin Address</p>
            
            <h5>Send optional line (detail) level data elements – Destination address - <em>Suggested</em></h5>
                <p class="badgerequirement">If items are being shipped to multiple destinations.</p>
                
            <h5>Send optional line (detail) level data elements – Origin address - <em>Suggested</em></h5>
                <p class="badgerequirement">If items are being shipped from multiple locations.</p>
        <hr>
        
        <h3>Server Audit Clarity</h3>
            <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>