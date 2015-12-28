:orphan:

:index:`Files.GetPreview Method (string, string)`
=================================================

Get a preview for a file in PDF format. Currently previews are only generated for the files with the following extensions: .doc, .docx, .docm, .ppt, .pps, .ppsx, .ppsm, .pptx, .pptm, .xls, .xlsx, .xlsm, .rtf

Syntax
------

::

	Files.GetPreview(string path, string savePath)

Parameters
----------

**path**
	*System.String* The path of the file to preview.

**savePath**
	*System.String* Path at which to save the preview file.

Returns
-------

:doc:`DotNetBox.FileMetadata </classes/dotnetbox.filemetadata>`  Metadata of the file of which a preview was made.
