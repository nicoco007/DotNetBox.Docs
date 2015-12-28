:orphan:

:index:`Sharing.CheckShareJobStatus Method (string)`
====================================================

Returns the status of an asynchronous job for sharing a folder. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.CheckShareJobStatus(string asyncJobId)

Parameters
----------

**asyncJobId**
	*System.String* Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

Returns
-------

:doc:`DotNetBox.ShareFolderJobStatus </classes/dotnetbox.sharefolderjobstatus>`  Current status of the share job (in progress, completed, or failed). If completed, returns :doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>`  under :doc:`DotNetBox.ShareFolderJobStatus.FolderMetadata </classes/dotnetbox.sharefolderjobstatus>` .
