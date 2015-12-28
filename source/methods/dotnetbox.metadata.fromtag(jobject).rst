:orphan:

:index:`Metadata.FromTag Method (JObject)`
==========================================

Get a specific type of Metadata from the tag of a JSON object.

Syntax
------

::

	Metadata.FromTag(JObject json)

Parameters
----------

**json**
	*Newtonsoft.Json.Linq.JObject* JSON object.

Returns
-------

:doc:`DotNetBox.Metadata </classes/dotnetbox.metadata>`  A new Metadata class or subclass specific to the tag specified.
