:orphan:

:index:`PhotoMetadata Constructor (Dimensions, GpsCoordinates, DateTime?)`
==========================================================================

Initializes a new PhotoMetadata class.

Syntax
------

::

	PhotoMetadata photoMetadata = new PhotoMetadata(Dimensions dimensions, GpsCoordinates location, DateTime? timeTaken)

Parameters
----------

**dimensions**
	:doc:`DotNetBox.Dimensions </classes/dotnetbox.dimensions>` Dimensions of the media, if present.

**location**
	:doc:`DotNetBox.GpsCoordinates </classes/dotnetbox.gpscoordinates>` Location at which the media was created, if present.

**timeTaken**
	*System.DateTime?* Time at which the media was created, if present.

