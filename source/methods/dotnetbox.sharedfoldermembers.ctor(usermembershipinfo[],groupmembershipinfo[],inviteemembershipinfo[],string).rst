:index:`SharedFolderMembers.SharedFolderMembers Constructor (UserMembershipInfo[], GroupMembershipInfo[], InviteeMembershipInfo[], string)`
===========================================================================================================================================

Creates a new instance of the SharedFolderMembers class.

Syntax
------

::

	SharedFolderMembers sharedFolderMembers = new SharedFolderMembers(UserMembershipInfo[] users, GroupMembershipInfo[] groups, InviteeMembershipInfo[] invitees, string cursor)

Parameters
----------

**users**
	:doc:`DotNetBox.UserMembershipInfo[] </classes/dotnetbox.usermembershipinfo>` List of users.

**groups**
	:doc:`DotNetBox.GroupMembershipInfo[] </classes/dotnetbox.groupmembershipinfo>` List of groups.

**invitees**
	:doc:`DotNetBox.InviteeMembershipInfo[] </classes/dotnetbox.inviteemembershipinfo>` List of invited members.

**cursor**
	*System.String* Request cursor.

