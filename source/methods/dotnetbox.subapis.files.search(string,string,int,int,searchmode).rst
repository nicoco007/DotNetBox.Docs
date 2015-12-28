:orphan:

:index:`Files.Search Method (string, string, int, int, SearchMode)`
===================================================================

Searches for files and folders.

Syntax
------

::

	Files.Search(string path, string query, int start, int maxResults, SearchMode mode)

Parameters
----------

**path**
	*System.String* The path in the user's Dropbox to search. Should probably be a folder.

**query**
	*System.String* The string to search for. The search string is split on spaces into multiple tokens. For file name searching, the last token is used for prefix matching.

**start**
	*System.Int32* The starting index within the search results (used for paging). The default for this field is 0.

**maxResults**
	*System.Int32* The maximum number of search results to return. The default for this field is 100.

**mode**
	:doc:`DotNetBox.SearchMode </classes/dotnetbox.searchmode>` The search mode (Filename, FilenameAndContent, or DeletedFilename). Note that searching file content is only available for Dropbox Business accounts.

Returns
-------

:doc:`DotNetBox.SearchResult </classes/dotnetbox.searchresult>`  Files and folders that match the search query.
