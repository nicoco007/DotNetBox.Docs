:orphan:

:index:`Sharing.UpdateFolderMember Method (string, string, AccessLevel)`
========================================================================

Allows an owner or editor of a shared folder to update another member's permissions. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.UpdateFolderMember(string sharedFolderId, string memberIdentifier, AccessLevel accessLevel)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

**memberIdentifier**
	*System.String* The member of the shared folder to update.

**accessLevel**
	:doc:`DotNetBox.AccessLevel </classes/dotnetbox.accesslevel>` The new access level for member. AccessLevel.owner is disallowed.

