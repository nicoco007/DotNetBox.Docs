:orphan:

:index:`ListFolderLongpollResult Class`
=======================================

Result of a :doc:`ListFolderLongpoll(string, int) </methods/dotnetbox.subapis.files.listfolderlongpoll(string,int)>`  request.

Constructors
------------

============================================================================================================ =============================================================
Name                                                                                                         Description                                                   
============================================================================================================ =============================================================
:doc:`ListFolderLongpollResult(bool, Int32?) </methods/dotnetbox.listfolderlongpollresult.ctor(bool,int32)>` Creates a new instance of the ListFolderLongpollResult class. 
============================================================================================================ =============================================================

Properties
----------

======= ============== ===========================================================================================================================================================================
Name    Type           Description                                                                                                                                                                 
======= ============== ===========================================================================================================================================================================
Backoff System.Int     If present, wait at least this many seconds before calling :doc:`ListFolderLongpoll(string, int) </methods/dotnetbox.subapis.files.listfolderlongpoll(string,int)>`  again. 
Changes System.Boolean Whether changes have occured or not. Use :doc:`ListFolderContinue(string) </methods/dotnetbox.subapis.files.listfoldercontinue(string)>`  to see changes.                   
======= ============== ===========================================================================================================================================================================

Methods
-------

================================================================================================================= =================================================================================
Name                                                                                                              Description                                                                       
================================================================================================================= =================================================================================
:doc:`ListFolderLongpollResult.FromJson(JObject) </methods/dotnetbox.listfolderlongpollresult.fromjson(jobject)>` Creates a new instance of the ListFolderLongpollResult class using a JSON object. 
:doc:`ListFolderLongpollResult.ToString() </methods/dotnetbox.listfolderlongpollresult.tostring()>`               Returns a string containing all of the class' properties.                         
================================================================================================================= =================================================================================

