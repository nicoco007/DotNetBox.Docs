:index:`Sharing.ListSharedFolderMembersContinue Method (string)`
================================================================

Once a cursor has been retrieved from ListSharedFolderMembers, use this to paginate through all shared folder members. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.ListSharedFolderMembersContinue(string cursor)

Parameters
----------

**cursor**
	*System.String* The cursor returned by your last call to :doc:`ListSharedFolderMembers(string) </methods/dotnetbox.subapis.sharing.listsharedfoldermembers(string)>`  or :doc:`ListSharedFolderMembersContinue(string) </methods/dotnetbox.subapis.sharing.listsharedfoldermemberscontinue(string)>` .

Returns
-------

:doc:`DotNetBox.SharedFolderMembers </classes/dotnetbox.sharedfoldermembers>`  Continued list of specified shared folder's members. 
