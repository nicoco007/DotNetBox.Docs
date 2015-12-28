:orphan:

:index:`ShareFolderJobStatus Constructor (AsyncJobStatus, SharedFolderMetadata, string)`
========================================================================================

Creates a new instance of the ShareFolderJobStatus class.

Syntax
------

::

	ShareFolderJobStatus shareFolderJobStatus = new ShareFolderJobStatus(AsyncJobStatus jobStatus, SharedFolderMetadata folderMetadata, string error)

Parameters
----------

**jobStatus**
	:doc:`DotNetBox.AsyncJobStatus </classes/dotnetbox.asyncjobstatus>` Job status.

**folderMetadata**
	:doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>` Shared folder's metadata, if applicable.

**error**
	*System.String* Error, if applicable.

