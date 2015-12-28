:orphan:

:index:`MediaInfo Class`
========================

Information regarding an image or video.

Constructors
------------

============================================================================================= ==================================
Name                                                                                          Description                        
============================================================================================= ==================================
:doc:`MediaInfo(bool, MediaMetadata) </methods/dotnetbox.mediainfo.ctor(bool,mediametadata)>` Initializes a new MediaInfo class. 
============================================================================================= ==================================

Properties
----------

======== ================================================================= ==========================================================
Name     Type                                                              Description                                                
======== ================================================================= ==========================================================
Metadata :doc:`DotNetBox.MediaMetadata </classes/dotnetbox.mediametadata>` Metadata of the media (dimensions, duration, etc.)         
Pending  System.Boolean                                                    Whether Dropbox is still getting media information or not. 
======== ================================================================= ==========================================================

Methods
-------

=================================================================================== ==================================================================
Name                                                                                Description                                                        
=================================================================================== ==================================================================
:doc:`MediaInfo.FromJson(JObject) </methods/dotnetbox.mediainfo.fromjson(jobject)>` Creates a new instance of the MediaInfo class using a JSON object. 
:doc:`MediaInfo.ToString() </methods/dotnetbox.mediainfo.tostring()>`               Returns a string containing all of the class' properties.          
=================================================================================== ==================================================================

