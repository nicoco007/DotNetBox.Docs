:orphan:

:index:`Sharing.CheckJobStatus Method (string)`
===============================================

Returns the status of an asynchronous job. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.CheckJobStatus(string asyncJobId)

Parameters
----------

**asyncJobId**
	*System.String* Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

Returns
-------

:doc:`DotNetBox.JobStatus </classes/dotnetbox.jobstatus>`  Current status of the share job (in progress, completed, or failed).
