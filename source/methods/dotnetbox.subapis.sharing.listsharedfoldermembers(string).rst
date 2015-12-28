:orphan:

:index:`Sharing.ListSharedFolderMembers Method (string)`
========================================================

Returns shared folder membership by its folder ID. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.ListSharedFolderMembers(string sharedFolderId)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder

Returns
-------

:doc:`DotNetBox.SharedFolderMembers </classes/dotnetbox.sharedfoldermembers>`  List of specified shared folder's members (users, groups, and invitees).
