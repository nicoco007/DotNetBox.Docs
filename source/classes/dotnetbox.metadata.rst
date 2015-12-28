:index:`Metadata Class`
=======================

A class containing general information about a file, folder or deleted entry.

Constructors
------------

========================================================================================================================================== =================================================
Name                                                                                                                                       Description                                       
========================================================================================================================================== =================================================
:doc:`Metadata.Metadata(string, string, string, bool, bool, bool) </methods/dotnetbox.metadata.ctor(string,string,string,bool,bool,bool)>` Initializes a new instance of the Metadata class. 
========================================================================================================================================== =================================================

Properties
----------

==================== ============== ================================================
Name                 Type           Description                                      
==================== ============== ================================================
IsDeleted            System.Boolean Whether the entry has been deleted or not.       
IsFile               System.Boolean Whether the entry is a file or not.              
IsFolder             System.Boolean Whether the entry is a folder or not.            
Name                 System.String  Name of the entry.                               
ParentSharedFolderId System.String  If in a shared folder, shared ID of that folder. 
Path                 System.String  Path of the entry.                               
==================== ============== ================================================

Methods
-------

================================================================================= ==============================================================
Name                                                                              Description                                                    
================================================================================= ==============================================================
:doc:`Metadata.FromJson(JObject) </methods/dotnetbox.metadata.fromjson(jobject)>` Create a Metadata class from JSON.                             
:doc:`Metadata.FromTag(JObject) </methods/dotnetbox.metadata.fromtag(jobject)>`   Get a specific type of Metadata from the tag of a JSON object. 
:doc:`Metadata.ToString() </methods/dotnetbox.metadata.tostring()>`               Returns a string containing all of the class' properties.      
================================================================================= ==============================================================

