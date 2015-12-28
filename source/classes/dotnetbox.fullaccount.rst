:orphan:

:index:`FullAccount Class`
==========================

Full information about an account.

Constructors
------------

=================================================================================================================================================================================== ================================================
Name                                                                                                                                                                                Description                                      
=================================================================================================================================================================================== ================================================
:doc:`FullAccount(string, Name, string, string, string, bool, AccountType, string) </methods/dotnetbox.fullaccount.ctor(string,name,string,string,string,bool,accounttype,string)>` Creates a new instance of the FullAccount class. 
=================================================================================================================================================================================== ================================================

Properties
----------

============ ============================================================= ===========================================================
Name         Type                                                          Description                                                 
============ ============================================================= ===========================================================
AccountId    System.String                                                 Account's unique ID.                                        
AccountType  :doc:`DotNetBox.AccountType </classes/dotnetbox.accounttype>` The account type.                                           
Country      System.String                                                 The user's country of residence.                            
Email        System.String                                                 Email linked to the account.                                
IsPaired     System.Boolean                                                Whether the user has linked his personal and work accounts. 
Locale       System.String                                                 User's langauge.                                            
Name         :doc:`DotNetBox.Name </classes/dotnetbox.name>`               Information about the user's name.                          
ReferralLink System.String                                                 User's referral link.                                       
============ ============================================================= ===========================================================

Methods
-------

======================================================================================= ====================================================================
Name                                                                                    Description                                                          
======================================================================================= ====================================================================
:doc:`FullAccount.FromJson(JObject) </methods/dotnetbox.fullaccount.fromjson(jobject)>` Creates a new instance of the FullAccount class using a JSON object. 
:doc:`FullAccount.ToString() </methods/dotnetbox.fullaccount.tostring()>`               Returns a string containing all of the class' properties.            
======================================================================================= ====================================================================

