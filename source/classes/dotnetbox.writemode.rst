:orphan:

:index:`WriteMode Enumeration`
==============================

Mode to be used when uploading files to Dropbox.

Values
------

========= ========================================================================================
**Name**  **Description**
--------- ----------------------------------------------------------------------------------------
Add       Add the file. Use autorename strategy if required and allowed when calling the endpoint.
Overwrite Overwrite the file, if allowed when calling the endpoint.
Update    Update the file. Only works if a revision is specified.
========= ========================================================================================

