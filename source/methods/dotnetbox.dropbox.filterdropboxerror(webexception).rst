:index:`Dropbox.FilterDropboxError Method (WebException)`
=========================================================

If the server responds, throw an error with the server's error message. If not, throw the exception.

Syntax
------

::

	Dropbox.FilterDropboxError(WebException ex)

Parameters
----------

**ex**
	*System.Net.WebException* 

Returns
-------

*System.Exception* An exception based on the server's response, either :doc:`DotNetBox.DropboxException </classes/dotnetbox.dropboxexception>`  or System.Net.WebException
