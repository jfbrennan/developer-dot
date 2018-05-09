---
layout: default
title: AvaTax Use Tax Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/USETAX.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Use Tax Badge Requirements</h2>

      <hr>
      <h3>Administration/Utilities Integration</h3>
        <h5>AvaTax Configuration Window - <em>Required</em></h5>
            <p class="badgerequirement">The AvaTax Configuration Dialog Window must allow the user to specify appropriate configuration/connection information:
                <ul class="normal">
                    <li>Avalara Credentials
                        <ul class="normal">
                            <li>Account Number</li>
                            <li>License Key</li>
                        </ul>
                    </li>
                    <li>Service URL (free-form or pick-list with the following)
                        <ul class="normal">
                            <li>Developmnet</li>
                            <li>Production</li>
                        </ul>
                    </li>
                    <li>Company Code (one of two options typically)
                        <ul class="normal">
                            <li>User-definable</li>
                            <li>Inherited from client application</li>
                            <li>Lookup Code from AvaTax</li>
                        </ul>
                    </li>
                </ul>
            </p>
            
        <h5>AvaTax Test Connect Button - <em>Required</em></h5>
            <p class="badgerequirement">Provide a button for a user to test the connection to the AvaTax service and verify the AvaTax credentials. This is an important element to allow for successful setup and troubleshooting of the AvaTax service. Optional: display license key expiration date upon successful connection response.</p>
            
        <h5>Document Committing Control - <em>Required</em></h5>
            <p class="badgerequirement">A singular control must exist in the Configuration Dialog Window to turn on/off committing of documents. In order for this connector to be used in conjunction with other integration to AvaTax, the user must be able to control which connector is used for committing documents. Typically, this exists as a checkbox or radio button. From a technical standpoint
                <ul class="normal">
                    <li>Suppress any non-getTax calls (i.e. cancelTax, postTax)</li>
                    <li>Ensure that Commit = False on all GetTax calls.</li>
                </ul>
            </p>
            
        <h5>Tax Calculation Service Control - <em>Required</em></h5>
            <p class="badgerequirement">A singular control must exist in the Configuration Dialog Window to turn on/off the Avalara Use Tax Calculation service independently of any other Avalara product or service. Typically, this exists as a checkbox or radio button.</p>
            
        <h5>User Implementation Guide - <em>Required</em></h5>
            <p class="badgerequirement">The User Implementation Guide should contain screenshots and information allowing the end user to configure for Avalara Use Tax including where the company code is entered, where the credentials are entered and where tax codes can be mapped within the application.</p>
            
        <h5>Enable Logging - <em>Required</em></h5>
            <p class="badgerequirement">The user must have an option to enable detailed AvaTax transaction logging within the application, including capture of round-trip processing time. Users should have a means to download these detailed log files.</p>
            
        <h5>Link to Admin Console - <em>Required</em></h5>
            <p class="badgerequirement">Link to AvaTax Production Admin Console.</p>
            
        <h5>Enable AvaTax UPC - <em>Required</em></h5>
            <p class="badgerequirement">When set to true: pass in UPC code into the Avalara ItemCode on the line level of the requests to our service. When UPC is unavailable, default to ItemCode. When set to false: use the default ItemCode mapping. See Product Master Management for more details. NOTE: Alternately, UPC can be enabled on the item level. See Product Master Management.</p>
            
        <h5>Merchant/User Exemption - <em>Required</em></h5>
            <p class="badgerequirement">One or the other parameter is required, although Entity/Use code is preferred.
                <ul class="normal">
                    <li>Entity/Use Code:
                        <ul class="normal">
                            <li>Assign an Avalara Entity/Use Code to the merchant/user (an Entity/Use Code defines the reason for the sales tax exemption, Reseller, Manufacturer, Government Entity, Charitable Organization, etc.).</li>
                            <li>Must include our standard list and be user-definable to add additional items.</li>
                        </ul>
                    </li>
                    <li>Exemption Number:
                        <ul class="normal">
                            <li>Identify a field to map the exemption certificate number of the merchant/user of the application to the “ExemptionNo” field in Avalara.</li>
                        </ul>
                    </li>
                </ul>
            </p>
    <hr>
    
       <h3>Vendor Management</h3>
        <h5>Vendor Identifier Mapping - <em>Required</em></h5>
            <p class="badgerequirement">Identify the vendor identifier field (typically the database key in the vendor master) to map to the “CustomerCode” field in Avalara.	</p>
            
        <h5>Vendor Level Use Tax Assessment - <em>Required</em></h5>
            <p class="badgerequirement">True/False self assessment. Implement appropriate business logic to determine when to self assess. Be sure to include the following:
                <ul class="normal">
                    <li>When self assessing, ensure that transactions are committed to the Avalara Admin Console</li>
                    <li>When NOT self assessing, do not commit transaction to the Admin Console</li>
                </ul>
            In the case of Global Use Tax assessment, commit all transactions regardless of the vendor.
            </p>
            
        <h5>Entity/Use Code - <em>Required</em></h5>
            <p class="badgerequirement">Provide functionality to assign either an Avalara system or custom customer usage type (entity/use code) to the vendor, indicating all purchases from this vendor are used for an exempt purpose (resale, use in manufacturing/production, etc.).</p>
            
        <h5>Exemption Number - <em>Conditional</em></h5>
            <p class="badgerequirement">When vendor record has a dedicated exemption number field on the vendor record and/or its address records, provide functionality to assign the buyer’s exemption number to the vendor, indicating purchases made from this vendor and/or to one of the buyer’s ship-to addresses are exempt.</p>
    <hr>
    
       <h3>Product Master Management</h3>
        <h5>Item Code   - <em>Required</em></h5>
            <p class="badgerequirement">Identify item/service/charge code (number, ID) to pass to the AvaTax service. If the customer has access to UPC, they should be able to prepend UPC to the code and have it come across in the item code field. If there is no UPC, it should fall back to SKU. (See UPC requirements in the Administration & Utilities Integration section) For Purchase Invoices not associated with a Purchase Order, you may not have access to the ItemCode from the client application. In that case, simply use the GL account number/cost center identifier.</p>
            
        <h5>Item Description   - <em>Required</em></h5>
            <p class="badgerequirement">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</p>
            
        <h5>Avalara Tax Code Assignment – Group - <em>Conditional</em></h5>
            <p class="badgerequirement">When the Product Master provides functionality to group items/products in the product catalog. Associate an Avalara Tax Code to an item group/product group/commodity code. The Tax Code assignment becomes the default for all items/products in the group. Search for a specific tax codeDownload a list of the standard system tax codes.</p>
            
        <h5>Avalara Tax Code Assignment - Item/SKU - <em>Required</em></h5>
            <p class="badgerequirement">Provide an attribute to associate an Avalara Tax Code to an item/SKU. Overrides default Tax Code at item/product group level. Search for a specific tax code. Download a list of the standard system tax codes.</p>
            
        <h5>UPC - <em>Required</em></h5>
            <p class="badgerequirement">See note in Administration/Utilities Integration section. If the user elects to use AvaTax UPC, Ensure that the appropriate field containing UPC data is mapped to the ItemCode parameter formatted as: <code>&lt;UPC:&gt;+&lt;UPC Data&gt;</code>. Example: <code>UPC:1234567890000</code>. By formatting the value with <code>UPC:</code> identifier, our engine can pick up the UPC code, and the user can avoid mapping a tax code for that item. If no UPC data is available still default to the regular ItemCode mapping.</p>
            <p><small>NOTE:  The UPC functionality is a premium upgrade to the Avalara AvaTax subscription providing taxability decision (taxable vs. non-taxable) without requiring an Avalara Tax Code assignment.</small></p>
    <hr>
    
       <h3>General Ledger Account Master Management</h3>
        <h5>Item Code - <em>Conditional</em></h5>
            <p class="badgerequirement">When the application provides functionality permitting the user to assign a General Ledger Account Number to a line on the purchase order/invoice in lieu of an Item/SKU, pass the General Ledger Account Number to the AvaTax service.</p>
            
        <h5>Item Description - <em>Conditional</em></h5>
            <p class="badgerequirement">When the application provides functionality permitting the user to assign a General Ledger Account Number to a line on the purchase order/invoice in lieu of an Item/SKU, pass the General Ledger Account Number description to the AvaTax service.</p>
            
        <h5>Avalara Tax Code Assignment - <em>Conditional</em></h5>
            <p class="badgerequirement">When the application provides functionality permitting the user to assign a General Ledger Account Number to a line on the purchase order/invoice in lieu of an Item/SKU, provide an attribute to associate an Avalara Tax Code to the General Ledger Account Number.</p>
    <hr>
    
       <h3>Purchasing & Payables Document Integration</h3>
        <h5>Send header level data elements for PurchaseOrder and PurchaseInvoice document types   - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Document number</li>
                    <li>CustomerCode</li>
                    <li>Document Date</li>
                    <li>Tax calculation date</li>
                    <li>Document type</li>
                    <li>Destination address</li>
                    <li>Origin address</li>
                    <li>Exemption number</li>
                    <li>Entity/Use code (aka CustomerUsageType)</li>
                    <li>Location Code</li>
                </ul>
            </p>
            
        <h5>Send line (detail) level data elements for PurchaseOrder and PurchaseInvoice document types - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Line number</li>
                    <li>Item code</li>
                    <li>Item description</li>
                    <li>Quantity</li>
                    <li>Amount (extended)</li>
                    <li>Tax Code</li>
                    <li>Entit/Use Code</li>
                    <li>Revenue account<br>
                        <p>Revenue Account references for purchase order/invoices represent the general ledger account number associated with the purchase.</p>
                    </li>
                </ul>
            </p>
            
        <h5>Send point-of-consumption of product/service purchased as Destination address - <em>Required</em></h5>
            <p class="badgerequirement">Use tax is assessed, in part, based upon the location where the product is consumed or the service is rendered. The address associated with that location is to be passed as Destination address type.</p>
            <p class="badgerequirement">In the event the location where product is consumed is not available, the delivery address can be substituted as Destination address.</p>
            
        <h5>Freight/Shipping Charges - <em>Required</em></h5>
            <p class="badgerequirement">Freight/Shipping Items must be sent to AvaTax as a separate line item with appropriate tax code.</p>
            
        <h5>Discounts   - <em>Required</em></h5>
            <p class="badgerequirement">Either send line items with post-discounted amounts or utilize the Avalara Discount Fields.</p>
            
        <h5>Purchase Orders - <em>Required</em></h5>
            <p class="badgerequirement">Follow basic Purchase Order workflow with required parameters and Address Validation touch points integrated. Purchase Orders are used to calculate and apply an estimated sales tax.</p>
            
        <h5>Purchase Invoices - <em>Required</em></h5>
            <p class="badgerequirement">Follow basic Purchase Invoice workflow with required parameters and Address Validation touch points integrated. The results of purchase Invoice documents will be used to determine if taxes need to be self-assessed. The user must then be presented with options to take action based user-specific business needs. See requirement below on Self-asses workflow.</p>
            
        <h5>Self-Assess workflow: Purchase Invoices - Vendor-Charged Tax - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul>
                    <li>When a purchase invoice includes vendor-charged tax: 
                        <ul class="normal">
                            <li>Vendor-charged tax must be separately stated</li>
                            <li>Vendor-charged tax must be captured by the tax calculation request</li>
                        </ul>
                    </li>
                    <li>The user is provided a display including:
                        <ul class="normal">
                            <li>Vendor-charged tax</li>
                            <li>AvaTax calculated tax</li>
                            <li>Difference between charged and calculated tax</li>
                        </ul>
                    </li>
                    <li>The user is presented the following options:
                        <ul class="normal">
                            <li>Accept the difference between AvaTax calculated tax and vendor-charged tax (only if AvaTax is a larger amount than vendor-charged tax)</li>
                            <li>Accept AvaTax calculated Use Tax in total</li>
                            <li>Edit the Use Tax amount to a desired amount, including $0.00</li>
                        </ul>
                    </li>
                </ul>
            </p>
            
        <h5>Self-Assess workflow: Purchase Invoices - Zero Vendor-Charged Tax - <em>Required</em></h5>
            <p class="badgerequirement">AvaTax calculated tax is returned, and the user is presented with the following options:
                <ul class="normal">
                    <li>Accept AvaTax calculated Use Tax in total</li>
                    <li>Edit the Use Tax amount to a desired amount, including $0.00</li>
                </ul>
            </p>
            
        <h5>Committing Invoices for Vendor Liability Assessment: Purchase Invoices - <em>Required</em></h5>
            <p class="badgerequirement">Ensure purchase invoices are committed/posted for reporting appropriately after they are finalized.</p>
            
        <h5>Create Use Tax accrual: Purchase Invoices - <em>Required</em></h5>
            <p class="badgerequirement">Generate use tax accrual journal entry lines for completed purchase invoices.<br>
            <strong>Debit</strong> - create debit lines for each assessed line recording use tax amount and associated general ledger number sourced from purchase invoice line.<br>
            <strong>Credit</strong> - create summary credit line for total use tax assessment charged to liability (Use Tax Payable) general ledger account number.
            </p>
            
        <h5>CancelTax Call - <em>Required</em></h5>
            <p class="badgerequirement">When a purchase invoice is deleted/canceled, this information must be transmitted to AvaTax.</p>
            
        <h5>Send optional header level data elements - <em>Suggested</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Purchase Order Number - for purchase order/invoice scenarios, this represents the vendor/supplier's sales order number</li>
                    <li>Reference Code</li>
                    <li>Salesperson Code</li>
                </ul>
            </p>
            
        <h5>Send optional line (detail) level data elements - <em>Suggested</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Exemption Number - overrides header level Exemption Number</li>
                    <li>Reference 1</li>
                    <li>Reference 2</li>
                </ul>
            </p>
            
        <h5>Latitude/Longitude - <em>Suggested</em></h5>
            <p class="badgerequirement">Latitude/Longitude coordinates can be sent in lieu of a postal address.</p>
    <hr>
    
       <h3>Server Audit/Clarity</h3>
        <h5>Pass connector identifier information via the TaxSvc.Profile.Client property - <em>Required</em></h5>
            <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction.EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
            
        <h5>Reasonable errors on server-side analysis - <em>Required</em></h5>
            <p class="badgerequirement">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</p>
            
        <h5>Reasonable ratio of GetTax and address validation calls to committed documents - <em>Required</em></h5>
            <p class="badgerequirement">In a normal workflow, we expect to see up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</p>
            
        <h5>Demonstrate and document installation of software – Install Shield or equivalent where applicable - <em>Required</em></h5>
            <p class="badgerequirement">Customers should have an easy and trouble free installation of the software.</p>
