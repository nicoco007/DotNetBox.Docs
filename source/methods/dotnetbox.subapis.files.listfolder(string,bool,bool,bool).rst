:orphan:

:index:`Files.ListFolder Method (string, bool, bool, bool)`
===========================================================

Returns the contents of a folder.

Syntax
------

::

	Files.ListFolder(string path, bool recursive, bool includeMediaInfo, bool includeDeleted)

Parameters
----------

**path**
	*System.String* The path to the folder you want to see the contents of.

**recursive**
	*System.Boolean* If true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders. The default for this field is False.

**includeMediaInfo**
	*System.Boolean* If true, FileMetadata.MediaInfo is set for photo and video. The default for this field is False.

**includeDeleted**
	*System.Boolean* If true, the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.

Returns
-------

:doc:`DotNetBox.ListFolderResult </classes/dotnetbox.listfolderresult>`  Contents of folder.
