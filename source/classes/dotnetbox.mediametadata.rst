:orphan:

:index:`MediaMetadata Class`
============================

Metadata concerning media files (images and videos)

Constructors
------------

======================================================================================================================================= ======================================
Name                                                                                                                                    Description                            
======================================================================================================================================= ======================================
:doc:`MediaMetadata(Dimensions, GpsCoordinates, DateTime?) </methods/dotnetbox.mediametadata.ctor(dimensions,gpscoordinates,datetime)>` Initializes a new MediaMetadata class. 
======================================================================================================================================= ======================================

Properties
----------

========== =================================================================== ==========================================================
Name       Type                                                                Description                                                
========== =================================================================== ==========================================================
Dimensions :doc:`DotNetBox.Dimensions </classes/dotnetbox.dimensions>`         Width and height of the image/video.                       
Location   :doc:`DotNetBox.GpsCoordinates </classes/dotnetbox.gpscoordinates>` Location (if any) where the picture/video was taken.       
TimeTaken  System.DateTime                                                     The time at which the picture/video was taken, if present. 
========== =================================================================== ==========================================================

Methods
-------

=========================================================================================== ======================================================================
Name                                                                                        Description                                                            
=========================================================================================== ======================================================================
:doc:`MediaMetadata.FromJson(JObject) </methods/dotnetbox.mediametadata.fromjson(jobject)>` Creates a new instance of the MediaMetadata class using a JSON object. 
:doc:`MediaMetadata.ToString() </methods/dotnetbox.mediametadata.tostring()>`               Returns a string containing all of the class' properties.              
=========================================================================================== ======================================================================

