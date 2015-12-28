:index:`Dropbox.SendDownloadRequestAsync Method (string, string, string, DownloadFileProgressChangedEventHandler, DownloadFileCompletedEventHandler)`
=====================================================================================================================================================

Send a download request to Dropbox's API asynchronously.

Syntax
------

::

	Dropbox.SendDownloadRequestAsync(string url, string args, string saveFilePath, DownloadFileProgressChangedEventHandler progressChanged, DownloadFileCompletedEventHandler completed)

Parameters
----------

**url**
	*System.String* API endpoint URL.

**args**
	*System.String* Request arguments.

**saveFilePath**
	*System.String* Path at which the file should be saved.

**progressChanged**
	:doc:`DotNetBox.DownloadFileProgressChangedEventHandler </classes/dotnetbox.downloadfileprogresschangedeventhandler>` Progress changed callback.

**completed**
	:doc:`DotNetBox.DownloadFileCompletedEventHandler </classes/dotnetbox.downloadfilecompletedeventhandler>` Completed callback.

