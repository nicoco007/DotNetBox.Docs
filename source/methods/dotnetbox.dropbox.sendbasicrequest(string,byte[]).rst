:orphan:

:index:`Dropbox.SendBasicRequest Method (string, byte[])`
=========================================================

Send a basic request to Dropbox's API, with no authentication. Used mostly for getting an OAuth token.

Syntax
------

::

	Dropbox.SendBasicRequest(string url, byte[] data)

Parameters
----------

**url**
	*System.String* API endpoint URL.

**data**
	*System.Byte[]* Data to send, usually a string of POST parameters.

Returns
-------

*System.String* The server's response.
