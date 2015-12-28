:orphan:

:index:`MediaMetadata Constructor (Dimensions, GpsCoordinates, DateTime?)`
==========================================================================

Initializes a new MediaMetadata class.

Syntax
------

::

	MediaMetadata mediaMetadata = new MediaMetadata(Dimensions dimensions, GpsCoordinates location, DateTime? timeTaken)

Parameters
----------

**dimensions**
	:doc:`DotNetBox.Dimensions </classes/dotnetbox.dimensions>` Dimensions of the media, if present.

**location**
	:doc:`DotNetBox.GpsCoordinates </classes/dotnetbox.gpscoordinates>` Location at which the media was created, if present.

**timeTaken**
	*System.DateTime?* Time at which the media was created, if present.

