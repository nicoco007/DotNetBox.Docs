:index:`Sharing.TransferFolder Method (string, string)`
=======================================================

Transfer ownership of a shared folder to a member of the shared folder. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.TransferFolder(string sharedFolderId, string dropboxId)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

**dropboxId**
	*System.String* A account or team member ID to transfer ownership to.

