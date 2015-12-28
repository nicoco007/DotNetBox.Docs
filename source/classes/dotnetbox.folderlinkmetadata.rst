:orphan:

:index:`FolderLinkMetadata Class`
=================================

Holds information about a shared folder link.

Constructors
------------

================================================================================================================================================================================================================================== =================================================
Name                                                                                                                                                                                                                               Description                                       
================================================================================================================================================================================================================================== =================================================
:doc:`FolderLinkMetadata(string, string, LinkPermissions, string, DateTime?, string, TeamMemberInfo, Team) </methods/dotnetbox.folderlinkmetadata.ctor(string,string,linkpermissions,string,datetime,string,teammemberinfo,team)>` Creates a new instance of the LinkMetadata class. 
================================================================================================================================================================================================================================== =================================================

Properties
----------

==================== ===================================================================== =======================================================================================================================================================================
Name                 Type                                                                  Description                                                                                                                                                             
==================== ===================================================================== =======================================================================================================================================================================
ContentOwnerTeamInfo :doc:`DotNetBox.Team </classes/dotnetbox.team>`                       The team information of the content's owner. Only present if the content's owner is a team member and the content owner's team is different from the link owner's team. 
Expires              System.DateTime                                                       Expiry time of the link. Only available to Pro and Business accounts.                                                                                                   
LinkId               System.String                                                         Unique ID of the link.                                                                                                                                                  
LinkPermissions      :doc:`DotNetBox.LinkPermissions </classes/dotnetbox.linkpermissions>` User's access permissions on the link.                                                                                                                                  
Name                 System.String                                                         Name of the shared link's target file or folder.                                                                                                                        
Path                 System.String                                                         Path of the shared file/folder in the user's Dropbox. Only present if the link was created by the current user.                                                         
TeamMemberInfo       :doc:`DotNetBox.TeamMemberInfo </classes/dotnetbox.teammemberinfo>`   The team membership information of the link's owner. Only present if the owner is a team member.                                                                        
Url                  System.String                                                         URL of the shared link.                                                                                                                                                 
==================== ===================================================================== =======================================================================================================================================================================

Methods
-------

===================================================================================================== ===========================================================================
Name                                                                                                  Description                                                                 
===================================================================================================== ===========================================================================
:doc:`FolderLinkMetadata.FromJson(JObject) </methods/dotnetbox.folderlinkmetadata.fromjson(jobject)>` Creates a new instance of the FolderLinkMetadata class using a JSON object. 
:doc:`FolderLinkMetadata.ToString() </methods/dotnetbox.folderlinkmetadata.tostring()>`               Returns a string containing all of the class' properties.                   
===================================================================================================== ===========================================================================

