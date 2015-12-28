:index:`GroupMembershipInfo Class`
==================================

Information about a group's access level as a member of a shared folder.

Constructors
------------

=========================================================================================================================================== ========================================================
Name                                                                                                                                        Description                                              
=========================================================================================================================================== ========================================================
:doc:`GroupMembershipInfo.GroupMembershipInfo(AccessLevel, GroupInfo) </methods/dotnetbox.groupmembershipinfo.ctor(accesslevel,groupinfo)>` Creates a new instance of the GroupMembershipInfo class. 
=========================================================================================================================================== ========================================================

Properties
----------

========== ============================================================= ================================================
Name       Type                                                          Description                                      
========== ============================================================= ================================================
AccessType :doc:`DotNetBox.AccessLevel </classes/dotnetbox.accesslevel>` Access level the group has on the shared folder. 
Group      :doc:`DotNetBox.GroupInfo </classes/dotnetbox.groupinfo>`     Information about the group.                     
========== ============================================================= ================================================

Methods
-------

======================================================================================================= ============================================================================
Name                                                                                                    Description                                                                  
======================================================================================================= ============================================================================
:doc:`GroupMembershipInfo.FromJson(JObject) </methods/dotnetbox.groupmembershipinfo.fromjson(jobject)>` Creates a new instance of the GroupMembershipInfo class using a JSON object. 
:doc:`GroupMembershipInfo.ToString() </methods/dotnetbox.groupmembershipinfo.tostring()>`               Returns a string containing all of the class' properties.                    
======================================================================================================= ============================================================================

