:orphan:

:index:`Files.Copy Method (string, string)`
===========================================

Copy a file or folder to a different location in the user's Dropbox. If the source path is a folder, all its contents will be copied.

Syntax
------

::

	Files.Copy(string fromPath, string toPath)

Parameters
----------

**fromPath**
	*System.String* Path in the user's Dropbox to be copied or moved.

**toPath**
	*System.String* Path in the user's Dropbox that is the destination.

Returns
-------

:doc:`DotNetBox.Metadata </classes/dotnetbox.metadata>`  Metadata of the copied (destination) file.
