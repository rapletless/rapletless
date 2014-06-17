rapletless
==========

A (planned) drop-in replacement for Rapportive / Raplet

Rapportive has / had an awesome feature called Raplet which made it very simple to 
embed your own app's info into gmail in context against a person's email.

Super simple CRM's like powers. Then they deprecated it, which sucks.

This project's aim is to build a chrome plugin, and possibly plugins for other browsers
that is a generic drop-in replacement for the Raplet side of Rapportive.

* Configure with a list of Raplet url's
* Auto configure them using the Raplet spec

The rough plan is to use gmail.js to do the heavy lifting, so this should be mostly
a thin layer of glue code.

I'm also looking for helpers :)

