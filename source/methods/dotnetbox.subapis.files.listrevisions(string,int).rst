:orphan:

:index:`Files.ListRevisions Method (string, int)`
=================================================

Returns revisions of a file.

Syntax
------

::

	Files.ListRevisions(string path, int limit)

Parameters
----------

**path**
	*System.String* The path to the file you want to see the revisions of.

**limit**
	*System.Int32* The maximum number of revision entries returned. The default for this field is 10.

Returns
-------

:doc:`DotNetBox.ListRevisionsResult </classes/dotnetbox.listrevisionsresult>`  List of revisions applied to the file.
