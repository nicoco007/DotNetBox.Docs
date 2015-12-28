:orphan:

:index:`FileMetadata Class`
===========================

A class containing specific information regarding file entries.

Constructors
------------

============================================================================================================================================================================================================================================= =====================================================
Name                                                                                                                                                                                                                                          Description                                           
============================================================================================================================================================================================================================================= =====================================================
:doc:`FileMetadata(string, string, string, DateTime, DateTime, string, long, string, MediaInfo, FileSharingInfo) </methods/dotnetbox.filemetadata.ctor(string,string,string,datetime,datetime,string,long,string,mediainfo,filesharinginfo)>` Initializes a new instance of the FileMetadata class. 
============================================================================================================================================================================================================================================= =====================================================

Properties
----------

==================== ===================================================================== ==============================================================================================
Name                 Type                                                                  Description                                                                                    
==================== ===================================================================== ==============================================================================================
ClientModified       System.DateTime                                                       Time at which the file was modified on the client's side.                                      
Id                   System.String                                                         Unique ID of the file.                                                                         
MediaInfo            :doc:`DotNetBox.MediaInfo </classes/dotnetbox.mediainfo>`             Media information. Only applies to videos and images/pictures.                                 
Name                 System.String                                                         Name of the entry.                                                                             
ParentSharedFolderId System.String                                                         If in a shared folder, shared ID of that folder.                                               
Path                 System.String                                                         Path of the entry.                                                                             
Rev                  System.String                                                         Revision of the file.                                                                          
ServerModified       System.DateTime                                                       Time at which the file was modified on the server.                                             
SharingInfo          :doc:`DotNetBox.FileSharingInfo </classes/dotnetbox.filesharinginfo>` Information about the file's sharing status. Set if this file is contained in a shared folder. 
Size                 System.String                                                         Size of the file, in bytes.                                                                    
==================== ===================================================================== ==============================================================================================

Methods
-------

========================================================================================= ====================================================================
Name                                                                                      Description                                                          
========================================================================================= ====================================================================
:doc:`FileMetadata.FromJson(JObject) </methods/dotnetbox.filemetadata.fromjson(jobject)>` Create a new instance of the FileMetadata class using a JSON object. 
:doc:`FileMetadata.ToString() </methods/dotnetbox.filemetadata.tostring()>`               Returns a string containing all of the class' properties.            
========================================================================================= ====================================================================

