:orphan:

:index:`Files.ListFolderLongpoll Method (string, int)`
======================================================

A longpoll endpoint to wait for changes on an account. In conjunction with list_folder, this call gives you a low-latency way to monitor an account for file changes. The connection will block until there are changes available or a timeout occurs.

Syntax
------

::

	Files.ListFolderLongpoll(string cursor, int timeout)

Parameters
----------

**cursor**
	*System.String* A cursor as returned by ListFolder or ListFolderContinue

**timeout**
	*System.Int32* A timeout in seconds. The request will block for at most this length of time, plus up to 90 seconds of random jitter added to avoid the thundering herd problem. Care should be taken when using this parameter, as some network infrastructure does not support long timeouts. The default for this field is 30.

Returns
-------

:doc:`DotNetBox.ListFolderLongpollResult </classes/dotnetbox.listfolderlongpollresult>`  Whether files have been changed or not.
