:index:`Sharing.UnshareFolder Method (string, bool)`
====================================================

Allows a shared folder owner to unshare the folder. You'll need to call :doc:`CheckJobStatus(string) </methods/dotnetbox.subapis.sharing.checkjobstatus(string)>`  to determine if the action has completed successfully. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.UnshareFolder(string sharedFolderId, bool leaveCopy)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

**leaveCopy**
	*System.Boolean* If true, members of this shared folder will get a copy of this folder after it's unshared. Otherwise, it will be removed from their Dropbox. The current user, who is an owner, will always retain their copy. Default value is False.

Returns
-------

:doc:`DotNetBox.LaunchEmptyResult </classes/dotnetbox.launchemptyresult>`  Returns a job ID to be used with :doc:`Sharing.CheckJobStatus(string) </methods/dotnetbox.subapis.sharing.checkjobstatus(string)>`  if in progress. If not, just returns :doc:`DotNetBox.AsyncJobStatus.Completed </classes/dotnetbox.asyncjobstatus>` .
