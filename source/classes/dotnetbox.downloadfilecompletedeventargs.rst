:index:`DownloadFileCompletedEventArgs Class`
=============================================

Arguments related to the :doc:`DownloadFileCompleted </events/dotnetbox.subapis.files.downloadfilecompleted>`  event.

Constructors
------------

========================================================================================================================================================================================= ===================================================================
Name                                                                                                                                                                                      Description                                                         
========================================================================================================================================================================================= ===================================================================
:doc:`DownloadFileCompletedEventArgs.DownloadFileCompletedEventArgs(FileMetadata, Exception, bool) </methods/dotnetbox.downloadfilecompletedeventargs.ctor(filemetadata,exception,bool)>` Creates a new instance of the DownloadFileCompletedEventArgs class. 
========================================================================================================================================================================================= ===================================================================

Properties
----------

========= =============================================================== =============================================================
Name      Type                                                            Description                                                   
========= =============================================================== =============================================================
Cancelled System.Boolean                                                  Whether the operation has been cancelled or not.              
Error     System.Exception                                                Error that occured while downloading the file, if applicable. 
Response  :doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>` Metadata of the downloaded file.                              
========= =============================================================== =============================================================

