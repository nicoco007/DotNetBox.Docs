:orphan:

:index:`LinkMetadata Constructor (string, string, LinkPermissions, string, DateTime?, string, TeamMemberInfo, Team)`
====================================================================================================================

Creates a new instance of the LinkMetadata class.

Syntax
------

::

	LinkMetadata linkMetadata = new LinkMetadata(string url, string name, LinkPermissions linkPermissions, string id, DateTime? expires, string path, TeamMemberInfo teamMemberInfo, Team contentOwnerTeamInfo)

Parameters
----------

**url**
	*System.String* URL of the link.

**name**
	*System.String* Name of the file/folder the link resolves to.

**linkPermissions**
	:doc:`DotNetBox.LinkPermissions </classes/dotnetbox.linkpermissions>` The link's permissions.

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

