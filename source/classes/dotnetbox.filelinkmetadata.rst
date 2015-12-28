:orphan:

:index:`FileLinkMetadata Class`
===============================

Holds information about a shared file link.

Constructors
------------

============================================================================================================================================================================================================================================================================================== ===========
Name                                                                                                                                                                                                                                                                                           Description 
============================================================================================================================================================================================================================================================================================== ===========
:doc:`FileLinkMetadata(string, string, LinkPermissions, DateTime, DateTime, string, long, string, DateTime?, string, TeamMemberInfo, Team) </methods/dotnetbox.filelinkmetadata.ctor(string,string,linkpermissions,datetime,datetime,string,long,string,datetime,string,teammemberinfo,team)>`             
============================================================================================================================================================================================================================================================================================== ===========

Properties
----------

==================== ===================================================================== =======================================================================================================================================================================
Name                 Type                                                                  Description                                                                                                                                                             
==================== ===================================================================== =======================================================================================================================================================================
ClientModified       System.DateTime                                                       Date and time at which the file was modified on the client's side.                                                                                                      
ContentOwnerTeamInfo :doc:`DotNetBox.Team </classes/dotnetbox.team>`                       The team information of the content's owner. Only present if the content's owner is a team member and the content owner's team is different from the link owner's team. 
Expires              System.DateTime                                                       Expiry time of the link. Only available to Pro and Business accounts.                                                                                                   
LinkId               System.String                                                         Unique ID of the link.                                                                                                                                                  
LinkPermissions      :doc:`DotNetBox.LinkPermissions </classes/dotnetbox.linkpermissions>` User's access permissions on the link.                                                                                                                                  
Name                 System.String                                                         Name of the shared link's target file or folder.                                                                                                                        
Path                 System.String                                                         Path of the shared file/folder in the user's Dropbox. Only present if the link was created by the current user.                                                         
Rev                  System.String                                                         Revision of the file.                                                                                                                                                   
ServerModified       System.DateTime                                                       Date and time at which the file was modified on the server's side.                                                                                                      
Size                 System.String                                                         Size of the file, in bytes.                                                                                                                                             
TeamMemberInfo       :doc:`DotNetBox.TeamMemberInfo </classes/dotnetbox.teammemberinfo>`   The team membership information of the link's owner. Only present if the owner is a team member.                                                                        
Url                  System.String                                                         URL of the shared link.                                                                                                                                                 
==================== ===================================================================== =======================================================================================================================================================================

Methods
-------

================================================================================================= =========================================================================
Name                                                                                              Description                                                               
================================================================================================= =========================================================================
:doc:`FileLinkMetadata.FromJson(JObject) </methods/dotnetbox.filelinkmetadata.fromjson(jobject)>` Creates a new instance of the FileLinkMetadata class using a JSON object. 
:doc:`FileLinkMetadata.ToString() </methods/dotnetbox.filelinkmetadata.tostring()>`               Returns a string containing all of the class' properties.                 
================================================================================================= =========================================================================

