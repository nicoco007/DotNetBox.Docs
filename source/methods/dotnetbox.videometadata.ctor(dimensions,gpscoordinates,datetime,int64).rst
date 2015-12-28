:index:`VideoMetadata.VideoMetadata Constructor (Dimensions, GpsCoordinates, DateTime?, Int64?)`
================================================================================================

Initializes a new PhotoMetadata class.

Syntax
------

::

	VideoMetadata videoMetadata = new VideoMetadata(Dimensions dimensions, GpsCoordinates location, DateTime? timeTaken, Int64? duration)

Parameters
----------

**dimensions**
	:doc:`DotNetBox.Dimensions </classes/dotnetbox.dimensions>` Dimensions of the media, if present.

**location**
	:doc:`DotNetBox.GpsCoordinates </classes/dotnetbox.gpscoordinates>` Location at which the media was created, if present.

**timeTaken**
	*System.DateTime?* Time at which the media was created, if present.

**duration**
	*System.Int64?* Duration of the video, in milliseconds.

