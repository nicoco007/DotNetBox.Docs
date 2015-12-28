:orphan:

:index:`ListFolderResult Constructor (Metadata[], string, bool)`
================================================================

Creates a new instance of the ListFolderResult class.

Syntax
------

::

	ListFolderResult listFolderResult = new ListFolderResult(Metadata[] entries, string cursor, bool hasMore)

Parameters
----------

**entries**
	:doc:`DotNetBox.Metadata[] </classes/dotnetbox.metadata>` List of files and folders present in the folder.

**cursor**
	*System.String* Request cursor.

**hasMore**
	*System.Boolean* Whether there are more entries to list or not.

