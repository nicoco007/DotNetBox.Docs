:orphan:

:index:`Files.ListFolderContinue Method (string)`
=================================================

Once a cursor has been retrieved from ListFolder, use this to paginate through all files and retrieve updates to the folder.

Syntax
------

::

	Files.ListFolderContinue(string cursor)

Parameters
----------

**cursor**
	*System.String* The cursor returned by your last call to ListFolder or ListFolderContinue.

Returns
-------

:doc:`DotNetBox.ListFolderResult </classes/dotnetbox.listfolderresult>`  Contents of folder.
