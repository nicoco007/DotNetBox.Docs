Getting Started
===============

Download
--------

DotNetBox can be downloaded on `NuGet <https://www.nuget.org/packages/DotNetBox>`_ or by using the NuGet Package Manager. If you are using Visual Studio, do the following:

* Open the package manager by going to *Tools* > *NuGet Package Manager* > *Package Manager Console*
* Type ``Install-Package DotNetBox``.

Using the DropboxClient Class
-----------------------------

There are two ways to create an instance of the :doc:`DropboxClient </classes/dotnetbox.dropboxclient>` class. You can either create it using an access token you have already retrieved,

::

	DropboxClient client = new DropboxClient("YOUR_ACCESS_TOKEN");

or by using your registered app's key and secret (get them from the `My Apps <https://www.dropbox.com/developers/apps>`_ section of the `Dropbox Developers <https://www.dropbox.com/developers>`_ website).

::

	DropboxClient client = new DropboxClient("APP_KEY", "APP_SECRET");

Using an access token will instantly give you the ability to call any API endpoint. However, if you chose the latter, you will need to authorize the user by redirecting them to the authorization webpage. To get the URL of this page, you need to call the :doc:`GetAuthorizeUrl() </methods/dotnetbox.dropboxclient.getauthorizeurl(responsetype,string,string,accountrole,bool,bool)>` function. You will need to specify a response type to call the function. For the sake of this tutorial, we will be using the Code flow.

::

	string authorizeUrl = client.GetAuthorizeUrl(ResponseType.Code);

Using the Code flow means that the authorization web page will display, once the user accepts, a code that the user then has to enter into your app. You will need to pass this code to the :doc:`AuthorizeCode() </methods/dotnetbox.dropboxclient.authorizecode(string,string)>` function.

::

	await client.AuthorizeCode("USER'S_CODE");

Here is an example of a simple authorization client:

::

	DropboxClient client = new DropboxClient("APP_KEY", "APP_SECRET"); // create the client
	
	private void GetCodeButton_Click()
	{
		Process.Start(client.GetAuthorizeUrl(ResponseType.Code)) // this will open the authorization URL in the user's default browser
	}
	
	private async void GetAccessTokenButton_Click()
	{
		await client.AuthorizeCode(CodeTextBox.Text); // authorize the code the user entered in a text box
	}

You will now be able to call API endpoints.