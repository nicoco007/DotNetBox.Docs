:index:`ListSharedLinksResult Class`
====================================

Result of a :doc:`ListSharedLinks(string, string) </methods/dotnetbox.subapis.sharing.listsharedlinks(string,string)>`  request.

Constructors
------------

============================================================================================================================================================ ==========================================================
Name                                                                                                                                                         Description                                                
============================================================================================================================================================ ==========================================================
:doc:`ListSharedLinksResult.ListSharedLinksResult(LinkMetadata[], bool, string) </methods/dotnetbox.listsharedlinksresult.ctor(linkmetadata[],bool,string)>` Creates a new instance of the ListSharedLinksResult class. 
============================================================================================================================================================ ==========================================================

Properties
----------

======= =============================================================== ================================================================================================================================================================
Name    Type                                                            Description                                                                                                                                                      
======= =============================================================== ================================================================================================================================================================
Cursor  System.String                                                   Pass to :doc:`ListSharedLinks(string, string) </methods/dotnetbox.subapis.sharing.listsharedlinks(string,string)>`  without a path to continue listing of links. 
HasMore System.Boolean                                                  Whether there are more links to list or not.                                                                                                                     
Links   :doc:`DotNetBox.LinkMetadata </classes/dotnetbox.linkmetadata>` List of the user's shared links and information regarding them.                                                                                                  
======= =============================================================== ================================================================================================================================================================

Methods
-------

=========================================================================================================== ==============================================================================
Name                                                                                                        Description                                                                    
=========================================================================================================== ==============================================================================
:doc:`ListSharedLinksResult.FromJson(JObject) </methods/dotnetbox.listsharedlinksresult.fromjson(jobject)>` Creates a new instance of the ListSharedLinksResult class using a JSON object. 
:doc:`ListSharedLinksResult.ToString() </methods/dotnetbox.listsharedlinksresult.tostring()>`               Returns a string containing all of the class' properties.                      
=========================================================================================================== ==============================================================================

