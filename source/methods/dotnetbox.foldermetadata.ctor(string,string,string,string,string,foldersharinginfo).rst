:orphan:

:index:`FolderMetadata Constructor (string, string, string, string, string, FolderSharingInfo)`
===============================================================================================

Initializes a new instance of the FolderMetadata class.

Syntax
------

::

	FolderMetadata folderMetadata = new FolderMetadata(string name, string path, string parentSharedFolderId, string id, string sharedFolderId, FolderSharingInfo sharingInfo)

Parameters
----------

**name**
	*System.String* Name of the entry.

**path**
	*System.String* Path of the entry.

**parentSharedFolderId**
	*System.String* ID of the parent shared folder, if applicable.

**id**
	*System.String* Unique ID of the folder.

**sharedFolderId**
	*System.String* If the folder is shared, ID of the shared folder.

**sharingInfo**
	:doc:`DotNetBox.FolderSharingInfo </classes/dotnetbox.foldersharinginfo>` Information about the folder's sharing status.

