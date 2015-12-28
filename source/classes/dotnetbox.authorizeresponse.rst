:orphan:

:index:`AuthorizeResponse Class`
================================

Dropbox API's response when asking for an access token.

Constructors
------------

================================================================================================================== ==========================================
Name                                                                                                               Description                                
================================================================================================================== ==========================================
:doc:`AuthorizeResponse(string, string, string) </methods/dotnetbox.authorizeresponse.ctor(string,string,string)>` Initializes a new AuthorizeResponse class. 
================================================================================================================== ==========================================

Properties
----------

=========== ============= =====================================================
Name        Type          Description                                           
=========== ============= =====================================================
AccessToken System.String Access token to be used with all other calls.         
TokenType   System.String Type of access token given. Should always be "Bearer" 
Uid         System.String Dropbox user ID.                                      
=========== ============= =====================================================

Methods
-------

=================================================================================================== =========================================================
Name                                                                                                Description                                               
=================================================================================================== =========================================================
:doc:`AuthorizeResponse.FromJson(JObject) </methods/dotnetbox.authorizeresponse.fromjson(jobject)>` Creates a new AuthorizeResponse class from a JSON object. 
:doc:`AuthorizeResponse.ToString() </methods/dotnetbox.authorizeresponse.tostring()>`               Returns a string containing all of the class' properties. 
=================================================================================================== =========================================================

