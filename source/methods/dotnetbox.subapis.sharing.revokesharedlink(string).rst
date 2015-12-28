:orphan:

:index:`Sharing.RevokeSharedLink Method (string)`
=================================================

Revoke a shared link. Note that even after revoking a shared link to a file, the file may be accessible if there are shared links leading to any of the file parent folders. To list all shared links that enable access to a specific file, you can use the ListSharedLinks with the file as the ListSharedLinksArg.Path argument.

Syntax
------

::

	Sharing.RevokeSharedLink(string url)

Parameters
----------

**url**
	*System.String* URL of the shared link.

