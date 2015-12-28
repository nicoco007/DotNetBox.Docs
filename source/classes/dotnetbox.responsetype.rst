:orphan:

:index:`ResponseType Enumeration`
=================================

Type of response to request when using the :doc:`GetAuthorizeUrl(ResponseType, string, string, AccountRole, bool, bool) </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>`  method.

Values
------

======== =============================================================================================================================================================================================
**Name** **Description**
-------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Token    Use token flow: use redirection to redirect user to another page where the token is further processed to return an access token.
Code     Use code flow: ask user to copy code into your app to authorize it by using the :doc:`AuthorizeCode(string, string) </methods/dotnetbox.dropboxclient.authorizecode(string,string)>`  method.
======== =============================================================================================================================================================================================

