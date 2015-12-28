:orphan:

:index:`Files.Upload Method (string, string, WriteMode, bool, bool, string)`
============================================================================

Create a new file with the contents provided in the request.

Syntax
------

::

	Files.Upload(string filePath, string path, WriteMode mode, bool autorename, bool mute, string rev)

Parameters
----------

**filePath**
	*System.String* Path to the file to upload.

**path**
	*System.String* Path in the user's Dropbox to save the file.

**mode**
	:doc:`DotNetBox.WriteMode </classes/dotnetbox.writemode>` Selects what to do if the file already exists.

**autorename**
	*System.Boolean* If there's a conflict, as determined by mode, have the Dropbox server try to autorename the file to avoid conflict. The default for this field is False.

**mute**
	*System.Boolean* Normally, users are made aware of any file modifications in their Dropbox account via notifications in the client software. If True, this tells the clients that this modification shouldn't result in a user notification. The default for this field is False.

**rev**
	*System.String* Overwrite if the given "rev" matches the existing file's "rev". The autorename strategy is to append the string "conflicted copy" to the file name. Only applies if WriteMode is Update.

Returns
-------

:doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>`  Metadata of the newly uploaded file.
