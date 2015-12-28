:index:`Sharing.ShareFolder Method (string, bool, AclUpdatePolicy, SharedLinkPolicy, MemberPolicy)`
===================================================================================================

Share a folder with collaborators. Most sharing will be completed synchronously.Large folders will be completed asynchronously. To make testing the async case repeatable, set forceAsync. If a AsyncJobId is returned, you'll need to call CheckShareJobStatus until the action completes to get the metadata for the folder. Apps must have full Dropbox access to use this endpoint. Warning: This endpoint is in beta and is subject to minor but possibly backwards-incompatible changes.

Syntax
------

::

	Sharing.ShareFolder(string path, bool forceAsync, AclUpdatePolicy aclUpdatePolicy, SharedLinkPolicy sharedLinkPolicy, MemberPolicy memberPolicy)

Parameters
----------

**path**
	*System.String* The path to the folder to share. If it does not exist, then a new one is created.

**forceAsync**
	*System.Boolean* Whether to force the share to happen asynchronously. The default for this field is False.

**aclUpdatePolicy**
	:doc:`DotNetBox.AclUpdatePolicy </classes/dotnetbox.aclupdatepolicy>` Who can add and remove members of this shared folder.

**sharedLinkPolicy**
	:doc:`DotNetBox.SharedLinkPolicy </classes/dotnetbox.sharedlinkpolicy>` The policy to apply to shared links created for content inside this shared folder.

**memberPolicy**
	:doc:`DotNetBox.MemberPolicy </classes/dotnetbox.memberpolicy>` Who can be a member of this shared folder.

Returns
-------

:doc:`DotNetBox.ShareFolderLaunch </classes/dotnetbox.sharefolderlaunch>`  If asynchronous, returns async job ID under :doc:`DotNetBox.ShareFolderLaunch.AsyncJobId </classes/dotnetbox.sharefolderlaunch>` . If not, returns :doc:`DotNetBox.SharedFolderMetadata </classes/dotnetbox.sharedfoldermetadata>`  under :doc:`DotNetBox.ShareFolderLaunch.FolderMetadata </classes/dotnetbox.sharefolderlaunch>` .
