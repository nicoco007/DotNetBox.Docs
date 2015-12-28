:orphan:

:index:`Metadata Constructor (string, string, string, bool, bool, bool)`
========================================================================

Initializes a new instance of the Metadata class.

Syntax
------

::

	Metadata metadata = new Metadata(string name, string path, string parentSharedFolderId, bool isFile, bool isFolder, bool isDeleted)

Parameters
----------

**name**
	*System.String* Name of the entry.

**path**
	*System.String* Path of the entry.

**parentSharedFolderId**
	*System.String* ID of the parent shared folder, if applicable.

**isFile**
	*System.Boolean* Whether the entry is a file or not.

**isFolder**
	*System.Boolean* Whether the entry is a folder or not.

**isDeleted**
	*System.Boolean* Whether the entry has been deleted or not.

