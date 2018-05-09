---
layout: default
title: AvaTax Document Management Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/DocumentManagement.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara Document Management Badge Requirements</h2>
      <!--<h3>Do we want to say anything here?</h3>-->
      
      <hr>
        <h3>Administration/Utilities Integration</h3>
        <h5>CertCapture Configuration - <em>Required</em></h5>
                <p class="badgerequirement">The CertCapture Configuration window must allow the user to specify the configuration/connection information.
                  <ul class="normal">
                    <li>API Username</li>
                    <li>API Password</li>
                    <li>Client ID(s)</li>
                  </ul>
                </p>
                
            <h5>CertCapture Test Connect Button - <em>Required</em></h5>
                <p class="badgerequirement">Test the connection to the CertCapture service and verifies the CertCapture API credentials. This is an important element to allow for successful troubleshooting of the CertCapture service</p>
            
            <h5>User Implementation Guide - <em>Required</em></h5>
                <p class="badgerequirement">The User Implementation Guide should contain screenshots and information allowing the end user to cofigure CertCapture and information on the functionality of the integration.</p>
                
            <h5>Enable Logging  - <em>Required</em></h5>
                <p class="badgerequirement">Enables detailed CertCapture transaction logging within the application including capture of round-trip processing time.</p>
            
            <h5>Batch Load Customers - <em>Suggested</em></h5>
                <p class="badgerequirement">Utility to batch load customer records into CertCapture.</p>
                
            <h5>Request time out definition - <em>Suggested</em></h5>
                <p class="badgerequirement">Define CertCapture request timeout length, CertCapture best practices prescribes default setting of 300ms.</p>
            
            <h5>CertCapture Admin Console Link  - <em>Suggested</em></h5>
                <p class="badgerequirement">Link to the CertCapture Application Dashboard.</p>
         <hr>
         
          <h3>Customer Record Integration</h3>
            <h5>Create Customer Record - <em>Required</em></h5>
                <p class="badgerequirement">As customer records are created in the ERP, a function to create a corresponding customer record in the CertCapture application is required.<br>
                Required Fields:
                  <ul class="normal">
                    <li>Customer number (unique customer identifier)</li>
                    <li>Customer Name</li>
                    <li>Mailing Address</li>
                    <li>Option for Additional-Ship To Zones on customer record</li>
                    <li>Email address</li>
                  </ul>
                </p>
            
            <h5>Update Customer Record - <em>Required</em></h5>
                <p class="badgerequirement">As customer record are updated in the ERP, an function to update the corresponding customer record in the CertCapture application is required.</p>
                
            <h5>Retrieve Customer Exemption Status - <em>Required</em></h5>
                <p class="badgerequirement">Retrieve and display exemption certificate information associated with a customer record.<br>
                The displayed information must include:
                  <ul class="normal">
                    <li>Exempt state</li>
                    <li>Exempt reason</li>
                    <li>Certificate expiration date</li>
                    <li>If existing AvaTax Integration - Optional identify exempt reason on customer record</li>
                    <li>No existing AvaTax Integration - Required identify exempt reason on customer record</li>
                  </ul>
                </p>
                
            <h5>View Exemption Certificate - <em>Required</em></h5>
                <p class="badgerequirement">View an exemption certificate associated with customer record.</p>
            
            <h5>Option to Print or Save Certificate - <em>Required</em></h5>
                <p class="badgerequirement">Print or save certificate image on the local system.</p>
                
            <h5>Request new Certificate - <em>Required</em></h5>
                <p class="badgerequirement">As exemption certificates expire, a function to send the customer a request for a new exemption certificate is required.</p>
            
            <h5>Revoke Existing Certificate - <em>Suggested</em></h5>
                <p class="badgerequirement">Optional function to revoke/unlink an existing certificate from a customer record.</p>
 