:orphan:

:index:`Sharing.CreateSharedLink Method (string, RequestedVisibility?, string, DateTime?)`
==========================================================================================

Create a shared link with custom settings. If no settings are given then the default visibility is RequestedVisibility.Public (The resolved visibility, though, may depend on other aspects such as team and shared folder settings).

Syntax
------

::

	Sharing.CreateSharedLink(string path, RequestedVisibility? requestedVisibility, string linkPassword, DateTime? expires)

Parameters
----------

**path**
	*System.String* The path to be shared by the shared link.

**requestedVisibility**
	*DotNetBox.RequestedVisibility?* The requested access for this shared link. This field is optional.

**linkPassword**
	*System.String* If RequestedVisibility is RequestedVisibility.Password this is needed to specify the password to access the link. This field is optional.

**expires**
	*System.DateTime?* Expiration time of the shared link. By default the link won't expire. This field is optional.

Returns
-------

:doc:`DotNetBox.LinkMetadata </classes/dotnetbox.linkmetadata>`  Metadata of the newly created link.
