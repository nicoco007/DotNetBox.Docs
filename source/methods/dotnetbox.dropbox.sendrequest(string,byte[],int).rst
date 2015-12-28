:index:`Dropbox.SendRequest Method (string, byte[], int)`
=========================================================

Send an API request to Dropbox.

Syntax
------

::

	Dropbox.SendRequest(string url, byte[] data, int timeout)

Parameters
----------

**url**
	*System.String* API endpoint URL.

**data**
	*System.Byte[]* Data to POST to endpoint.

**timeout**
	*System.Int32* Request timeout.

Returns
-------

*System.String* Request response.
