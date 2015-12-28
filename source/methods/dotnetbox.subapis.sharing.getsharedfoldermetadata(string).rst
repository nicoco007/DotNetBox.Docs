:index:`Sharing.GetSharedFolderMetadata Method (string)`
========================================================

Returns shared folder metadata by its folder ID. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.GetSharedFolderMetadata(string sharedFolderId)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

Returns
-------

:doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>`  Metadata of the shared folder (name, path, policies, etc.)
