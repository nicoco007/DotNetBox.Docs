:index:`DropboxClient.GetAuthorizeUrl Method (ResponseType, string, string, AccountRole, bool, bool)`
=====================================================================================================

Gets the authorization URL to the authorization page that should be displayed to the user to allow his account to use your app.

Syntax
------

::

	DropboxClient.GetAuthorizeUrl(ResponseType responseType, string redirectUri, string state, AccountRole requireRole, bool forceReapprove, bool disableSignup)

Parameters
----------

**responseType**
	:doc:`DotNetBox.ResponseType </classes/dotnetbox.responsetype>` Response type, either Code or Token. Code presents the user with a code, which he then has to copy into your app and make it go through :doc:`AuthorizeCode(string, string) </methods/dotnetbox.dropboxclient.authorizecode(string,string)>` . Token uses redirectUri to redirect to a page where the token will be further processed.

**redirectUri**
	*System.String* Where to redirect the user after authorization has completed. This must be the exact URI registered in the App Console; even 'localhost' must be listed if it is used for testing. All redirect URIs must be HTTPS except for localhost URIs. A redirect URI is required for the token flow, but optional for the code flow. If the redirect URI is omitted, the code will be presented directly to the user and they will be invited to enter the information in your app.

**state**
	*System.String* Up to 500 bytes of arbitrary data that will be passed back to your redirect URI. This parameter should be used to protect against cross-site request forgery (CSRF).

**requireRole**
	:doc:`DotNetBox.AccountRole </classes/dotnetbox.accountrole>` If this parameter is specified, the user will be asked to authorize with a particular type of Dropbox account, either work for a team account or personal for a personal account. Your app should still verify the type of Dropbox account after authorization since the user could modify or remove the requireRole parameter.

**forceReapprove**
	*System.Boolean* Whether or not to force the user to approve the app again if they've already done so. If false (default), a user who has already approved the application may be automatically redirected to the URI specified by redirect_uri. If true, the user will not be automatically redirected and will have to approve the app again.

**disableSignup**
	*System.Boolean* When true (default is false) users will not be able to sign up for a Dropbox account via the authorization page. Instead, the authorization page will show a link to the Dropbox iOS app in the App Store. This is only intended for use when necessary for compliance with App Store policies.

Returns
-------

*System.String* URL to which the user should be redirected.
