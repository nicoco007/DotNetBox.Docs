:index:`JobStatus Class`
========================

Status of an asynchronous job.

Constructors
------------

============================================================================================================= ==============================================
Name                                                                                                          Description                                    
============================================================================================================= ==============================================
:doc:`JobStatus.JobStatus(AsyncJobStatus, string) </methods/dotnetbox.jobstatus.ctor(asyncjobstatus,string)>` Creates a new instance of the JobStatus class. 
============================================================================================================= ==============================================

Properties
----------

====== =================================================================== ===========================================================
Name   Type                                                                Description                                                 
====== =================================================================== ===========================================================
Error  System.String                                                       Error thrown during the asynchronous operation, if occured. 
Status :doc:`DotNetBox.AsyncJobStatus </classes/dotnetbox.asyncjobstatus>` Asynchronous job status.                                    
====== =================================================================== ===========================================================

Methods
-------

=================================================================================== ==================================================================
Name                                                                                Description                                                        
=================================================================================== ==================================================================
:doc:`JobStatus.FromJson(JObject) </methods/dotnetbox.jobstatus.fromjson(jobject)>` Creates a new instance of the JobStatus class using a JSON object. 
:doc:`JobStatus.ToString() </methods/dotnetbox.jobstatus.tostring()>`               Returns a string containing all of the class' properties.          
=================================================================================== ==================================================================

