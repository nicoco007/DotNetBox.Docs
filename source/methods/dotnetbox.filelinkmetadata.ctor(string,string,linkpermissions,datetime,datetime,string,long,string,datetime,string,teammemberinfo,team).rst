:index:`FileLinkMetadata.FileLinkMetadata Constructor (string, string, LinkPermissions, DateTime, DateTime, string, long, string, DateTime?, string, TeamMemberInfo, Team)`
===========================================================================================================================================================================



Syntax
------

::

	FileLinkMetadata fileLinkMetadata = new FileLinkMetadata(string url, string name, LinkPermissions linkPermissions, DateTime clientModified, DateTime serverModified, string rev, long size, string id, DateTime? expires, string path, TeamMemberInfo teamMemberInfo, Team contentOwnerTeamInfo)

Parameters
----------

**url**
	*System.String* URL of the link.

**name**
	*System.String* Name of the file/folder the link resolves to.

**linkPermissions**
	:doc:`DotNetBox.LinkPermissions </classes/dotnetbox.linkpermissions>` The link's permissions.

**clientModified**
	*System.DateTime* Time at which the file was modified on the client's side.

**serverModified**
	*System.DateTime* Time at which the file was modified on the server's side.

**rev**
	*System.String* Revision of the file.

**size**
	*System.Int64* Size of the file.

**id**
	*System.String* The link's unique ID.

**expires**
	*System.DateTime?* The link's expiry time, if present.

**path**
	*System.String* Path of the shared file/folder the link resolves to in the user's Dropbox, if applicable.

**teamMemberInfo**
	:doc:`DotNetBox.TeamMemberInfo </classes/dotnetbox.teammemberinfo>` Team information on the link's owner, if applicable.

**contentOwnerTeamInfo**
	:doc:`DotNetBox.Team </classes/dotnetbox.team>` Team information on the content's owner, if applicable.

