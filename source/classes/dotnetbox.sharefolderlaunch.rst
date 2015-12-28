:orphan:

:index:`ShareFolderLaunch Class`
================================

Returns folder metadata if operation is synchronous, and an async job ID if asynchronous.

Constructors
------------

=============================================================================================================================== ======================================================
Name                                                                                                                            Description                                            
=============================================================================================================================== ======================================================
:doc:`ShareFolderLaunch(string, SharedFolderMetadata) </methods/dotnetbox.sharefolderlaunch.ctor(string,sharedfoldermetadata)>` Creates a new instance of the ShareFolderLaunch class. 
=============================================================================================================================== ======================================================

Properties
----------

============== =============================================================================== ==================================================================================================================================================================================
Name           Type                                                                            Description                                                                                                                                                                        
============== =============================================================================== ==================================================================================================================================================================================
AsyncJobId     System.String                                                                   Job ID to be passed to the :doc:`CheckShareJobStatus(string) </methods/dotnetbox.subapis.sharing.checksharejobstatus(string)>`  method. Only present if operation is asynchronous. 
FolderMetadata :doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>` Folder metadata returned if operation is synchronous.                                                                                                                              
============== =============================================================================== ==================================================================================================================================================================================

Methods
-------

=================================================================================================== ====================================================================================
Name                                                                                                Description                                                                          
=================================================================================================== ====================================================================================
:doc:`ShareFolderLaunch.FromJson(JObject) </methods/dotnetbox.sharefolderlaunch.fromjson(jobject)>` Creates a new instance of the ShareFolderLaunch class using data from a JSON object. 
:doc:`ShareFolderLaunch.ToString() </methods/dotnetbox.sharefolderlaunch.tostring()>`               Returns a string containing all of the class' properties.                            
=================================================================================================== ====================================================================================

