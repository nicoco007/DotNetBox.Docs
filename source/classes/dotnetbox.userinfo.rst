:index:`UserInfo Class`
=======================

Information about a user.

Constructors
------------

===================================================================================================== =============================================
Name                                                                                                  Description                                   
===================================================================================================== =============================================
:doc:`UserInfo.UserInfo(string, bool, string) </methods/dotnetbox.userinfo.ctor(string,bool,string)>` Creates a new instance of the UserInfo class. 
===================================================================================================== =============================================

Properties
----------

============ ============== =================================================================
Name         Type           Description                                                       
============ ============== =================================================================
AccountId    System.String  User's unique account ID.                                         
SameTeam     System.Boolean Whether the user is on the current user's team or not.            
TeamMemberId System.String  The team member ID of the user. Only present if SameTeam is true. 
============ ============== =================================================================

Methods
-------

================================================================================= =================================================================
Name                                                                              Description                                                       
================================================================================= =================================================================
:doc:`UserInfo.FromJson(JObject) </methods/dotnetbox.userinfo.fromjson(jobject)>` Creates a new instance of the UserInfo class using a JSON object. 
:doc:`UserInfo.ToString() </methods/dotnetbox.userinfo.tostring()>`               Returns a string containing all of the class' properties.         
================================================================================= =================================================================

