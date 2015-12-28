:index:`TeamMemberInfo Class`
=============================

Information about a team member.

Constructors
------------

======================================================================================================================= ===================================================
Name                                                                                                                    Description                                         
======================================================================================================================= ===================================================
:doc:`TeamMemberInfo.TeamMemberInfo(Team, string, string) </methods/dotnetbox.teammemberinfo.ctor(team,string,string)>` Creates a new instance of the TeamMemberInfo class. 
======================================================================================================================= ===================================================

Properties
----------

=========== =============================================== ===============================
Name        Type                                            Description                     
=========== =============================================== ===============================
DisplayName System.String                                   Team member's display name.     
MemberId    System.String                                   Team member's unique ID.        
TeamInfo    :doc:`DotNetBox.Team </classes/dotnetbox.team>` Team member's team information. 
=========== =============================================== ===============================

Methods
-------

============================================================================================= =======================================================================
Name                                                                                          Description                                                             
============================================================================================= =======================================================================
:doc:`TeamMemberInfo.FromJson(JObject) </methods/dotnetbox.teammemberinfo.fromjson(jobject)>` Creates a new instance of the TeamMemberInfo class using a JSON object. 
:doc:`TeamMemberInfo.ToString() </methods/dotnetbox.teammemberinfo.tostring()>`               Returns a string containing all of the class' properties.               
============================================================================================= =======================================================================

