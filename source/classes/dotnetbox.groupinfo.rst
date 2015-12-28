:index:`GroupInfo Class`
========================

Information about a membership group.

Constructors
------------

================================================================================================================================ ==============================================
Name                                                                                                                             Description                                    
================================================================================================================================ ==============================================
:doc:`GroupInfo.GroupInfo(string, string, int, bool, string) </methods/dotnetbox.groupinfo.ctor(string,string,int,bool,string)>` Creates a new instance of the GroupInfo class. 
================================================================================================================================ ==============================================

Properties
----------

=============== ============= ======================================================================================
Name            Type          Description                                                                            
=============== ============= ======================================================================================
GroupExternalId System.String External Id of the group. This is an arbitrary Id that an admin can attach to a group. 
GroupId         System.String The group's unique ID.                                                                 
GroupName       System.String The group's name.                                                                      
MemberCount     System.String The amount of members in the group.                                                    
SameTeam        System.String If the group is owned by the current user's team or not.                               
=============== ============= ======================================================================================

Methods
-------

=================================================================================== ==================================================================
Name                                                                                Description                                                        
=================================================================================== ==================================================================
:doc:`GroupInfo.FromJson(JObject) </methods/dotnetbox.groupinfo.fromjson(jobject)>` Creates a new instance of the GroupInfo class using a JSON object. 
:doc:`GroupInfo.ToString() </methods/dotnetbox.groupinfo.tostring()>`               Returns a string containing all of the class' properties.          
=================================================================================== ==================================================================

