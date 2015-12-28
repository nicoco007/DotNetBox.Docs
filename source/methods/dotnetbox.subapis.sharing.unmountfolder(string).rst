:index:`Sharing.UnmountFolder Method (string)`
==============================================

Unmounts the designated folder. They can re-mount the folder at a later time using mount_folder. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.UnmountFolder(string sharedFolderId)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

