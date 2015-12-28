:orphan:

:index:`SearchMatch Class`
==========================

Stores information on a search result match.

Constructors
------------

============================================================================================================= ================================================
Name                                                                                                          Description                                      
============================================================================================================= ================================================
:doc:`SearchMatch(SearchMatchType, Metadata) </methods/dotnetbox.searchmatch.ctor(searchmatchtype,metadata)>` Creates a new instance of the SearchMatch class. 
============================================================================================================= ================================================

Properties
----------

========= ===================================================================== ======================================================
Name      Type                                                                  Description                                            
========= ===================================================================== ======================================================
MatchType :doc:`DotNetBox.SearchMatchType </classes/dotnetbox.searchmatchtype>` How the match was found (file name, content, or both). 
Metadata  :doc:`DotNetBox.Metadata </classes/dotnetbox.metadata>`               Metadata of the found file or folder.                  
========= ===================================================================== ======================================================

Methods
-------

======================================================================================= ====================================================================
Name                                                                                    Description                                                          
======================================================================================= ====================================================================
:doc:`SearchMatch.FromJson(JObject) </methods/dotnetbox.searchmatch.fromjson(jobject)>` Creates a new instance of the SearchMatch class using a JSON object. 
:doc:`SearchMatch.ToString() </methods/dotnetbox.searchmatch.tostring()>`               Returns a string containing all of the class' properties.            
======================================================================================= ====================================================================

