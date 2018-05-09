---
layout: post
title: AvaTax C# SDK Upgrade 18.2.1.168
description: AvaTax C# SDK 18.2.1.168 update to address HTTP verb case issue.
date: 2018-03-12 17:00
author: Wayne Myer
comments: true
categories: [avatax, C#, SDK]
product: blog
doctype: blog
disqus: 1
---

Avalara was advised of an issue affecting some users of the AvaTax C# SDK. In some environments, the C# SDK submitted HTTP verbs in lowercase, which is not always permitted by firewall and router rules.  Avalara is publishing a revision of the [C# SDK 18.2.1.168](https://www.nuget.org/packages/Avalara.AvaTax/18.2.1.168) to correct this issue.  We advise all customers using the C# SDK to upgrade to the latest revision.

<h2>Does This Affect Me?</h2>
Customers known to be affected are running the combination of:
<ol>
    <li>Visual Studio 2017</li> 
    <li>on Mac OS X</li>
    <li>with AvaTax C# SDK 18.2.0.167 or earlier</li>
</ol>

Our testing team has evaluated this issue, and will continue to test in a variety of environments and C# versions.  As of this date we are not aware of any other versions that are affected. Whether or not you are affected by this issue, we encourage you to periodically update your NuGet reference and download the latest revision of AvaTax from [NuGet](https://www.nuget.org/packages/Avalara.AvaTax/18.2.1.168).

<h2>How To Update the AvaTax C# SDK</h2>
You may update your C# SDK version by following these steps:
1. **Open your project that uses the AvaTax C# SDK**


2. **Update NuGet Packages**
    * In the Solution Explorer, open the context menu for your solution. Select "Update NuGet Packages."
    <img src="../../../../../images/sdkUpdateInSolution.png">        

    * Or open the dependencies for your project in the Solution Explorer.
    * <img src="../../../../../images/sdkDependenciesInProject.png">    


4. **Right-click on Avalara.AvaTax and select "Update."**
    * <img src="../../../../../images/sdkUpdateInProject.png">


5. **NuGet will update your SDK to the version 18.2.1.168.**
    * <img src="../../../../../images/sdkUpdatedVersionNumber.png">

6. **Your version of the AvaTax C# SDK is updated and you are good to go!**

Thank for using AvaTax! Please feel free to leave comments below. If you have have questions, we would love to hear from you in the [developer forums](https://community.avalara.com/avalara/category_sets/developers).