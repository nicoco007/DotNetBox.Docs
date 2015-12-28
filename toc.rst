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

.. toctree::
	:titlesonly:
	:caption: All Classes
	:maxdepth: 1
	:hidden:

	/classes/dotnetbox.authorizeresponse
	/classes/dotnetbox.basicaccount
	/classes/dotnetbox.deletedmetadata
	/classes/dotnetbox.dimensions
	/classes/dotnetbox.downloadfilecompletedeventargs
	/classes/dotnetbox.downloadfileeventargs
	/classes/dotnetbox.downloadfileprogresschangedeventargs
	/classes/dotnetbox.dropbox
	/classes/dotnetbox.dropboxclient
	/classes/dotnetbox.dropboxexception
	/classes/dotnetbox.filelinkmetadata
	/classes/dotnetbox.filemetadata
	/classes/dotnetbox.filesharinginfo
	/classes/dotnetbox.folderlinkmetadata
	/classes/dotnetbox.foldermember
	/classes/dotnetbox.foldermetadata
	/classes/dotnetbox.folderpolicy
	/classes/dotnetbox.foldersharinginfo
	/classes/dotnetbox.fullaccount
	/classes/dotnetbox.gpscoordinates
	/classes/dotnetbox.groupinfo
	/classes/dotnetbox.groupmembershipinfo
	/classes/dotnetbox.inviteeinfo
	/classes/dotnetbox.inviteemembershipinfo
	/classes/dotnetbox.jobstatus
	/classes/dotnetbox.launchemptyresult
	/classes/dotnetbox.linkmetadata
	/classes/dotnetbox.linkpermissions
	/classes/dotnetbox.listfolderlongpollresult
	/classes/dotnetbox.listfolderresult
	/classes/dotnetbox.listrevisionsresult
	/classes/dotnetbox.listsharedfoldersresult
	/classes/dotnetbox.listsharedlinksresult
	/classes/dotnetbox.mediainfo
	/classes/dotnetbox.mediametadata
	/classes/dotnetbox.metadata
	/classes/dotnetbox.name
	/classes/dotnetbox.photometadata
	/classes/dotnetbox.searchmatch
	/classes/dotnetbox.searchresult
	/classes/dotnetbox.sharedfoldermembers
	/classes/dotnetbox.sharedfoldermetadata
	/classes/dotnetbox.sharefolderjobstatus
	/classes/dotnetbox.sharefolderlaunch
	/classes/dotnetbox.spaceallocation
	/classes/dotnetbox.spaceusage
	/classes/dotnetbox.subapis.files
	/classes/dotnetbox.subapis.sharing
	/classes/dotnetbox.subapis.users
	/classes/dotnetbox.team
	/classes/dotnetbox.teammemberinfo
	/classes/dotnetbox.uploadfileasynceventargs
	/classes/dotnetbox.uploadfilecompletedeventargs
	/classes/dotnetbox.uploadfileprogresschangedeventargs
	/classes/dotnetbox.userinfo
	/classes/dotnetbox.usermembershipinfo
	/classes/dotnetbox.videometadata

.. toctree::
	:titlesonly:
	:caption: All Events
	:maxdepth: 1
	:hidden:

	/events/dotnetbox.subapis.files.downloadfileprogresschanged
	/events/dotnetbox.subapis.files.downloadfilecompleted
	/events/dotnetbox.subapis.files.uploadfileprogresschanged
	/events/dotnetbox.subapis.files.uploadfilecompleted

.. toctree::
	:titlesonly:
	:caption: All Delegates
	:maxdepth: 1
	:hidden:

	/classes/dotnetbox.downloadfilecompletedeventhandler
	/classes/dotnetbox.downloadfileprogresschangedeventhandler
	/classes/dotnetbox.uploadfilecompletedeventhandler
	/classes/dotnetbox.uploadfileprogresschangedeventhandler

.. toctree::
	:titlesonly:
	:caption: All Enumerations
	:maxdepth: 1
	:hidden:

	/classes/dotnetbox.accesslevel
	/classes/dotnetbox.accountrole
	/classes/dotnetbox.accounttype
	/classes/dotnetbox.aclupdatepolicy
	/classes/dotnetbox.asyncjobstatus
	/classes/dotnetbox.memberpolicy
	/classes/dotnetbox.requestargs
	/classes/dotnetbox.requestedvisibility
	/classes/dotnetbox.resolvedvisibility
	/classes/dotnetbox.responsetype
	/classes/dotnetbox.searchmatchtype
	/classes/dotnetbox.searchmode
	/classes/dotnetbox.sharedlinkaccessfailurereason
	/classes/dotnetbox.sharedlinkpolicy
	/classes/dotnetbox.spaceallocationtype
	/classes/dotnetbox.thumbnailformat
	/classes/dotnetbox.thumbnailsize
	/classes/dotnetbox.useridentifiertype
	/classes/dotnetbox.writemode

.. toctree::
	:titlesonly:
	:caption: All Methods
	:maxdepth: 1
	:hidden:

	/methods/dotnetbox.authorizeresponse.ctor(string,string,string)
	/methods/dotnetbox.authorizeresponse.fromjson(jobject)
	/methods/dotnetbox.authorizeresponse.tostring()
	/methods/dotnetbox.basicaccount.ctor(string,name,bool)
	/methods/dotnetbox.basicaccount.fromjson(jobject)
	/methods/dotnetbox.basicaccount.tostring()
	/methods/dotnetbox.deletedmetadata.ctor(string,string,string)
	/methods/dotnetbox.deletedmetadata.fromjson(jobject)
	/methods/dotnetbox.deletedmetadata.tostring()
	/methods/dotnetbox.dimensions.ctor(long,long)
	/methods/dotnetbox.dimensions.fromjson(jobject)
	/methods/dotnetbox.dimensions.tostring()
	/methods/dotnetbox.downloadfilecompletedeventargs.ctor(filemetadata,exception,bool)
	/methods/dotnetbox.downloadfileeventargs.ctor(string,string,string,string)
	/methods/dotnetbox.downloadfileprogresschangedeventargs.ctor(float,long,long)
	/methods/dotnetbox.dropbox.cancel()
	/methods/dotnetbox.dropbox.ctor(string)
	/methods/dotnetbox.dropbox.filterdropboxerror(webexception)
	/methods/dotnetbox.dropbox.getresponse(string)
	/methods/dotnetbox.dropbox.sendbasicrequest(string,byte[])
	/methods/dotnetbox.dropbox.senddownloadrequest(string,string,string)
	/methods/dotnetbox.dropbox.senddownloadrequestasync(string,string,string,downloadfileprogresschangedeventhandler,downloadfilecompletedeventhandler)
	/methods/dotnetbox.dropbox.sendrequest(string,byte[],int,bool)
	/methods/dotnetbox.dropbox.sendrequest(string,byte[],int)
	/methods/dotnetbox.dropbox.sendrequest(string,byte[])
	/methods/dotnetbox.dropbox.sendrequest(string,int)
	/methods/dotnetbox.dropbox.sendrequest(string)
	/methods/dotnetbox.dropbox.senduploadrequest(string,stream,string)
	/methods/dotnetbox.dropbox.senduploadrequestasync(stream,requestargs,uploadfileprogresschangedeventhandler,uploadfilecompletedeventhandler)
	/methods/dotnetbox.dropboxclient.authorizecode(string,string)
	/methods/dotnetbox.dropboxclient.ctor(string)
	/methods/dotnetbox.dropboxclient.ctor(string,string)
	/methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)
	/methods/dotnetbox.dropboxexception.ctor()
	/methods/dotnetbox.dropboxexception.ctor(string)
	/methods/dotnetbox.dropboxexception.ctor(string,exception)
	/methods/dotnetbox.filelinkmetadata.ctor(string,string,linkpermissions,datetime,datetime,string,long,string,datetime,string,teammemberinfo,team)
	/methods/dotnetbox.filelinkmetadata.fromjson(jobject)
	/methods/dotnetbox.filelinkmetadata.tostring()
	/methods/dotnetbox.filemetadata.ctor(string,string,string,datetime,datetime,string,long,string,mediainfo,filesharinginfo)
	/methods/dotnetbox.filemetadata.fromjson(jobject)
	/methods/dotnetbox.filemetadata.tostring()
	/methods/dotnetbox.filesharinginfo.ctor(bool,string,string)
	/methods/dotnetbox.filesharinginfo.fromjson(jobject)
	/methods/dotnetbox.filesharinginfo.tostring()
	/methods/dotnetbox.folderlinkmetadata.ctor(string,string,linkpermissions,string,datetime,string,teammemberinfo,team)
	/methods/dotnetbox.folderlinkmetadata.fromjson(jobject)
	/methods/dotnetbox.folderlinkmetadata.tostring()
	/methods/dotnetbox.foldermember.ctor(string,accesslevel)
	/methods/dotnetbox.foldermetadata.ctor(string,string,string,string,string,foldersharinginfo)
	/methods/dotnetbox.foldermetadata.fromjson(jobject)
	/methods/dotnetbox.foldermetadata.tostring()
	/methods/dotnetbox.folderpolicy.ctor(aclupdatepolicy,sharedlinkpolicy,memberpolicy)
	/methods/dotnetbox.folderpolicy.fromjson(jobject)
	/methods/dotnetbox.folderpolicy.tostring()
	/methods/dotnetbox.foldersharinginfo.ctor(bool,string,string)
	/methods/dotnetbox.foldersharinginfo.fromjson(jobject)
	/methods/dotnetbox.foldersharinginfo.tostring()
	/methods/dotnetbox.fullaccount.ctor(string,name,string,string,string,bool,accounttype,string)
	/methods/dotnetbox.fullaccount.fromjson(jobject)
	/methods/dotnetbox.fullaccount.tostring()
	/methods/dotnetbox.gpscoordinates.ctor(float,float)
	/methods/dotnetbox.gpscoordinates.fromjson(jobject)
	/methods/dotnetbox.gpscoordinates.tostring()
	/methods/dotnetbox.groupinfo.ctor(string,string,int,bool,string)
	/methods/dotnetbox.groupinfo.fromjson(jobject)
	/methods/dotnetbox.groupinfo.tostring()
	/methods/dotnetbox.groupmembershipinfo.ctor(accesslevel,groupinfo)
	/methods/dotnetbox.groupmembershipinfo.fromjson(jobject)
	/methods/dotnetbox.groupmembershipinfo.tostring()
	/methods/dotnetbox.inviteeinfo.ctor(string)
	/methods/dotnetbox.inviteeinfo.fromjson(jobject)
	/methods/dotnetbox.inviteeinfo.tostring()
	/methods/dotnetbox.inviteemembershipinfo.ctor(accesslevel,inviteeinfo)
	/methods/dotnetbox.inviteemembershipinfo.fromjson(jobject)
	/methods/dotnetbox.inviteemembershipinfo.tostring()
	/methods/dotnetbox.jobstatus.ctor(asyncjobstatus,string)
	/methods/dotnetbox.jobstatus.fromjson(jobject)
	/methods/dotnetbox.jobstatus.tostring()
	/methods/dotnetbox.launchemptyresult.ctor(asyncjobstatus,string)
	/methods/dotnetbox.launchemptyresult.fromjson(jobject)
	/methods/dotnetbox.launchemptyresult.tostring()
	/methods/dotnetbox.linkmetadata.ctor(string,string,linkpermissions,string,datetime,string,teammemberinfo,team)
	/methods/dotnetbox.linkmetadata.fromjson(jobject)
	/methods/dotnetbox.linkmetadata.tostring()
	/methods/dotnetbox.linkpermissions.ctor(bool,resolvedvisibility,requestedvisibility,sharedlinkaccessfailurereason)
	/methods/dotnetbox.linkpermissions.fromjson(jobject)
	/methods/dotnetbox.linkpermissions.tostring()
	/methods/dotnetbox.listfolderlongpollresult.ctor(bool,int32)
	/methods/dotnetbox.listfolderlongpollresult.fromjson(jobject)
	/methods/dotnetbox.listfolderlongpollresult.tostring()
	/methods/dotnetbox.listfolderresult.ctor(metadata[],string,bool)
	/methods/dotnetbox.listfolderresult.fromjson(jobject)
	/methods/dotnetbox.listfolderresult.tostring()
	/methods/dotnetbox.listrevisionsresult.ctor(bool,filemetadata[])
	/methods/dotnetbox.listrevisionsresult.fromjson(jobject)
	/methods/dotnetbox.listrevisionsresult.tostring()
	/methods/dotnetbox.listsharedfoldersresult.ctor(sharedfoldermetadata[],string)
	/methods/dotnetbox.listsharedfoldersresult.fromjson(jobject)
	/methods/dotnetbox.listsharedfoldersresult.tostring()
	/methods/dotnetbox.listsharedlinksresult.ctor(linkmetadata[],bool,string)
	/methods/dotnetbox.listsharedlinksresult.fromjson(jobject)
	/methods/dotnetbox.listsharedlinksresult.tostring()
	/methods/dotnetbox.mediainfo.ctor(bool,mediametadata)
	/methods/dotnetbox.mediainfo.fromjson(jobject)
	/methods/dotnetbox.mediainfo.tostring()
	/methods/dotnetbox.mediametadata.ctor(dimensions,gpscoordinates,datetime)
	/methods/dotnetbox.mediametadata.fromjson(jobject)
	/methods/dotnetbox.mediametadata.tostring()
	/methods/dotnetbox.metadata.ctor(string,string,string,bool,bool,bool)
	/methods/dotnetbox.metadata.fromjson(jobject)
	/methods/dotnetbox.metadata.fromtag(jobject)
	/methods/dotnetbox.metadata.tostring()
	/methods/dotnetbox.name.ctor(string,string,string,string)
	/methods/dotnetbox.name.fromjson(jobject)
	/methods/dotnetbox.name.tostring()
	/methods/dotnetbox.photometadata.ctor(dimensions,gpscoordinates,datetime)
	/methods/dotnetbox.photometadata.fromjson(jobject)
	/methods/dotnetbox.photometadata.tostring()
	/methods/dotnetbox.requestargs.add(string,jtoken)
	/methods/dotnetbox.requestargs.tobytearray()
	/methods/dotnetbox.requestargs.tostring()
	/methods/dotnetbox.searchmatch.ctor(searchmatchtype,metadata)
	/methods/dotnetbox.searchmatch.fromjson(jobject)
	/methods/dotnetbox.searchmatch.tostring()
	/methods/dotnetbox.searchresult.ctor(searchmatch[],bool,int)
	/methods/dotnetbox.searchresult.fromjson(jobject)
	/methods/dotnetbox.searchresult.tostring()
	/methods/dotnetbox.sharedfoldermembers.ctor(usermembershipinfo[],groupmembershipinfo[],inviteemembershipinfo[],string)
	/methods/dotnetbox.sharedfoldermembers.fromjson(jobject)
	/methods/dotnetbox.sharedfoldermembers.tostring()
	/methods/dotnetbox.sharedfoldermetadata.ctor(string,string,accesslevel,bool,folderpolicy,string)
	/methods/dotnetbox.sharedfoldermetadata.fromjson(jobject)
	/methods/dotnetbox.sharedfoldermetadata.tostring()
	/methods/dotnetbox.sharefolderjobstatus.ctor(asyncjobstatus,sharedfoldermetadata,string)
	/methods/dotnetbox.sharefolderjobstatus.fromjson(jobject)
	/methods/dotnetbox.sharefolderjobstatus.tostring()
	/methods/dotnetbox.sharefolderlaunch.ctor(string,sharedfoldermetadata)
	/methods/dotnetbox.sharefolderlaunch.fromjson(jobject)
	/methods/dotnetbox.sharefolderlaunch.tostring()
	/methods/dotnetbox.spaceallocation.ctor(spaceallocationtype,long)
	/methods/dotnetbox.spaceallocation.fromjson(jobject)
	/methods/dotnetbox.spaceallocation.tostring()
	/methods/dotnetbox.spaceusage.ctor(long,spaceallocation)
	/methods/dotnetbox.spaceusage.fromjson(jobject)
	/methods/dotnetbox.spaceusage.tostring()
	/methods/dotnetbox.subapis.files.cancel()
	/methods/dotnetbox.subapis.files.copy(string,string)
	/methods/dotnetbox.subapis.files.createfolder(string)
	/methods/dotnetbox.subapis.files.ctor(string)
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
	/methods/dotnetbox.subapis.sharing.addfoldermember(string,foldermember[],bool,string)
	/methods/dotnetbox.subapis.sharing.checkjobstatus(string)
	/methods/dotnetbox.subapis.sharing.checksharejobstatus(string)
	/methods/dotnetbox.subapis.sharing.createsharedlink(string,requestedvisibility,string,datetime)
	/methods/dotnetbox.subapis.sharing.ctor(string)
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
	/methods/dotnetbox.subapis.users.ctor(string)
	/methods/dotnetbox.subapis.users.getaccount(string)
	/methods/dotnetbox.subapis.users.getaccountbatch(string[])
	/methods/dotnetbox.subapis.users.getcurrentaccount()
	/methods/dotnetbox.subapis.users.getspaceusage()
	/methods/dotnetbox.team.ctor(string,string)
	/methods/dotnetbox.team.fromjson(jobject)
	/methods/dotnetbox.team.tostring()
	/methods/dotnetbox.teammemberinfo.ctor(team,string,string)
	/methods/dotnetbox.teammemberinfo.fromjson(jobject)
	/methods/dotnetbox.teammemberinfo.tostring()
	/methods/dotnetbox.uploadfileasynceventargs.ctor(stream,requestargs,string)
	/methods/dotnetbox.uploadfilecompletedeventargs.ctor(filemetadata,exception,bool)
	/methods/dotnetbox.uploadfileprogresschangedeventargs.ctor(float,long,long)
	/methods/dotnetbox.userinfo.ctor(string,bool,string)
	/methods/dotnetbox.userinfo.fromjson(jobject)
	/methods/dotnetbox.userinfo.tostring()
	/methods/dotnetbox.usermembershipinfo.ctor(accesslevel,userinfo)
	/methods/dotnetbox.usermembershipinfo.fromjson(jobject)
	/methods/dotnetbox.usermembershipinfo.tostring()
	/methods/dotnetbox.videometadata.ctor(dimensions,gpscoordinates,datetime,int64)
	/methods/dotnetbox.videometadata.fromjson(jobject)
	/methods/dotnetbox.videometadata.tostring()

