:index:`Users.GetAccountBatch Method (string[])`
================================================

Get information about multiple user accounts. At most 300 accounts may be queried per request.

Syntax
------

::

	Users.GetAccountBatch(string[] accountIds)

Parameters
----------

**accountIds**
	*System.String[]* List of user account identifiers. Should not contain any duplicate account IDs.

Returns
-------

:doc:`DotNetBox.BasicAccount[] </classes/dotnetbox.basicaccount>`  List of basic information about every account.
