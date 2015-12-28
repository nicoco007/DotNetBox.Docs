:index:`FullAccount.FullAccount Constructor (string, Name, string, string, string, bool, AccountType, string)`
==============================================================================================================

Creates a new instance of the FullAccount class.

Syntax
------

::

	FullAccount fullAccount = new FullAccount(string accountId, Name name, string email, string locale, string referralLink, bool isPaired, AccountType accountType, string country)

Parameters
----------

**accountId**
	*System.String* Account ID.

**name**
	:doc:`DotNetBox.Name </classes/dotnetbox.name>` User's name information.

**email**
	*System.String* User's email address.

**locale**
	*System.String* User's language.

**referralLink**
	*System.String* User's referral link.

**isPaired**
	*System.Boolean* Whether the user's personal and work account (if he has one) are paired.

**accountType**
	:doc:`DotNetBox.AccountType </classes/dotnetbox.accounttype>` Account type.

**country**
	*System.String* The user's country of residence.

