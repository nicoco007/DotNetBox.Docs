:index:`UploadFileCompletedEventArgs Class`
===========================================

Arguments for the :doc:`UploadFileCompleted </events/dotnetbox.subapis.files.uploadfilecompleted>`  event.

Constructors
------------

=================================================================================================================================================================================== =================================================================
Name                                                                                                                                                                                Description                                                       
=================================================================================================================================================================================== =================================================================
:doc:`UploadFileCompletedEventArgs.UploadFileCompletedEventArgs(FileMetadata, Exception, bool) </methods/dotnetbox.uploadfilecompletedeventargs.ctor(filemetadata,exception,bool)>` Creates a new instance of the UploadFileCompletedEventArgs class. 
=================================================================================================================================================================================== =================================================================

Properties
----------

========= =============================================================== ===========================================================
Name      Type                                                            Description                                                 
========= =============================================================== ===========================================================
Cancelled System.Boolean                                                  Whether the operation was cancelled or not.                 
Error     System.Exception                                                Error that occured during the upload processed, if occured. 
Response  :doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>` Metadata of the uploaded file.                              
========= =============================================================== ===========================================================

