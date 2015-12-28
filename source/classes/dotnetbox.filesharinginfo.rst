:orphan:

:index:`FileSharingInfo Class`
==============================

Information about a file's sharing status.

Constructors
------------

========================================================================================================== ====================================================
Name                                                                                                       Description                                          
========================================================================================================== ====================================================
:doc:`FileSharingInfo(bool, string, string) </methods/dotnetbox.filesharinginfo.ctor(bool,string,string)>` Creates a new instance of the FileSharingInfo class. 
========================================================================================================== ====================================================

Properties
----------

==================== ============== =====================================================
Name                 Type           Description                                           
==================== ============== =====================================================
ModifiedBy           System.String  The last user who modified the file.                  
ParentSharedFolderId System.String  ID of the shared folder that holds this file.         
ReadOnly             System.Boolean Whether the file is inside a read-only shared folder. 
==================== ============== =====================================================

Methods
-------

=============================================================================================== ========================================================================
Name                                                                                            Description                                                              
=============================================================================================== ========================================================================
:doc:`FileSharingInfo.FromJson(JObject) </methods/dotnetbox.filesharinginfo.fromjson(jobject)>` Creates a new instance of the FileSharingInfo class using a JSON object. 
:doc:`FileSharingInfo.ToString() </methods/dotnetbox.filesharinginfo.tostring()>`               Returns a string containing all of the class' properties.                
=============================================================================================== ========================================================================

