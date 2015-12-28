:index:`Sharing.ListSharedFolders Method`
=========================================

Return the list of all shared folders the current user has access to. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.ListSharedFolders()

Returns
-------

:doc:`DotNetBox.ListSharedFoldersResult </classes/dotnetbox.listsharedfoldersresult>`  List of user's shared folders and cursor if there are more folders. Pass cursor to :doc:`Sharing.ListSharedFoldersContinue(string) </methods/dotnetbox.subapis.sharing.listsharedfolderscontinue(string)>`  to get additional folders.
