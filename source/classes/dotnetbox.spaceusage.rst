:index:`SpaceUsage Class`
=========================

Information on a user's space usage.

Constructors
------------

============================================================================================================== ===============================================
Name                                                                                                           Description                                     
============================================================================================================== ===============================================
:doc:`SpaceUsage.SpaceUsage(long, SpaceAllocation) </methods/dotnetbox.spaceusage.ctor(long,spaceallocation)>` Creates a new instance of the SpaceUsage class. 
============================================================================================================== ===============================================

Properties
----------

========== ===================================================================== =====================
Name       Type                                                                  Description           
========== ===================================================================== =====================
Allocation :doc:`DotNetBox.SpaceAllocation </classes/dotnetbox.spaceallocation>` Space allocated.      
Used       System.Int                                                            Space used, in bytes. 
========== ===================================================================== =====================

Methods
-------

===================================================================================== ===================================================================
Name                                                                                  Description                                                         
===================================================================================== ===================================================================
:doc:`SpaceUsage.FromJson(JObject) </methods/dotnetbox.spaceusage.fromjson(jobject)>` Creates a new instance of the SpaceUsage class using a JSON object. 
:doc:`SpaceUsage.ToString() </methods/dotnetbox.spaceusage.tostring()>`               Returns a string containing all of the class' properties.           
===================================================================================== ===================================================================

