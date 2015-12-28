:orphan:

:index:`LinkPermissions Class`
==============================

A shared link's access permissions.

Constructors
------------

============================================================================================================================================================================================================================ ====================================================
Name                                                                                                                                                                                                                         Description                                          
============================================================================================================================================================================================================================ ====================================================
:doc:`LinkPermissions(bool, ResolvedVisibility?, RequestedVisibility?, SharedLinkAccessFailureReason?) </methods/dotnetbox.linkpermissions.ctor(bool,resolvedvisibility,requestedvisibility,sharedlinkaccessfailurereason)>` Creates a new instance of the LinkPermissions class. 
============================================================================================================================================================================================================================ ====================================================

Properties
----------

=================== ================================================================================================= =========================================================================================================================================================
Name                Type                                                                                              Description                                                                                                                                               
=================== ================================================================================================= =========================================================================================================================================================
CanRevoke           System.Boolean                                                                                    Whether the current user can revoke the shared link or not.                                                                                               
RequestedVisibility :doc:`DotNetBox.RequestedVisibility </classes/dotnetbox.requestedvisibility>`                     The shared link's requested visibility. This can be overridden by team and shared folder policies.                                                        
ResolvedVisibility  :doc:`DotNetBox.ResolvedVisibility </classes/dotnetbox.resolvedvisibility>`                       The current visibility of the link after considering the shared link policies of the team (if applicable) and if it is located in a shared folder or not. 
RevokeFailureReason :doc:`DotNetBox.SharedLinkAccessFailureReason </classes/dotnetbox.sharedlinkaccessfailurereason>` The failure reason for revoking the link. This field will only be present if CanRevoke is false.                                                          
=================== ================================================================================================= =========================================================================================================================================================

Methods
-------

=============================================================================================== ========================================================================
Name                                                                                            Description                                                              
=============================================================================================== ========================================================================
:doc:`LinkPermissions.FromJson(JObject) </methods/dotnetbox.linkpermissions.fromjson(jobject)>` Creates a new instance of the LinkPermissions class using a JSON object. 
:doc:`LinkPermissions.ToString() </methods/dotnetbox.linkpermissions.tostring()>`               Returns a string containing all of the class' properties.                
=============================================================================================== ========================================================================

