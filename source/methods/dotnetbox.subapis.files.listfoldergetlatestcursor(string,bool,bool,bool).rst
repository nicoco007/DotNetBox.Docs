:index:`Files.ListFolderGetLatestCursor Method (string, bool, bool, bool)`
==========================================================================

A way to quickly get a cursor for the folder's state. Unlike ListFolder, ListFolderGetLatestCursor doesn't return any entries. This endpoint is for apps which only needs to know about new files and modifications and doesn't need to know about files that already exist in the folder.

Syntax
------

::

	Files.ListFolderGetLatestCursor(string path, bool recursive, bool includeMediaInfo, bool includeDeleted)

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

*System.String* Pass the cursor into ListFolderContinue to see what's changed in the folder since your previous query.
