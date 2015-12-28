:index:`SearchResult Class`
===========================

Result of a :doc:`Search(string, string, int, int, SearchMode) </methods/dotnetbox.subapis.files.search(string,string,int,int,searchmode)>`  request.

Constructors
------------

========================================================================================================================= =================================================
Name                                                                                                                      Description                                       
========================================================================================================================= =================================================
:doc:`SearchResult.SearchResult(SearchMatch[], bool, int) </methods/dotnetbox.searchresult.ctor(searchmatch[],bool,int)>` Creates a new instance of the SearchResult class. 
========================================================================================================================= =================================================

Properties
----------

======= ============================================================= ============================================================================================================================================================================================================================
Name    Type                                                          Description                                                                                                                                                                                                                  
======= ============================================================= ============================================================================================================================================================================================================================
Matches :doc:`DotNetBox.SearchMatch </classes/dotnetbox.searchmatch>` List of search matches.                                                                                                                                                                                                      
More    System.Boolean                                                Whether there are more matches to list or not.                                                                                                                                                                               
Start   System.Int                                                    Used for paging. Value at which to set the start argument when calling :doc:`Search(string, string, int, int, SearchMode) </methods/dotnetbox.subapis.files.search(string,string,int,int,searchmode)>`  to see more results. 
======= ============================================================= ============================================================================================================================================================================================================================

Methods
-------

========================================================================================= =====================================================================
Name                                                                                      Description                                                           
========================================================================================= =====================================================================
:doc:`SearchResult.FromJson(JObject) </methods/dotnetbox.searchresult.fromjson(jobject)>` Creates a new instance of the SearchResult class using a JSON object. 
:doc:`SearchResult.ToString() </methods/dotnetbox.searchresult.tostring()>`               Returns a string containing all of the class' properties.             
========================================================================================= =====================================================================

