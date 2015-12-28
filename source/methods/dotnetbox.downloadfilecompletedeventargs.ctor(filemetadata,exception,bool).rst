:index:`DownloadFileCompletedEventArgs.DownloadFileCompletedEventArgs Constructor (FileMetadata, Exception, bool)`
==================================================================================================================

Creates a new instance of the DownloadFileCompletedEventArgs class.

Syntax
------

::

	DownloadFileCompletedEventArgs downloadFileCompletedEventArgs = new DownloadFileCompletedEventArgs(FileMetadata response, Exception error, bool cancelled)

Parameters
----------

**response**
	:doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>` Metadata of the downloaded file.

**error**
	*System.Exception* Error, if occured.

**cancelled**
	*System.Boolean* Whether the operation was cancelled or not.

