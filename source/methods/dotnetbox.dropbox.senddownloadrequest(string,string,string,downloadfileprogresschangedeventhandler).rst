:orphan:

:index:`Dropbox.SendDownloadRequest Method (string, string, string, DownloadFileProgressChangedEventHandler)`
=============================================================================================================

Send a download request to Dropbox's API.

Syntax
------

::

	Dropbox.SendDownloadRequest(string url, string args, string saveFilePath, DownloadFileProgressChangedEventHandler progressChanged)

Parameters
----------

**url**
	*System.String* API endpoint URL.

**args**
	*System.String* Request arguments.

**saveFilePath**
	*System.String* Path at which the file should be saved.

**progressChanged**
	:doc:`DotNetBox.DownloadFileProgressChangedEventHandler </classes/dotnetbox.downloadfileprogresschangedeventhandler>` Event handler for when progress is changed.

Returns
-------

*System.String* Request response.
