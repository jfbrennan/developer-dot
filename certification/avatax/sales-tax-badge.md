---
layout: default
title: AvaTax Sales Tax Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/SALESTAX.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Sales Tax Badge Requirements</h2>
     <!--<h3>Do we want to say anything here?</h3>-->
      
      <hr>

   <h3>Administration & Utilities</h3>
        <h5>AvaTax configuration window - <em>Required</em></h5>
            <p class="badgerequirement">The AvaTax Configuration Dialog Window must allow the user to specify the configuration/connection information</p>
            <ul class="normal">
                <li>Account Number</li>
                <li>License Key</li>
                <li>Service URL</li>
                <li><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/" target="_blank">Company Code Lookup</a></li>
            </ul>
    
        <h5>AvaTax Test Connect Button - <em>Required</em></h5>
             <p class="badgerequirement">Test the connection to the AvaTax service and verify the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax Service.</p>
    
        
        <h5>Control - Disable Document Recording - <em>Required</em></h5>
            <p class="badgerequirement">In order for this connector to be used in conjunction with other integrations to AvaTax, the user must be able to control which connector is used for recording documents to AvaTax. From a technical standpoint, simply use <code>DocType: 'SalesOrder'</code> on all calls and suppress any non-getTax calls (i.e. cancelTax, postTax).</p>
            <p class="badgerequirement"><small>Note: Other documentation may refer to Document Committing, this is interchangeable with Document Recording</small></p>
            
        <h5>Disable AvaTax Option - <em>Required</em></h5>
            <p class="badgerequirement">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</p>
            
        <h5>Enable client side logging - <em>Required</em></h5>
            <p class="badgerequirement">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time. We need the complete request/response for each call made to Avalara services. It does not need to run all the time as we understand the database will grow unnecessarily large – you are free to only log the last week, 30 days, custom, or have a control for the next N hours, etc. The spirit of the requirement is to assist customers and support in troubleshooting exercises, so it needs to be retrievable by an end user (or an administrator). It should be specifically Avalara service calls.</p>
            
        <h5>Request time out definition - <em>Suggested</em></h5>
            <p class="badgerequirement">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</p>
            
        <h5>Display Prices with Tax Included - <em>Conditional</em></h5>
            <p class="badgerequirement">Enable the tax inclusive flag in the GetTax Request.</p>
            <p class="badgerequirement"><small>Option to display prices with tax included is required for VAT badge.</small></p>
            
        <h5>Enable AvaTax UPC - <em>Suggested</em></h5>
            <p class="badgerequirement">When set to true: pass in UPC code into the Avalara ItemCode on the line level of the requests to our service. When UPC is unavailable, default to ItemCode.When set to false: use the default ItemCode mapping. See Product Master Management for more details.</p>
            <p class="badgerequirement"><small>NOTE: Alternately, UPC can be enabled on the item level.</small></p>

        <h5>User Implementation Guide - <em>Required</em></h5>
            <p class="badgerequirement">The User Implementation Guide should contain screenshots and information allowing the end user to configure for AvaTax including where the company code is entered, where the credentials are entered and where tax codes can be mapped within the application. <a href="https://help.avalara.com/Directory/AvaTax_Partner_Documentation_Help" target="_blank">Click Here</a> for a user guide template.</p>    
        
                
        <h5>Address Validation Implemented - <em>Required</em></h5>
            <p class="badgerequirement">An Address Validation utility is present in the application.</p>
            
            <hr>
            
    <h3>Customer Record Integration</h3>
        <h5>Customer Code - <em>Required</em></h5>
            <p class="badgerequirement">Identify customer code (number, ID) to pass to the AvaTax service.</p>        
        
        <h5>Entity/Use Code - <em>Required</em></h5>
            <p class="badgerequirement">This is a group of codes that indicate the type of exemption.  See the standard codes, but be aware that users are able to create custom codes as well. It is best to manage this value in your application’s Customer record and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable.</p>
            
        <h5>Exemption Number - <em>Suggested</em></h5>
            <p class="badgerequirement">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</p>
            
        <h5>Line Level Exemptions - <em>Suggested</em></h5>
            <p class="badgerequirement">Ability to identify individual items on a transaction as exempt from tax.</p>
            
         <h5>Line Level Exemption Override - <em>Suggested</em></h5>
            <p class="badgerequirement">Ability to identify individual items on a transaction as Taxable to an otherwise exempt customer. Functionally, you will need to pass the value "Taxable" in the CustomerUsageType field at the line level.</p>  
            
        <h5>Ship-To Address Exemption - <em>Suggested</em></h5>
            <p class="badgerequirement">Ability to individually identify customer, ship-to locations as Exempt, separate from the customers default address.</p>
    <hr>
    
    <h3>Items/Charge Integration</h3>
    
        <h5>Item Code - <em>Required</em></h5>
            <p class="badgerequirement">Identify customer code (number, ID) to pass to the AvaTax service.</p>
            
        <h5>Item Description - <em>Required</em></h5>
            <p class="badgerequirement">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</p>
            
        <h5>AvaTax Tax Code mapping - Item Code/SKU - <em>Required</em></h5>
            <p class="badgerequirement">Association of an item or item group to an AvaTax Tax Code to describe the taxability (e.g. Clothing-Shirts – B-to-C).</p>
            
        <h5>Tax Code Mapping Group - <em>Suggested</em></h5>
            <p class="badgerequirement">Association of a GROUP of items to an AvaTax Tax Code to describe the taxability of the group.</p>
            
        <h5>Pass UPC - <em>Suggested</em></h5>
            <p class="badgerequirement">See note in Administration/Utilities Integration section. If the user elects to use AvaTax UPC, ensure that the appropriate field containing UPC data is mapped to the ItemCode parameter formatted as: <UPC:>+<UPC Data>. Example: “UPC:1234567890000”. by formatting the value with “UPC:” identifier, our engine can pick up the UPC code, and the user can avoid mapping a tax code for that item. If no UPC data is available still default to the regular ItemCode mapping.</p>
            <p class="badgerequirement"><small>NOTE:  The UPC functionality is a premium upgrade to the Avalara AvaTax subscription providing taxability decision (taxable vs. non-taxable) without requiring an Avalara Tax Code assignment.</small></p>
            
        <h5>Tax Code Lookup - <em>Suggested</em></h5>
            <p class="badgerequirement">Pull in and surface Avalara Tax Codes within application.</p>
            
        <h5>Non Standard Items - <em>Required</em></h5>
            <p class="badgerequirement">Association of Freight/Shipping and/or Handling charge to an AvaTax Tax Code to describe the taxability.</p>
            
        <hr>
        
        <h3>Sales/Billing Documentation Integration</h3>

        <h5>DocCode - <em>Required</em></h5>
            <p class="badgerequirement">Values that can come across to AvaTax as the DocCode.</p>
        
        <h5>CustomerCode - <em>Required</em></h5>
            <p class="badgerequirement">Values that can come across to AvaTax as the Customer Code.</p>
        
        <h5>DocDate - <em>Required</em></h5>
            <p class="badgerequirement">Value that comes across to AvaTax as the DocDate.</p>

        <h5>TaxCalculation Date - <em>Required</em></h5>
            <p class="badgerequirement">Value that is used for Tax Calculation Date in AvaTax.</p>
                                            
        <h5>DocType - <em>Required</em></h5>
            <p class="badgerequirement">DocType used for varying stages of the transaction life cycle.</p>
                    
        <h5>Header Level - Destination Address - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for Destination Address at the header level.</p>
                    
        <h5>Header Level - Origin Address - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for Origin Address at the header level.</p>
        
        <h5>Header Level - Point of Order Acceptance - <em>Suggested</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for PoA at the header level.</p>
                
        <h5>Header Level - Point of Order Origin - <em>Suggested</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for PoO at the header level.</p>
               
        <h5>Header Level - Exemption Override - <em>Suggested</em></h5>
            <p class="badgerequirement">Area at Invoice screen where end user can check box to override existing Tax Exemption for the client.</p>
        
        <h5>Location Code - <em>Conditional</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for LocationCode at the header level.</p>
            <p class="badgerequirement"><small>If the application supports multiple 'origin' addresses, locationCode must be passed with the transactions.</small></p>

        <h5>Exemption Number - <em>Conditional</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for Exemption Number.</p>
            <p class="badgerequirement"><small>Required if CustomerUsageType/Entity Use Code exemption functionality is not present.</small></p>
        
        <h5>Line Number - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Line Number.</p>
                
        <h5>Item Code - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Item Code.</p>
                                               
        <h5>Item Description - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Item Description.</p>
          
        <h5>Quantity - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Quantity.</p>
        
        <h5>Amount (extended) - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Amount.</p>
        
        <h5>Tax Code - <em>Required</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Tax Code.</p>
            
        <h5>Line Level - Destination Address - <em>Suggested</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for Destination Address at the line level.</p

        <h5>Line Level - Origin Address - <em>Suggested</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for the Origin Address at the line level.</p>
        
        <h5>Line Level - Point of Order Acceptance - <em>Suggested</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for PoA at the line level.</p>
        
        <h5>Line Level - Exemption Override  - <em>Suggested</em></h5>
            <p class="badgerequirement">Area on the Invoice screen at the line level where end user can check box to override existing Tax Exemption for the client specific to a single line of the Invoice.</p>
        
        <h5>Line Level - Point of Order Origin  - <em>Suggested</em></h5>
            <p class="badgerequirement">Value that is sent to AvaTax for PoO at the line level.</p>
        
        <h5>Verify Avalara Calculated Tax Amount is used in transaction - <em>Required</em></h5>
            <p class="badgerequirement">Confirm that the integration is taking the Tax Amount value from the GetTax response and using that to decorate the tax fields in the platform. <strong>Do NOT take our rate and use it to calculate the tax within the platform itself.</strong></p>
        
        <h5>Freight items must be transmitted separately - <em>Required</em></h5>
            <p class="badgerequirement">Freight Items must be sent to AvaTax as a separate line item with a configurable tax code.</p>
        
        <h5>GetTax call – Sales Order/Sales Invoices - <em>Required</em></h5>
            <p class="badgerequirement">Ensure that invoices are processed through a logical document lifecycle.</p>
        
        <h5>PostTax/CommitTax Call – Invoices - <em>Required</em></h5>
            <p class="badgerequirement">Ensure that invoices are committed/posted for reporting appropriately.</p>
            
        <h5>CancelTax call – voided/deleted Invoices - <em>Conditional</em></h5>
            <p class="badgerequirement">When invoices are deleted/cancelled, this information must be transmitted to AvaTax.</p>
            <p class="badgerequirement"><small>If the source application supports void/delete, then the corresponding transaction on AvaTax must be updated with the current transaction status.</small></p>
            
        <h5>Send discounts appropriately - <em>Required</em></h5>
            <p class="badgerequirement">Standard discounts included in line-level extended amount, manufacturer’s coupons and hostess credits transmitted as additional line items.</p>
            
        <h5>Send optional header level data elements – Purchase order number  - <em>Suggested</em></h5>
            <p class="badgerequirement">Purchase order number associated with this transaction.</p>
            
        <h5>Send optional line (detail) level data elements – Entity Use Code (aka CustomerUsageType) - <em>Suggested</em></h5>
            <p class="badgerequirement">Line level exempt triggers are required if line-level exemption can be managed in the application, and should be transmitted in a manner analogous to document-level exemption.</p>
            
        <h5>Send optional line (detail) level data elements – Destination address - <em>Suggested</em></h5>
            <p class="badgerequirement">Required if destination (ship-to) address can be managed at the item line level.</p>
            
        <h5>Send optional line (detail) level data elements – Origin address  - <em>Suggested</em></h5>
            <p class="badgerequirement">Required if origin (ship-from, warehouse) address can be managed at the item line level.</p>
            
        <h5>Include Point of Order Origin in GetTax request  - <em>Conditional</em></h5>
            <p class="badgerequirement">Required if Point of Order Origin field is available in the source application.</p>
            
        <h5>Include Point of Order Acceptance in GetTax request  - <em>Conditional</em></h5>
            <p class="badgerequirement">Required if the Point of Order Acceptance is available in the source application.</p>
            
        <h5>Latitude/Longitude Support  - <em>Suggested</em></h5>
            <p class="badgerequirement">If host application captures GPS coordinates with Addresses; for US addresses, pass the Lat and Long along with address. This is especially useful in situations where a location or service site can only be pinpointed by geo location.</p>
            
        <h5>Send Location Code with Transaction  - <em>Conditional</em></h5>
            <p class="badgerequirement">If multiple origin addresses are supported, the corresponding origin Location Code must be included with the GetTax request.</p>
            
        <hr>
        
        <h3>Server Audit Clarity and Installation Requirements</h3>
            
        <h5>Pass connector identifier information via the TaxSvc.Profile.Client property  - <em>Required</em></h5>
            <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and   company name, as a signature to each transaction.</p>
            <p><small>EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</small></p>
            
        <h5>Reasonable errors on server-side analysis  - <em>Required</em></h5>
            <p class="badgerequirement">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</p>
            
        <h5>Reasonable ratio of GetTax and address validation calls to committed documents - <em>Required</em></h5>
            <p class="badgerequirement">In a normal workflow, we expect to see (on average, including abandoned carts) up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.	</p>
            
        <h5>Demonstrate and document installation of software – Install Shield or equivalent where applicable - <em>Required</em></h5>
            <p class="badgerequirement">Customers should have an easy and trouble free installation of the software.</p>
