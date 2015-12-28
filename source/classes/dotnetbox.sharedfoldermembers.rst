:index:`SharedFolderMembers Class`
==================================

Stores information on a shared folder's members (users, groups, and invited members)

Constructors
------------

===================================================================================================================================================================================================================================================== ========================================================
Name                                                                                                                                                                                                                                                  Description                                              
===================================================================================================================================================================================================================================================== ========================================================
:doc:`SharedFolderMembers.SharedFolderMembers(UserMembershipInfo[], GroupMembershipInfo[], InviteeMembershipInfo[], string) </methods/dotnetbox.sharedfoldermembers.ctor(usermembershipinfo[],groupmembershipinfo[],inviteemembershipinfo[],string)>` Creates a new instance of the SharedFolderMembers class. 
===================================================================================================================================================================================================================================================== ========================================================

Properties
----------

======== ================================================================================= ====================================================================================================================================================================================================================================================
Name     Type                                                                              Description                                                                                                                                                                                                                                          
======== ================================================================================= ====================================================================================================================================================================================================================================================
Cursor   System.String                                                                     Present if there are additional shared folder members that have not been listed yet. Pass to :doc:`ListSharedFolderMembersContinue(string) </methods/dotnetbox.subapis.sharing.listsharedfoldermemberscontinue(string)>`  to get additional members. 
Groups   :doc:`DotNetBox.GroupMembershipInfo </classes/dotnetbox.groupmembershipinfo>`     List of group members of the shared folder.                                                                                                                                                                                                          
Invitees :doc:`DotNetBox.InviteeMembershipInfo </classes/dotnetbox.inviteemembershipinfo>` List of invited members of the shared folder.                                                                                                                                                                                                        
Users    :doc:`DotNetBox.UserMembershipInfo </classes/dotnetbox.usermembershipinfo>`       List of user members of the shared folder.                                                                                                                                                                                                           
======== ================================================================================= ====================================================================================================================================================================================================================================================

Methods
-------

======================================================================================================= ============================================================================
Name                                                                                                    Description                                                                  
======================================================================================================= ============================================================================
:doc:`SharedFolderMembers.FromJson(JObject) </methods/dotnetbox.sharedfoldermembers.fromjson(jobject)>` Creates a new instance of the SharedFolderMembers class using a JSON object. 
:doc:`SharedFolderMembers.ToString() </methods/dotnetbox.sharedfoldermembers.tostring()>`               Returns a string containing all of the class' properties.                    
======================================================================================================= ============================================================================

