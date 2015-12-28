:orphan:

:index:`Sharing.RelinquishFolderMembership Method (string)`
===========================================================

The current user relinquishes their membership in the designated shared folder and will no longer have access to the folder. A folder owner cannot relinquish membership in their own folder. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.RelinquishFolderMembership(string sharedFolderId)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

