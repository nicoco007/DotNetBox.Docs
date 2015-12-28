:orphan:

:index:`DeletedMetadata Class`
==============================

A class containing specific information regarding deleted entries.

Constructors
------------

============================================================================================================== ===================================================
Name                                                                                                           Description                                         
============================================================================================================== ===================================================
:doc:`DeletedMetadata(string, string, string) </methods/dotnetbox.deletedmetadata.ctor(string,string,string)>` Creates a new instance of the DeletedMetdata class. 
============================================================================================================== ===================================================

Properties
----------

==================== ============= ================================================
Name                 Type          Description                                      
==================== ============= ================================================
Name                 System.String Name of the entry.                               
ParentSharedFolderId System.String If in a shared folder, shared ID of that folder. 
Path                 System.String Path of the entry.                               
==================== ============= ================================================

Methods
-------

=============================================================================================== ========================================================================
Name                                                                                            Description                                                              
=============================================================================================== ========================================================================
:doc:`DeletedMetadata.FromJson(JObject) </methods/dotnetbox.deletedmetadata.fromjson(jobject)>` Creates a new instance of the DeletedMetadata class using a JSON object. 
:doc:`DeletedMetadata.ToString() </methods/dotnetbox.deletedmetadata.tostring()>`               Returns a string containing all of the class' properties.                
=============================================================================================== ========================================================================

