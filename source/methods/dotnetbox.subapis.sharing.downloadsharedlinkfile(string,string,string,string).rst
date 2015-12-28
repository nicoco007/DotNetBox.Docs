:orphan:

:index:`Sharing.DownloadSharedLinkFile Method (string, string, string, string)`
===============================================================================

Download the shared link's file from a user's Dropbox.

Syntax
------

::

	Sharing.DownloadSharedLinkFile(string savePath, string url, string path, string linkPassword)

Parameters
----------

**savePath**
	*System.String* Path to which the file will be saved.

**url**
	*System.String* URL of the shared link.

**path**
	*System.String* If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used. This field is optional.

**linkPassword**
	*System.String* If the shared link has a password, this parameter can be used. This field is optional.

Returns
-------

:doc:`DotNetBox.LinkMetadata </classes/dotnetbox.linkmetadata>`  Metadata of the shared link used to download the file.
