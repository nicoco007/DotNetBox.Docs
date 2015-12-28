:orphan:

:index:`Sharing.ListSharedLinks Method (string, string)`
========================================================

List shared links of this user. If no path is given or the path is empty, returns a list of all shared links for the current user. If a non-empty path is given, returns a list of all shared links that allow access to the given path - direct links to the given path and links to parent folders of the given path.

Syntax
------

::

	Sharing.ListSharedLinks(string path, string cursor)

Parameters
----------

**path**
	*System.String* See summary.

**cursor**
	*System.String* The cursor returned by your last call to ListSharedLinks. This field is optional.

Returns
-------

:doc:`DotNetBox.ListSharedLinksResult </classes/dotnetbox.listsharedlinksresult>`  List of the user's shared links.
