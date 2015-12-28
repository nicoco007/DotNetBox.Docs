:orphan:

:index:`InviteeMembershipInfo Class`
====================================

Information about an invited user's access level as a member of a shared folder.

Constructors
------------

=============================================================================================================================== ==========================================================
Name                                                                                                                            Description                                                
=============================================================================================================================== ==========================================================
:doc:`InviteeMembershipInfo(AccessLevel, InviteeInfo) </methods/dotnetbox.inviteemembershipinfo.ctor(accesslevel,inviteeinfo)>` Creates a new instance of the InviteeMembershipInfo class. 
=============================================================================================================================== ==========================================================

Properties
----------

========== ============================================================= =================================================================
Name       Type                                                          Description                                                       
========== ============================================================= =================================================================
AccessType :doc:`DotNetBox.AccessLevel </classes/dotnetbox.accesslevel>` Access level the user will be given if he accepts the invitation. 
Invitee    :doc:`DotNetBox.InviteeInfo </classes/dotnetbox.inviteeinfo>` Information on the invited user.                                  
========== ============================================================= =================================================================

Methods
-------

=========================================================================================================== ==============================================================================
Name                                                                                                        Description                                                                    
=========================================================================================================== ==============================================================================
:doc:`InviteeMembershipInfo.FromJson(JObject) </methods/dotnetbox.inviteemembershipinfo.fromjson(jobject)>` Creates a new instance of the InviteeMembershipInfo class using a JSON object. 
:doc:`InviteeMembershipInfo.ToString() </methods/dotnetbox.inviteemembershipinfo.tostring()>`               Returns a string containing all of the class' properties.                      
=========================================================================================================== ==============================================================================

