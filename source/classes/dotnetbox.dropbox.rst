:orphan:

:index:`Dropbox Class`
======================

Main communication class between this library and Dropbox's API.

Constructors
------------

================================================================ ============================================
Name                                                             Description                                  
================================================================ ============================================
:doc:`Dropbox(string) </methods/dotnetbox.dropbox.ctor(string)>` Creates a new instance of the Dropbox class. 
================================================================ ============================================

Properties
----------

=================== ============== =============================================================================================================
Name                Type           Description                                                                                                   
=================== ============== =============================================================================================================
AccessToken         System.String  OAuth 2 access token to be used with Dropbox's API.                                                           
CancellationPending System.Boolean Whether a cancellation has been called and the current asynchronous operation is pending cancellation or not. 
IsBusy              System.Boolean Whether an asynchronous operation is in progress or not.                                                      
=================== ============== =============================================================================================================

Methods
-------

================================================================================================================================== ======================================================================================================
Name                                                                                                                               Description                                                                                            
================================================================================================================================== ======================================================================================================
:doc:`Dropbox.Cancel() </methods/dotnetbox.dropbox.cancel()>`                                                                      Cancel the current cancellable asynchronous operation.                                                 
:doc:`Dropbox.SendBasicRequest(string, byte[]) </methods/dotnetbox.dropbox.sendbasicrequest(string,byte[])>`                       Send a basic request to Dropbox's API, with no authentication. Used mostly for getting an OAuth token. 
:doc:`Dropbox.SendRequest(string) </methods/dotnetbox.dropbox.sendrequest(string)>`                                                Send an API request to Dropbox.                                                                        
:doc:`Dropbox.SendRequest(string, int) </methods/dotnetbox.dropbox.sendrequest(string,int)>`                                       Send an API request to Dropbox.                                                                        
:doc:`Dropbox.SendRequest(string, byte[]) </methods/dotnetbox.dropbox.sendrequest(string,byte[])>`                                 Send an API request to Dropbox.                                                                        
:doc:`Dropbox.SendRequest(string, byte[], int) </methods/dotnetbox.dropbox.sendrequest(string,byte[],int)>`                        Send an API request to Dropbox.                                                                        
:doc:`Dropbox.SendRequest(string, byte[], int, bool) </methods/dotnetbox.dropbox.sendrequest(string,byte[],int,bool)>`             Send an API request to Dropbox.                                                                        
:doc:`Dropbox.SendDownloadRequest(string, string, string) </methods/dotnetbox.dropbox.senddownloadrequest(string,string,string)>`  Send a download request to Dropbox's API.                                                              
:doc:`Dropbox.SendChunkUploadRequest(Stream, RequestArgs) </methods/dotnetbox.dropbox.sendchunkuploadrequest(stream,requestargs)>` Send an upload request to Dropbox's API.                                                               
:doc:`Dropbox.GetResponse(string) </methods/dotnetbox.dropbox.getresponse(string)>`                                                Convert Dropbox's JSON response to an object.                                                          
:doc:`Dropbox.FilterDropboxError(WebException) </methods/dotnetbox.dropbox.filterdropboxerror(webexception)>`                      If the server responds, throw an error with the server's error message. If not, throw the exception.   
================================================================================================================================== ======================================================================================================

