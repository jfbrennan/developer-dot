---
layout: default
title: AvaTax VAT Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/VAT.SVG" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax VAT Badge Requirements</h2>
      <h3>Prerequisite - Avalara Certified for Sales Tax</h3>
		<p><small>*Avalara is expanding VAT functionality available within the AvaTax service. The complete set of requirements needed to achieve the VAT badge are in progress.</small></p>

      
      <hr>
      <h3>Additional Requirements - Customer Record Integration</h3>
        <h5>Business identification No. - <em>Required</em></h5>
            <p class="badgerequirement">Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.  Some applications may not carry that information onto the transaction itself, and the connector may have to pull directly from the customer record.</p>
            
        <!-- Commenting out the following criteria until expanded VAT capabilities are rolled out.
        <h5>EU VAT Simplification Support  - <em>Suggested</em></h5>
            <p class="badgerequirement"><code>Yes/No toggle? <-- WHAT DO WE PUT HERE?</code></p>
            
        <h5>Global Tax Calc - Handling Place of supply   - <em>Suggested</em></h5>
            <p class="badgerequirement"><code>Yes/No toggle? <-- WHAT DO WE PUT HERE?</code></p>
            End Comment -->
    <hr>
       
       <h3>Additional Requirements – Transaction Processing Integration</h3>    
        <h5>Country Code (2 digit ISO code)   - <em>Required</em></h5>
            <p class="badgerequirement">The country code associated with the various addresses stored on the transaction must be sent. This information should not have to be sourced from the customer record.</p>
            
        <h5>Currency Code  - <em>Required</em></h5>
            <p class="badgerequirement">Transaction currency code – AvaTax needs to know the currency the document is transacted in, not the default currency information.</p>
            
        <h5>Ship-to address, including country code  - <em>Required</em></h5>
            <p class="badgerequirement">Ship-to address must contain country code.</p>
            
        <h5>Ship-from address, including country code  - <em>Required</em></h5>
            <p class="badgerequirement">Ship-from address must include country code.</p>
            
        <h5>EU Invoice Messaging  - <em>Suggested</em></h5>
            <p class="badgerequirement">Option to display messaging returned by the AvaTax engine on customer invoice.</p>
            
        <h5>Is Seller Importer of Record  - <em>Suggested</em></h5>
            <p class="badgerequirement">Is the merchant/seller the importer of record for this transaction.</p>