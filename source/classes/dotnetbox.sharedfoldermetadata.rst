:index:`SharedFolderMetadata Class`
===================================

Basic information about a shared folder.

Constructors
------------

============================================================================================================================================================================================================ =========================================================
Name                                                                                                                                                                                                         Description                                               
============================================================================================================================================================================================================ =========================================================
:doc:`SharedFolderMetadata.SharedFolderMetadata(string, string, AccessLevel, bool, FolderPolicy, string) </methods/dotnetbox.sharedfoldermetadata.ctor(string,string,accesslevel,bool,folderpolicy,string)>` Creates a new instance of the SharedFolderMetadata class. 
============================================================================================================================================================================================================ =========================================================

Properties
----------

============== =============================================================== ===========================================================
Name           Type                                                            Description                                                 
============== =============================================================== ===========================================================
AccessType     :doc:`DotNetBox.AccessLevel </classes/dotnetbox.accesslevel>`   The current user's access level to the shared folder.       
IsMounted      System.Boolean                                                  Whether the folder is mounted in the user's Dropbox or not. 
IsTeamFolder   System.Boolean                                                  Whether the folder is a team folder or not.                 
Name           System.String                                                   Name of the shared folder.                                  
Path           System.String                                                   Path at which the folder is mounted in the user's Dropbox.  
Policy         :doc:`DotNetBox.FolderPolicy </classes/dotnetbox.folderpolicy>` Policies governing this shared folder.                      
SharedFolderId System.String                                                   Unique ID of the shared folder.                             
============== =============================================================== ===========================================================

Methods
-------

========================================================================================================= =============================================================================
Name                                                                                                      Description                                                                   
========================================================================================================= =============================================================================
:doc:`SharedFolderMetadata.FromJson(JObject) </methods/dotnetbox.sharedfoldermetadata.fromjson(jobject)>` Creates a new instance of the SharedFolderMetadata class using a JSON object. 
:doc:`SharedFolderMetadata.ToString() </methods/dotnetbox.sharedfoldermetadata.tostring()>`               Returns a string containing all of the class' properties.                     
========================================================================================================= =============================================================================

