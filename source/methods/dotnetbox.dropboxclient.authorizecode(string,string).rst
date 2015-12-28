:orphan:

:index:`DropboxClient.AuthorizeCode Method (string, string)`
============================================================

Get an access token from the code returned by :doc:`GetAuthorizeUrl(ResponseType, string, string, AccountRole, bool, bool) </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>` .

Syntax
------

::

	DropboxClient.AuthorizeCode(string code, string redirectUri)

Parameters
----------

**code**
	*System.String* Code retrieved from :doc:`GetAuthorizeUrl(ResponseType, string, string, AccountRole, bool, bool) </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>` .

**redirectUri**
	*System.String* If a redirect URL was specified when using :doc:`GetAuthorizeUrl(ResponseType, string, string, AccountRole, bool, bool) </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>` , the same URL.

Returns
-------

:doc:`DotNetBox.AuthorizeResponse </classes/dotnetbox.authorizeresponse>`  Response including generated access token, token type (always 'bearer') and client ID.
