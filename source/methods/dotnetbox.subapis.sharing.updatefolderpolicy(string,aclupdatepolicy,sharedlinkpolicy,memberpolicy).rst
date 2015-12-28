:orphan:

:index:`Sharing.UpdateFolderPolicy Method (string, AclUpdatePolicy?, SharedLinkPolicy?, MemberPolicy?)`
=======================================================================================================

Update the sharing policies for a shared folder. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.UpdateFolderPolicy(string sharedFolderId, AclUpdatePolicy? aclUpdatePolicy, SharedLinkPolicy? sharedLinkPolicy, MemberPolicy? memberPolicy)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

**aclUpdatePolicy**
	*DotNetBox.AclUpdatePolicy?* Who can add and remove members of this shared folder. This field is optional.

**sharedLinkPolicy**
	*DotNetBox.SharedLinkPolicy?* The policy to apply to shared links created for content inside this shared folder. This field is optional.

**memberPolicy**
	*DotNetBox.MemberPolicy?* Who can be a member of this shared folder. Only set this if the current user is on a team. This field is optional.

Returns
-------

:doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>` 
