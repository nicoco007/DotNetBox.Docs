:orphan:

:index:`FolderPolicy Constructor (AclUpdatePolicy, SharedLinkPolicy, MemberPolicy?)`
====================================================================================

Creates a new instance of the FolderPolicy class.

Syntax
------

::

	FolderPolicy folderPolicy = new FolderPolicy(AclUpdatePolicy aclUpdatePolicy, SharedLinkPolicy sharedLinkPolicy, MemberPolicy? memberPolicy)

Parameters
----------

**aclUpdatePolicy**
	:doc:`DotNetBox.AclUpdatePolicy </classes/dotnetbox.aclupdatepolicy>` Who can add and remove members from this shared folder.

**sharedLinkPolicy**
	:doc:`DotNetBox.SharedLinkPolicy </classes/dotnetbox.sharedlinkpolicy>` Who links can be shared with.

**memberPolicy**
	*DotNetBox.MemberPolicy?* Who can be a member of this shared folder. Only set if the user is a member of a team.

