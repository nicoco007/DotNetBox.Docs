:orphan:

:index:`Sharing.RemoveFolderMember Method (string, string, bool)`
=================================================================

Allows an owner or editor(if the ACL update policy allows) of a shared folder to remove another member. Apps must have full Dropboxaccess to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.RemoveFolderMember(string sharedFolderId, string memberIdentifier, bool leaveCopy)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

**memberIdentifier**
	*System.String* The member to remove from the folder.

**leaveCopy**
	*System.Boolean* If true, the removed user will keep their copy of the folder after it's unshared, assuming it was mounted. Otherwise, it will be removed from their Dropbox. Also, this must be set to false when kicking a group.

Returns
-------

:doc:`DotNetBox.LaunchEmptyResult </classes/dotnetbox.launchemptyresult>` 
