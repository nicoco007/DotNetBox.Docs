:orphan:

:index:`FolderSharingInfo Class`
================================

Information about a folder's sharing status.

Constructors
------------

============================================================================================================== ======================================================
Name                                                                                                           Description                                            
============================================================================================================== ======================================================
:doc:`FolderSharingInfo(bool, string, string) </methods/dotnetbox.foldersharinginfo.ctor(bool,string,string)>` Creates a new instance of the FolderSharingInfo class. 
============================================================================================================== ======================================================

Properties
----------

==================== ============== ====================================================================================================
Name                 Type           Description                                                                                          
==================== ============== ====================================================================================================
ParentSharedFolderId System.String  Parent shared folder's ID. Set if the folder is contained by a shared folder.                        
ReadOnly             System.Boolean Whether the file is inside a read-only shared folder.                                                
SharedFolderId       System.String  If this folder is a shared folder mount point, the ID of the shared folder mounted at this location. 
==================== ============== ====================================================================================================

Methods
-------

=================================================================================================== ==========================================================================
Name                                                                                                Description                                                                
=================================================================================================== ==========================================================================
:doc:`FolderSharingInfo.FromJson(JObject) </methods/dotnetbox.foldersharinginfo.fromjson(jobject)>` Creates a new instance of the FolderSharingInfo class using a JSON object. 
:doc:`FolderSharingInfo.ToString() </methods/dotnetbox.foldersharinginfo.tostring()>`               Returns a string containing all of the class' properties.                  
=================================================================================================== ==========================================================================

