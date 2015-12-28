:index:`Files.GetThumbnail Method (string, string, ThumbnailFormat, ThumbnailSize)`
===================================================================================

Get a thumbnail for an image. This method currently supports files with the following file extensions: jpg, jpeg, png, tiff, tif, gif and bmp. Photos that are larger than 20MB in size won't be converted to a thumbnail.

Syntax
------

::

	Files.GetThumbnail(string path, string savePath, ThumbnailFormat format, ThumbnailSize size)

Parameters
----------

**path**
	*System.String* The path to the image file you want to thumbnail.

**savePath**
	*System.String* The path at which to save the thumbnail image.

**format**
	:doc:`DotNetBox.ThumbnailFormat </classes/dotnetbox.thumbnailformat>` The format for the thumbnail image, jpeg (default) or png. For images that are photos, jpeg should be preferred, while png is better for screenshots and digital arts.

**size**
	:doc:`DotNetBox.ThumbnailSize </classes/dotnetbox.thumbnailsize>` The size for the thumbnail image.

Returns
-------

:doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>`  Metadata of the file of which a thumbnail was made.
