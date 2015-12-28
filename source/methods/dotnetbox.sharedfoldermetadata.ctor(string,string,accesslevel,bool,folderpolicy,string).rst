:index:`SharedFolderMetadata.SharedFolderMetadata Constructor (string, string, AccessLevel, bool, FolderPolicy, string)`
========================================================================================================================

Creates a new instance of the SharedFolderMetadata class.

Syntax
------

::

	SharedFolderMetadata sharedFolderMetadata = new SharedFolderMetadata(string name, string sharedFolderId, AccessLevel accessType, bool isTeamFolder, FolderPolicy policy, string path)

Parameters
----------

**name**
	*System.String* Name of the shared folder.

**sharedFolderId**
	*System.String* ID of the folder.

**accessType**
	:doc:`DotNetBox.AccessLevel </classes/dotnetbox.accesslevel>` Access level the user has for the folder.

**isTeamFolder**
	*System.Boolean* Whether the folder is a team folder or not.

**policy**
	:doc:`DotNetBox.FolderPolicy </classes/dotnetbox.folderpolicy>` Folder policies.

**path**
	*System.String* Path at which the folder is mounted.

