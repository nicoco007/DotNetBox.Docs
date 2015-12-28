:orphan:

:index:`Sharing.MountFolder Method (string)`
============================================

Mount a shared folder for a user after they have been added as a member. Once mounted, the shared folder will appear in their Dropbox. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.MountFolder(string sharedFolderId)

Parameters
----------

**sharedFolderId**
	*System.String* The ID of the shared folder to mount.

Returns
-------

:doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>` 
