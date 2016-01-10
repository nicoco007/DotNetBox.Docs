Calling your first endpoint
===========================

Getting the user's information
------------------------------

You are now ready to use Dropbox's API! To start off, get the current user's information by calling the :doc:`GetCurrentAccount() </methods/dotnetbox.subapis.users.getcurrentaccount()>` function.

::

	FullAccount currentAccount = await client.Users.GetCurrentAccount();

This will give you access to information such as the user's account ID, their name and email, their referral link, their account type, and more! You can use this information to display who is connected to your application.

You can also get the current user's space usage by calling the :doc:`GetSpaceUsage() </methods/dotnetbox.subapis.users.getspaceusage()>` function.

::

	SpaceUsage spaceUsage = await client.Users.GetSpaceUsage();

This gives you the user's current space usage and their space quota.

File management
---------------

Dropbox is a file storage service; therefore, there must be API endpoints for file management, right? Of course! We will cover the most basic ones, but you can check out all of them in the left sidebar, and most of them are quite self-explanatory.

Getting metadata
^^^^^^^^^^^^^^^^

The first endpoint we will use is the :doc:`GetMetadata() </methods/dotnetbox.subapis.files.getmetadata(string,bool)>` function. It retrieves a file or folder's metadata. It is important to either call :doc:`FileExists() </methods/dotnetbox.subapis.files.fileexists(string)>` or :doc:`FolderExists() </methods/dotnetbox.subapis.files.folderexists(string)>` before calling this function, because it will throw an exception if the file or folder doesn't exist.

::

	if (client.Files.FileExists("/some_file.txt")) // check if the file exists
	{
		FileMetadata fileMetadata = await client.Files.GetMetadata("/some_file.txt"); // get the file's metadata
	}
	
	if (client.Files.FolderExists("/some_folder")) // check if the folder exists
	{
		FolderMetadata folderMetadata = await client.Files.GetMetadata("/some_folder"); // get the folder's metadata
	}

It is important to note that all paths should start with a forwardslash (``/``) except if you are referencing the root directory, where you leave the path blank.

File operations
^^^^^^^^^^^^^^^

Copying and moving files
""""""""""""""""""""""""

Coming soon!