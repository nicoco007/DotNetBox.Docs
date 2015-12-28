:orphan:

:index:`ListFolderResult Class`
===============================

Result of a :doc:`ListFolder(string, bool, bool, bool) </methods/dotnetbox.subapis.files.listfolder(string,bool,bool,bool)>`  or :doc:`ListFolderContinue(string) </methods/dotnetbox.subapis.files.listfoldercontinue(string)>`  request.

Constructors
------------

==================================================================================================================== =====================================================
Name                                                                                                                 Description                                           
==================================================================================================================== =====================================================
:doc:`ListFolderResult(Metadata[], string, bool) </methods/dotnetbox.listfolderresult.ctor(metadata[],string,bool)>` Creates a new instance of the ListFolderResult class. 
==================================================================================================================== =====================================================

Properties
----------

======= ======================================================= ========================================================================================================================================================================================
Name    Type                                                    Description                                                                                                                                                                              
======= ======================================================= ========================================================================================================================================================================================
Cursor  System.String                                           Pass the cursor to :doc:`ListFolderContinue(string) </methods/dotnetbox.subapis.files.listfoldercontinue(string)>`  to see what's changed since the last query.                          
Entries :doc:`DotNetBox.Metadata </classes/dotnetbox.metadata>` Files and folders present in the folder.                                                                                                                                                 
HasMore System.Boolean                                          Whether there are more entries to list or not. Pass the cursor to :doc:`ListFolderContinue(string) </methods/dotnetbox.subapis.files.listfoldercontinue(string)>`  to retrieve the rest. 
======= ======================================================= ========================================================================================================================================================================================

Methods
-------

================================================================================================= =========================================================================
Name                                                                                              Description                                                               
================================================================================================= =========================================================================
:doc:`ListFolderResult.FromJson(JObject) </methods/dotnetbox.listfolderresult.fromjson(jobject)>` Creates a new instance of the ListFolderResult class using a JSON object. 
:doc:`ListFolderResult.ToString() </methods/dotnetbox.listfolderresult.tostring()>`               Returns a string containing all of the class' properties.                 
================================================================================================= =========================================================================

