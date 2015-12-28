:index:`Sharing.GetSharedLinkMetadata Method (string, string, string)`
======================================================================

Get the shared link's metadata.

Syntax
------

::

	Sharing.GetSharedLinkMetadata(string url, string path, string password)

Parameters
----------

**url**
	*System.String* URL of the shared link.

**path**
	*System.String* If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used. This field is optional.

**password**
	*System.String* If the shared link has a password, this parameter can be used. This field is optional.

Returns
-------

:doc:`DotNetBox.LinkMetadata </classes/dotnetbox.linkmetadata>`  Metadata of the shared link.
