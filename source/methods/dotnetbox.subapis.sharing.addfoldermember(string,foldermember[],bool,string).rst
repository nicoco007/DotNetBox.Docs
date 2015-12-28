:orphan:

:index:`Sharing.AddFolderMember Method (string, FolderMember[], bool, string)`
==============================================================================

Allows an owner or editor(if the ACL update policy allows) of a shared folder to add another member. For the new member to get access to all the functionality for this folder, you will need to call mount_folder on their behalf. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.AddFolderMember(string sharedFolderId, FolderMember[] members, bool quiet, string customMessage)

Parameters
----------

**sharedFolderId**
	*System.String* The ID for the shared folder.

**members**
	:doc:`DotNetBox.FolderMember[] </classes/dotnetbox.foldermember>` The intended list of members to add. Added members will receive invites to join the shared folder.

**quiet**
	*System.Boolean* Whether added members should be notified via email and device notifications of their invite. The default for this field is False.

**customMessage**
	*System.String* Optional message to display to added members in their invitation. This field is optional.

