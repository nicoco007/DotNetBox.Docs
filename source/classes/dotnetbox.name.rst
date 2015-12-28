:orphan:

:index:`Name Class`
===================

Information about a user's name.

Constructors
------------

======================================================================================================= =========================================
Name                                                                                                    Description                               
======================================================================================================= =========================================
:doc:`Name(string, string, string, string) </methods/dotnetbox.name.ctor(string,string,string,string)>` Creates a new instance of the Name class. 
======================================================================================================= =========================================

Properties
----------

============ ============= ===================================================================================
Name         Type          Description                                                                         
============ ============= ===================================================================================
DisplayName  System.String User's display name.                                                                
FamiliarName System.String Language-dependent name. Usually a combination of the user's GivenName and Surname. 
GivenName    System.String User's first name.                                                                  
Surname      System.String User's last/family name.                                                            
============ ============= ===================================================================================

Methods
-------

========================================================================= =============================================================
Name                                                                      Description                                                   
========================================================================= =============================================================
:doc:`Name.FromJson(JObject) </methods/dotnetbox.name.fromjson(jobject)>` Creates a new instance of the Name class using a JSON object. 
:doc:`Name.ToString() </methods/dotnetbox.name.tostring()>`               Returns a string containing all of the class' properties.     
========================================================================= =============================================================

