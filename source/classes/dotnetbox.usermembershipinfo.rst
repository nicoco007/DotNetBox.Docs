:orphan:

:index:`UserMembershipInfo Class`
=================================

Information about a user's membership for a shared folder.

Constructors
------------

=================================================================================================================== =======================================================
Name                                                                                                                Description                                             
=================================================================================================================== =======================================================
:doc:`UserMembershipInfo(AccessLevel, UserInfo) </methods/dotnetbox.usermembershipinfo.ctor(accesslevel,userinfo)>` Creates a new instance of the UserMembershipInfo class. 
=================================================================================================================== =======================================================

Properties
----------

========== ============================================================= ==========================================
Name       Type                                                          Description                                
========== ============================================================= ==========================================
AccessType :doc:`DotNetBox.AccessLevel </classes/dotnetbox.accesslevel>` User's access level for the shared folder. 
User       :doc:`DotNetBox.UserInfo </classes/dotnetbox.userinfo>`       Information about the user.                
========== ============================================================= ==========================================

Methods
-------

===================================================================================================== ===========================================================================
Name                                                                                                  Description                                                                 
===================================================================================================== ===========================================================================
:doc:`UserMembershipInfo.FromJson(JObject) </methods/dotnetbox.usermembershipinfo.fromjson(jobject)>` Creates a new instance of the UserMembershipInfo class using a JSON object. 
:doc:`UserMembershipInfo.ToString() </methods/dotnetbox.usermembershipinfo.tostring()>`               Returns a string containing all of the class' properties.                   
===================================================================================================== ===========================================================================

