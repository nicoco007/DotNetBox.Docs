:index:`FileMetadata.FileMetadata Constructor (string, string, string, DateTime, DateTime, string, long, string, MediaInfo, FileSharingInfo)`
=============================================================================================================================================

Initializes a new instance of the FileMetadata class.

Syntax
------

::

	FileMetadata fileMetadata = new FileMetadata(string name, string path, string parentSharedFolderId, DateTime clientModified, DateTime serverModified, string rev, long size, string id, MediaInfo mediaInfo, FileSharingInfo sharingInfo)

Parameters
----------

**name**
	*System.String* Name of the entry.

**path**
	*System.String* Path of the entry.

**parentSharedFolderId**
	*System.String* ID of the parent shared folder, if applicable.

**clientModified**
	*System.DateTime* Time at which the file was modified on the client's side.

**serverModified**
	*System.DateTime* Time at which the file was modified on the server's side.

**rev**
	*System.String* Revision of the file.

**size**
	*System.Int64* Size of the file.

**id**
	*System.String* Unique ID of the file.

**mediaInfo**
	:doc:`DotNetBox.MediaInfo </classes/dotnetbox.mediainfo>` Media information regarding the file.

**sharingInfo**
	:doc:`DotNetBox.FileSharingInfo </classes/dotnetbox.filesharinginfo>` Information about the file's sharing status.

