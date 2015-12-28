:index:`FolderMetadata Class`
=============================

A class containing specific information regarding folder entries.

Constructors
------------

============================================================================================================================================================================================== =======================================================
Name                                                                                                                                                                                           Description                                             
============================================================================================================================================================================================== =======================================================
:doc:`FolderMetadata.FolderMetadata(string, string, string, string, string, FolderSharingInfo) </methods/dotnetbox.foldermetadata.ctor(string,string,string,string,string,foldersharinginfo)>` Initializes a new instance of the FolderMetadata class. 
============================================================================================================================================================================================== =======================================================

Properties
----------

==================== ========================================================================= ===================================================================================================================================
Name                 Type                                                                      Description                                                                                                                         
==================== ========================================================================= ===================================================================================================================================
Id                   System.String                                                             Unique ID of the folder.                                                                                                            
Name                 System.String                                                             Name of the entry.                                                                                                                  
ParentSharedFolderId System.String                                                             If in a shared folder, shared ID of that folder.                                                                                    
Path                 System.String                                                             Path of the entry.                                                                                                                  
SharedFolderId       System.String                                                             If the folder is a shared folder, ID of that shared folder.                                                                         
SharingInfo          :doc:`DotNetBox.FolderSharingInfo </classes/dotnetbox.foldersharinginfo>` Information about the folder's sharing status. Set if the folder is contained in a shared folder or is a shared folder mount point. 
==================== ========================================================================= ===================================================================================================================================

Methods
-------

============================================================================================= ======================================================================
Name                                                                                          Description                                                            
============================================================================================= ======================================================================
:doc:`FolderMetadata.FromJson(JObject) </methods/dotnetbox.foldermetadata.fromjson(jobject)>` Create a new instance of the FolderMetadata class using a JSON object. 
:doc:`FolderMetadata.ToString() </methods/dotnetbox.foldermetadata.tostring()>`               Returns a string containing all of the class' properties.              
============================================================================================= ======================================================================

