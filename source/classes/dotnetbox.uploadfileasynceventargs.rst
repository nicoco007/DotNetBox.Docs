:index:`UploadFileAsyncEventArgs Class`
=======================================

Arguments to pass when uploading a file.

Constructors
------------

=================================================================================================================================================================== ========================================================
Name                                                                                                                                                                Description                                              
=================================================================================================================================================================== ========================================================
:doc:`UploadFileAsyncEventArgs.UploadFileAsyncEventArgs(Stream, RequestArgs, string) </methods/dotnetbox.uploadfileasynceventargs.ctor(stream,requestargs,string)>` Creates a new instance of the UploadFileEventArgs class. 
=================================================================================================================================================================== ========================================================

Properties
----------

=========== ============================================================= ===============================
Name        Type                                                          Description                     
=========== ============================================================= ===============================
AccessToken System.String                                                 Access token to send to server. 
Args        :doc:`DotNetBox.RequestArgs </classes/dotnetbox.requestargs>` Arguments to send to server.    
Data        System.IO.Stream                                              Stream of data to upload.       
=========== ============================================================= ===============================

