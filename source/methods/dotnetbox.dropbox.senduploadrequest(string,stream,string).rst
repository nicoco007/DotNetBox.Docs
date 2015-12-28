:orphan:

:index:`Dropbox.SendUploadRequest Method (string, Stream, string)`
==================================================================

Send an upload request to Dropbox's API.

Syntax
------

::

	Dropbox.SendUploadRequest(string url, Stream data, string args)

Parameters
----------

**url**
	*System.String* API endpoint URL.

**data**
	*System.IO.Stream* Stream of data to upload.

**args**
	*System.String* Request arguments.

Returns
-------

*System.String* Request response.
