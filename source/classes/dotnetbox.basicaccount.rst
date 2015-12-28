:orphan:

:index:`BasicAccount Class`
===========================

Basic information about any account.

Constructors
------------

================================================================================================ =================================================
Name                                                                                             Description                                       
================================================================================================ =================================================
:doc:`BasicAccount(string, Name, bool) </methods/dotnetbox.basicaccount.ctor(string,name,bool)>` Creates a new instance of the BasicAccount class. 
================================================================================================ =================================================

Properties
----------

========== =============================================== ===========================================================================================================================
Name       Type                                            Description                                                                                                                 
========== =============================================== ===========================================================================================================================
AccountId  System.String                                   The user's unique Dropbox ID.                                                                                               
IsTeammate System.Boolean                                  Whether this user is a teammate of the current user. If this account is the current user's account, then this will be True. 
Name       :doc:`DotNetBox.Name </classes/dotnetbox.name>` Details of the user's name.                                                                                                 
========== =============================================== ===========================================================================================================================

Methods
-------

========================================================================================= ====================================================================
Name                                                                                      Description                                                          
========================================================================================= ====================================================================
:doc:`BasicAccount.FromJson(JObject) </methods/dotnetbox.basicaccount.fromjson(jobject)>` Creates a new instance of the BasicAccount class from a JSON object. 
:doc:`BasicAccount.ToString() </methods/dotnetbox.basicaccount.tostring()>`               Returns a string containing all of the class' properties.            
========================================================================================= ====================================================================

