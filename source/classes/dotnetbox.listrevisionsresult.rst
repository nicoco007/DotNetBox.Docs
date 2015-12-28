:index:`ListRevisionsResult Class`
==================================

Result of a :doc:`ListRevisions(string, int) </methods/dotnetbox.subapis.files.listrevisions(string,int)>`  request.

Constructors
------------

======================================================================================================================================= ========================================================
Name                                                                                                                                    Description                                              
======================================================================================================================================= ========================================================
:doc:`ListRevisionsResult.ListRevisionsResult(bool, FileMetadata[]) </methods/dotnetbox.listrevisionsresult.ctor(bool,filemetadata[])>` Creates a new instance of the ListRevisionsResult class. 
======================================================================================================================================= ========================================================

Properties
----------

========= =============================================================== ===================================
Name      Type                                                            Description                         
========= =============================================================== ===================================
Entries   :doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>` List of revisions made to the file. 
IsDeleted System.Boolean                                                  Whether the file is deleted or not. 
========= =============================================================== ===================================

Methods
-------

======================================================================================================= ============================================================================
Name                                                                                                    Description                                                                  
======================================================================================================= ============================================================================
:doc:`ListRevisionsResult.FromJson(JObject) </methods/dotnetbox.listrevisionsresult.fromjson(jobject)>` Creates a new instance of the ListRevisionsResult class using a JSON object. 
:doc:`ListRevisionsResult.ToString() </methods/dotnetbox.listrevisionsresult.tostring()>`               Returns a string containing all of the class' properties.                    
======================================================================================================= ============================================================================

