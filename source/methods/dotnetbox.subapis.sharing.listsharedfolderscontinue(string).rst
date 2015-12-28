:index:`Sharing.ListSharedFoldersContinue Method (string)`
==========================================================

Once a cursor has been retrieved from :doc:`ListSharedFolders() </methods/dotnetbox.subapis.sharing.listsharedfolders()>` , use this to paginate through all shared folders. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.ListSharedFoldersContinue(string cursor)

Parameters
----------

**cursor**
	*System.String* 

Returns
-------

:doc:`DotNetBox.ListSharedFoldersResult </classes/dotnetbox.listsharedfoldersresult>`  Continued list of user's shared folders.
