:orphan:

:index:`LaunchEmptyResult Class`
================================

Returned when an asynchronous operation starts,

Constructors
------------

=================================================================================================================== ======================================================
Name                                                                                                                Description                                            
=================================================================================================================== ======================================================
:doc:`LaunchEmptyResult(AsyncJobStatus, string) </methods/dotnetbox.launchemptyresult.ctor(asyncjobstatus,string)>` Creates a new instance of the LaunchEmptyResult class. 
=================================================================================================================== ======================================================

Properties
----------

========== =================================================================== ==================================
Name       Type                                                                Description                        
========== =================================================================== ==================================
AsyncJobId System.String                                                       Asynchronous job's unique ID.      
JobStatus  :doc:`DotNetBox.AsyncJobStatus </classes/dotnetbox.asyncjobstatus>` Asynchronous job's current status. 
========== =================================================================== ==================================

Methods
-------

=================================================================================================== ==========================================================================
Name                                                                                                Description                                                                
=================================================================================================== ==========================================================================
:doc:`LaunchEmptyResult.FromJson(JObject) </methods/dotnetbox.launchemptyresult.fromjson(jobject)>` Creates a new instance of the LaunchEmptyResult class using a JSON object. 
:doc:`LaunchEmptyResult.ToString() </methods/dotnetbox.launchemptyresult.tostring()>`               Returns a string containing all of the class' properties.                  
=================================================================================================== ==========================================================================

