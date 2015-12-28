:index:`Files.GetMetadata Method (string, bool)`
================================================

Returns the metadata for a file or folder.

Syntax
------

::

	Files.GetMetadata(string path, bool includeMediaInfo)

Parameters
----------

**path**
	*System.String* The path of a file or folder onCan also be a rev or id.

**includeMediaInfo**
	*System.Boolean* If true, FileMetadata.MediaInfo is set for photo and video. The default for this field is False.

Returns
-------

:doc:`DotNetBox.Metadata </classes/dotnetbox.metadata>`  Metadata for a file or folder. It will be of type FileMetadata, FolderMetadata, or DeletedMetadata
