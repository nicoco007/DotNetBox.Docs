:orphan:

:index:`Dropbox.SendUploadRequestAsync Method (Stream, RequestArgs, UploadFileProgressChangedEventHandler, UploadFileCompletedEventHandler)`
============================================================================================================================================

Send an upload request to Dropbox's API.

Syntax
------

::

	Dropbox.SendUploadRequestAsync(Stream data, RequestArgs args, UploadFileProgressChangedEventHandler progressChanged, UploadFileCompletedEventHandler completed)

Parameters
----------

**data**
	*System.IO.Stream* Stream of data to upload.

**args**
	:doc:`DotNetBox.RequestArgs </classes/dotnetbox.requestargs>` Request arguments.

**progressChanged**
	:doc:`DotNetBox.UploadFileProgressChangedEventHandler </classes/dotnetbox.uploadfileprogresschangedeventhandler>` Progress changed callback.

**completed**
	:doc:`DotNetBox.UploadFileCompletedEventHandler </classes/dotnetbox.uploadfilecompletedeventhandler>` Completed callback.

