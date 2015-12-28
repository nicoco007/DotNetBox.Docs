:orphan:

:index:`ShareFolderJobStatus Class`
===================================

Status of a folder sharing process.

Constructors
------------

==================================================================================================================================================================== =========================================================
Name                                                                                                                                                                 Description                                               
==================================================================================================================================================================== =========================================================
:doc:`ShareFolderJobStatus(AsyncJobStatus, SharedFolderMetadata, string) </methods/dotnetbox.sharefolderjobstatus.ctor(asyncjobstatus,sharedfoldermetadata,string)>` Creates a new instance of the ShareFolderJobStatus class. 
==================================================================================================================================================================== =========================================================

Properties
----------

============== =============================================================================== ==========================================================================
Name           Type                                                                            Description                                                                
============== =============================================================================== ==========================================================================
Error          System.String                                                                   Error that occured during sharing process. Only present if job has failed. 
FolderMetadata :doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>` Metadata of the shared folder. Only present if job has completed.          
JobStatus      :doc:`DotNetBox.AsyncJobStatus </classes/dotnetbox.asyncjobstatus>`             Current status of the job.                                                 
============== =============================================================================== ==========================================================================

Methods
-------

========================================================================================================= =============================================================================
Name                                                                                                      Description                                                                   
========================================================================================================= =============================================================================
:doc:`ShareFolderJobStatus.FromJson(JObject) </methods/dotnetbox.sharefolderjobstatus.fromjson(jobject)>` Creates a new instance of the ShareFolderJobStatus class using a JSON object. 
:doc:`ShareFolderJobStatus.ToString() </methods/dotnetbox.sharefolderjobstatus.tostring()>`               Returns a string containing all of the class' properties.                     
========================================================================================================= =============================================================================

