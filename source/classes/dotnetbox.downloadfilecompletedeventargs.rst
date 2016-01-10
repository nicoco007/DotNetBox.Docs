:orphan:

:index:`DownloadFileCompletedEventArgs Class`
=============================================

Arguments for the :doc:`DownloadFileCompleted </events/dotnetbox.subapis.files.downloadfilecompleted>`  event.

Constructors
------------

========================================================================================================================================================== ===================================================================
Name                                                                                                                                                       Description                                                         
========================================================================================================================================================== ===================================================================
:doc:`DownloadFileCompletedEventArgs(FileMetadata, Exception, bool) </methods/dotnetbox.downloadfilecompletedeventargs.ctor(filemetadata,exception,bool)>` Creates a new instance of the DownloadFileCompletedEventArgs class. 
========================================================================================================================================================== ===================================================================

Properties
----------

========= =============================================================== =============================================================
Name      Type                                                            Description                                                   
========= =============================================================== =============================================================
Cancelled System.Boolean                                                  Whether the operation was cancelled or not.                   
Error     System.Exception                                                Error that occured during the download processed, if occured. 
Response  :doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>` Metadata of the Downloaded file.                              
========= =============================================================== =============================================================

