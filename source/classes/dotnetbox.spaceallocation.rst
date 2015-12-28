:index:`SpaceAllocation Class`
==============================

Stores information on a user's total space allocation.

Constructors
------------

===================================================================================================================================== ====================================================
Name                                                                                                                                  Description                                          
===================================================================================================================================== ====================================================
:doc:`SpaceAllocation.SpaceAllocation(SpaceAllocationType, long) </methods/dotnetbox.spaceallocation.ctor(spaceallocationtype,long)>` Creates a new instance of the SpaceAllocation class. 
===================================================================================================================================== ====================================================

Properties
----------

========= ============================================================================= =================================================================================
Name      Type                                                                          Description                                                                       
========= ============================================================================= =================================================================================
Allocated System.Int                                                                    Space allocated, in bytes.                                                        
Type      :doc:`DotNetBox.SpaceAllocationType </classes/dotnetbox.spaceallocationtype>` Type of space allocation. Can be either individual allocation or team allocation. 
========= ============================================================================= =================================================================================

Methods
-------

=============================================================================================== ========================================================================
Name                                                                                            Description                                                              
=============================================================================================== ========================================================================
:doc:`SpaceAllocation.FromJson(JObject) </methods/dotnetbox.spaceallocation.fromjson(jobject)>` Creates a new instance of the SpaceAllocation class using a JSON object. 
:doc:`SpaceAllocation.ToString() </methods/dotnetbox.spaceallocation.tostring()>`               Returns a string containing all of the class' properties.                
=============================================================================================== ========================================================================

