:orphan:

:index:`FolderPolicy Class`
===========================

A set of policies governing membership and privileges for a shared folder.

Constructors
------------

=========================================================================================================================================================== =================================================
Name                                                                                                                                                        Description                                       
=========================================================================================================================================================== =================================================
:doc:`FolderPolicy(AclUpdatePolicy, SharedLinkPolicy, MemberPolicy?) </methods/dotnetbox.folderpolicy.ctor(aclupdatepolicy,sharedlinkpolicy,memberpolicy)>` Creates a new instance of the FolderPolicy class. 
=========================================================================================================================================================== =================================================

Properties
----------

================ ======================================================================= ======================================================================================
Name             Type                                                                    Description                                                                            
================ ======================================================================= ======================================================================================
AclUpdatePolicy  :doc:`DotNetBox.AclUpdatePolicy </classes/dotnetbox.aclupdatepolicy>`   Who can add and remove members from this shared folder.                                
MemberPolicy     :doc:`DotNetBox.MemberPolicy </classes/dotnetbox.memberpolicy>`         Who can be a member of this shared folder. Only set if the user is a member of a team. 
SharedLinkPolicy :doc:`DotNetBox.SharedLinkPolicy </classes/dotnetbox.sharedlinkpolicy>` Who links can be shared with.                                                          
================ ======================================================================= ======================================================================================

Methods
-------

========================================================================================= ====================================================================
Name                                                                                      Description                                                          
========================================================================================= ====================================================================
:doc:`FolderPolicy.FromJson(JObject) </methods/dotnetbox.folderpolicy.fromjson(jobject)>` Creates a new instance of the FolderPolicy class from a JSON object. 
:doc:`FolderPolicy.ToString() </methods/dotnetbox.folderpolicy.tostring()>`               Returns a string containing all of the class' properties.            
========================================================================================= ====================================================================

