DotNetBox
=========
The .NET Framework for Dropbox
------------------------------

**Please note:** This documentation is currently incomplete and in the process of being written. There may be missing elements, and the tutorial is far from complete.

For a list of all classes, methods, and constructors, please see the :ref:`genindex`.

.. toctree::
	:caption: Introduction
	
	gettingstarted
	firstendpoint

.. toctree::
	:titlesonly:
	:caption: Users
	:maxdepth: 1

	/methods/dotnetbox.subapis.users.getaccount(string)
	/methods/dotnetbox.subapis.users.getaccountbatch(string[])
	/methods/dotnetbox.subapis.users.getcurrentaccount()
	/methods/dotnetbox.subapis.users.getspaceusage()

.. toctree::
	:titlesonly:
	:caption: Files
	:maxdepth: 1

	/methods/dotnetbox.subapis.files.cancel()
	/methods/dotnetbox.subapis.files.copy(string,string)
	/methods/dotnetbox.subapis.files.createfolder(string)
	/methods/dotnetbox.subapis.files.delete(string)
	/methods/dotnetbox.subapis.files.download(string,string)
	/methods/dotnetbox.subapis.files.downloadasync(string,string)
	/methods/dotnetbox.subapis.files.fileexists(string)
	/methods/dotnetbox.subapis.files.folderexists(string)
	/methods/dotnetbox.subapis.files.getmetadata(string,bool)
	/methods/dotnetbox.subapis.files.getpreview(string,string)
	/methods/dotnetbox.subapis.files.getthumbnail(string,string,thumbnailformat,thumbnailsize)
	/methods/dotnetbox.subapis.files.listfolder(string,bool,bool,bool)
	/methods/dotnetbox.subapis.files.listfoldercontinue(string)
	/methods/dotnetbox.subapis.files.listfoldergetlatestcursor(string,bool,bool,bool)
	/methods/dotnetbox.subapis.files.listfolderlongpoll(string,int)
	/methods/dotnetbox.subapis.files.listrevisions(string,int)
	/methods/dotnetbox.subapis.files.move(string,string)
	/methods/dotnetbox.subapis.files.restore(string,string)
	/methods/dotnetbox.subapis.files.search(string,string,int,int,searchmode)
	/methods/dotnetbox.subapis.files.upload(string,string,writemode,bool,bool,string)
	/methods/dotnetbox.subapis.files.uploadasync(string,string,writemode,bool,bool,string)

.. toctree::
	:titlesonly:
	:caption: Sharing
	:maxdepth: 1

	/methods/dotnetbox.subapis.sharing.addfoldermember(string,foldermember[],bool,string)
	/methods/dotnetbox.subapis.sharing.checkjobstatus(string)
	/methods/dotnetbox.subapis.sharing.checksharejobstatus(string)
	/methods/dotnetbox.subapis.sharing.createsharedlink(string,requestedvisibility,string,datetime)
	/methods/dotnetbox.subapis.sharing.downloadsharedlinkfile(string,string,string,string)
	/methods/dotnetbox.subapis.sharing.getsharedfolder(string)
	/methods/dotnetbox.subapis.sharing.getsharedfoldermetadata(string)
	/methods/dotnetbox.subapis.sharing.getsharedlink(string)
	/methods/dotnetbox.subapis.sharing.getsharedlinkmetadata(string,string,string)
	/methods/dotnetbox.subapis.sharing.hassharedlink(string)
	/methods/dotnetbox.subapis.sharing.listsharedfoldermembers(string)
	/methods/dotnetbox.subapis.sharing.listsharedfoldermemberscontinue(string)
	/methods/dotnetbox.subapis.sharing.listsharedfolders()
	/methods/dotnetbox.subapis.sharing.listsharedfolderscontinue(string)
	/methods/dotnetbox.subapis.sharing.listsharedlinks(string,string)
	/methods/dotnetbox.subapis.sharing.modifysharedlinksettings(string,requestedvisibility,string,datetime)
	/methods/dotnetbox.subapis.sharing.mountfolder(string)
	/methods/dotnetbox.subapis.sharing.relinquishfoldermembership(string)
	/methods/dotnetbox.subapis.sharing.removefoldermember(string,string,bool)
	/methods/dotnetbox.subapis.sharing.revokesharedlink(string)
	/methods/dotnetbox.subapis.sharing.sharefolder(string,bool,aclupdatepolicy,sharedlinkpolicy,memberpolicy)
	/methods/dotnetbox.subapis.sharing.transferfolder(string,string)
	/methods/dotnetbox.subapis.sharing.unmountfolder(string)
	/methods/dotnetbox.subapis.sharing.unsharefolder(string,bool)
	/methods/dotnetbox.subapis.sharing.updatefoldermember(string,string,accesslevel)
	/methods/dotnetbox.subapis.sharing.updatefolderpolicy(string,aclupdatepolicy,sharedlinkpolicy,memberpolicy)

