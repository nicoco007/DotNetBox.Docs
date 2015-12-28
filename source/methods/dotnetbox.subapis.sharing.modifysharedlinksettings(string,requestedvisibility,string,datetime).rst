:orphan:

:index:`Sharing.ModifySharedLinkSettings Method (string, RequestedVisibility?, string, DateTime?)`
==================================================================================================

Modify the shared link's settings. If the requested visibility conflict with the shared links policy of the team or the shared folder(in case the linked file is part of a shared folder) then the LinkPermissions.resolved_visibility of the returned SharedLinkMetadata will reflect the actual visibility of the shared link and the LinkPermissions.requested_visibility will reflect the requested visibility.

Syntax
------

::

	Sharing.ModifySharedLinkSettings(string url, RequestedVisibility? requestedVisibility, string linkPassword, DateTime? expires)

Parameters
----------

**url**
	*System.String* URL of the shared link to change its settings.

**requestedVisibility**
	*DotNetBox.RequestedVisibility?* The requested access for this shared link. This field is optional.

**linkPassword**
	*System.String* If RequestedVisibility is RequestedVisibility.Password this is needed to specify the password to access the link. This field is optional.

**expires**
	*System.DateTime?* Expiration time of the shared link. By default the link won't expire. This field is optional.

Returns
-------

:doc:`DotNetBox.LinkMetadata </classes/dotnetbox.linkmetadata>`  Metadata of the modified shared link.
