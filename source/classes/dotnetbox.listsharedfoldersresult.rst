:orphan:

:index:`ListSharedFoldersResult Class`
======================================

Result of a :doc:`ListSharedFolders() </methods/dotnetbox.subapis.sharing.listsharedfolders()>`  or :doc:`ListSharedFoldersContinue(string) </methods/dotnetbox.subapis.sharing.listsharedfolderscontinue(string)>`  request.

Constructors
------------

=============================================================================================================================================== ============================================================
Name                                                                                                                                            Description                                                  
=============================================================================================================================================== ============================================================
:doc:`ListSharedFoldersResult(SharedFolderMetadata[], string) </methods/dotnetbox.listsharedfoldersresult.ctor(sharedfoldermetadata[],string)>` Creates a new instance of the ListSharedFoldersResult class. 
=============================================================================================================================================== ============================================================

Properties
----------

======= =============================================================================== ==========================================================================================================================================================================================================
Name    Type                                                                            Description                                                                                                                                                                                                
======= =============================================================================== ==========================================================================================================================================================================================================
Cursor  System.String                                                                   Present if there are more entries available. Pass the cursor to :doc:`ListSharedFoldersContinue(string) </methods/dotnetbox.subapis.sharing.listsharedfolderscontinue(string)>`  to get remaining entries. 
Entries :doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>` List of user's shared folders.                                                                                                                                                                             
======= =============================================================================== ==========================================================================================================================================================================================================

Methods
-------

=============================================================================================================== ================================================================================
Name                                                                                                            Description                                                                      
=============================================================================================================== ================================================================================
:doc:`ListSharedFoldersResult.FromJson(JObject) </methods/dotnetbox.listsharedfoldersresult.fromjson(jobject)>` Creates a new instance of the ListSharedFoldersResult class using a JSON object. 
:doc:`ListSharedFoldersResult.ToString() </methods/dotnetbox.listsharedfoldersresult.tostring()>`               Returns a string containing all of the class' properties.                        
=============================================================================================================== ================================================================================

