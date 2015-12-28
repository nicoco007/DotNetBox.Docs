:index:`LinkPermissions.LinkPermissions Constructor (bool, ResolvedVisibility?, RequestedVisibility?, SharedLinkAccessFailureReason?)`
======================================================================================================================================

Creates a new instance of the LinkPermissions class.

Syntax
------

::

	LinkPermissions linkPermissions = new LinkPermissions(bool canRevoke, ResolvedVisibility? resolvedVisibility, RequestedVisibility? requestedVisibility, SharedLinkAccessFailureReason? revokeFailureReason)

Parameters
----------

**canRevoke**
	*System.Boolean* Whether the current user can revoke the link or not.

**resolvedVisibility**
	*DotNetBox.ResolvedVisibility?* The shared link's resolved visibility.

**requestedVisibility**
	*DotNetBox.RequestedVisibility?* The shared link's requested visibility.

**revokeFailureReason**
	*DotNetBox.SharedLinkAccessFailureReason?* Why the user cannot revoke the link. Only present if CanRevoke is false.

