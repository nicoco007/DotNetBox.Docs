:index:`Dropbox.SendRequest Method (string, byte[], int, bool)`
===============================================================

Send an API request to Dropbox.

Syntax
------

::

	Dropbox.SendRequest(string url, byte[] data, int timeout, bool authRequired)

Parameters
----------

**url**
	*System.String* API endpoint URL.

**data**
	*System.Byte[]* Data to POST to endpoint.

**timeout**
	*System.Int32* Request timeout.

**authRequired**
	*System.Boolean* Whether authentication should be used or not.

Returns
-------

*System.String* Request response.
