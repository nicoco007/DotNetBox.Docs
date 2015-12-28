:orphan:

:index:`DropboxClient Class`
============================

Main DotNetBox class. The DropboxClient class has wrapper functions and all calls to Dropbox's API.

Constructors
------------

=========================================================================================== ==================================================
Name                                                                                        Description                                        
=========================================================================================== ==================================================
:doc:`DropboxClient(string) </methods/dotnetbox.dropboxclient.ctor(string)>`                Creates a new instance of the DropboxClient class. 
:doc:`DropboxClient(string, string) </methods/dotnetbox.dropboxclient.ctor(string,string)>` Creates a new instance of the DropboxClient class. 
=========================================================================================== ==================================================

Properties
----------

=========== ===================================================================== ==================================================================================
Name        Type                                                                  Description                                                                        
=========== ===================================================================== ==================================================================================
AccessToken System.String                                                         OAuth 2 access token to be used with Dropbox's API.                                
AppKey      System.String                                                         Dropbox app key. Used to retrieve an access token for the user.                    
AppSecret   System.String                                                         Dropbox app secret. Used to retrieve an access token for the user.                 
Files       :doc:`DotNetBox.SubApis.Files </classes/dotnetbox.subapis.files>`     Files sub-API instance. Contains all calls related to files and file management.   
Sharing     :doc:`DotNetBox.SubApis.Sharing </classes/dotnetbox.subapis.sharing>` Sharing sub-API instance. Contains all calls related to sharing folders and links. 
Users       :doc:`DotNetBox.SubApis.Users </classes/dotnetbox.subapis.users>`     Users sub-API instance. Contains all calls related to user accounts.               
=========== ===================================================================== ==================================================================================

Methods
-------

================================================================================================================================================================================================ ==================================================================================================================================================================================================================================
Name                                                                                                                                                                                             Description                                                                                                                                                                                                                        
================================================================================================================================================================================================ ==================================================================================================================================================================================================================================
:doc:`DropboxClient.GetAuthorizeUrl(ResponseType, string, string, AccountRole, bool, bool) </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>` Gets the authorization URL to the authorization page that should be displayed to the user to allow his account to use your app.                                                                                                    
:doc:`DropboxClient.AuthorizeCode(string, string) </methods/dotnetbox.dropboxclient.authorizecode(string,string)>`                                                                               Get an access token from the code returned by :doc:`GetAuthorizeUrl(ResponseType, string, string, AccountRole, bool, bool) </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>` . 
================================================================================================================================================================================================ ==================================================================================================================================================================================================================================

