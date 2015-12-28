:index:`Files.Restore Method (string, string)`
==============================================

Restore a file to a specific revision.

Syntax
------

::

	Files.Restore(string path, string rev)

Parameters
----------

**path**
	*System.String* The path to the file you want to restore.

**rev**
	*System.String* The revision to restore for the file. Defaults to previous revision.

Returns
-------

:doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>`  Metadata of the restored file.
