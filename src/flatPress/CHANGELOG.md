# 2019-02-22: FlatPress 1.1 "Da capo"
## General
- Languages added: Greek, German, Czech (feel free to send in *your* language packs!)
- Admin: Fancyfied editor toolbar with more BBCode elements
- Changelog: Missing releases added
## Plugins
- Plugin added: Protected Mail Links
- jQuery plugin: jQuery files are loaded locally now
- Readmore plugin: Now localized (feel free to send in *your* translation!)
- Searchbox plugin: Full text search enabled by default
- Footnotes plugin: Usage how-to added
- Lightbox plugin: Slimbox version updated, broken overlay fixed
## Security
- Security fix: Possible CSFR attack prevented (see [details](https://www.exploit-db.com/exploits/39870 "exploit-db.com/exploits/39870"))
## Bugfixes
- Correct handling of special characters in URLs (see [PR11](https://github.com/flatpressblog/flatpress/pull/11 "Pull request #11"))
- HTTPS allowed in comment URLs
- BBCode element "video" serves Youtube videos in iFrame instead of SWF object
- Leggero theme: No more mixed content warning (see [#31](https://github.com/flatpressblog/flatpress/issues/31))
- Update checker works with HTTPS URL (see [#36](https://github.com/flatpressblog/flatpress/issues/36))

# 2018-12-16: [FlatPress 1.0.3.php7](https://github.com/flatpressblog/flatpress/releases/tag/v1.0.3.php7)
First release after Edoardo handed over the project ownership to Arvid. "Emergency release" to bring FlatPress back to the present.
- Runs under PHP7
- HTTPS support
- Plugins added: Last comments admin, Media manager

# 2015-06-12: [FlatPress 1.0.3](https://github.com/flatpressblog/flatpress/releases/tag/v1.0.3)
- This release fixes an XSS (CVE-2014-100036).
- Bonus: a new style for Leggero theme by @MarcThibeault and other UI enhancements by @MarcThibeault and @liquibyte

# 2013-12-11: [FlatPress 1.0.2](https://github.com/flatpressblog/flatpress/releases/tag/v1.0.2)
Another bugfix release.
- Fixes errors in the rushed patched vulnerability in v1.0.1.
- Clears some issues with strict standards.
- Timezone now defaults to UTC. You can set your own time offset in the configuration panel of the admin area

# 2013-11-21: [FlatPress 1.0.1](https://github.com/flatpressblog/flatpress/releases/tag/v1.0.1)
Bugfix release. 
- Addresses Issue #3 http://www.exploit-db.com/exploits/29515/

# 2012-01-11: FlatPress 1.0 "Solenne"
- ...still to be documented...

# 2010-11-07: 0.10xxx
# 2009-10-10: 0.9xx Arioso
# 2008-12-24: 0.8xx Fortissimo

2008-05-07: FlatPress 0.803 Vivace
======================
GENERAL
-------
+ Rewritten bootstrap, index centralized
+ New database backend (soon to be rewroked ;))
+ New draft system
+ New secure hashing algorhytms for passwords
+ New widget system
+ Post view count moved to plugin PostViews
+ Rewritten main config file
+ Allowing custom appearance for date/time
+ New URLs (still compatible)
+ Allow static pages as home
+ mysite.com/flatpress/?random post goodie :)


PLUGINS
-------
+ New PostViews plugin
+ New favicon plugin
+ New prettyurls plugin, supporting pathinfo! (check plugin for help)
+ Added GUI to BlockParser
+ Added GUI to Akismet
F Fixed accessible antispam
F BBCode now allows inline HTML (check plugin for help): this
  allows WYSIWYG lovers to install their favourite editor (e.g.
  TinyMCE, see the forum for more)
F Modified and cleaned interactions of BBCode with thumbs and 
  lightbox plugins
F Lightbox shouldn't crash IE7 anymore
F Akismet shouldn't timeout anymore
U jsUtils is mootools 1.1 full (complete download)

ADMIN PANEL
-----------
+ New GUI
+ Allowing plugins to add panels
+ Validating now without sessions
+ New Widget GUI
+ New Plugin GUI
+ New Theme/Styles GUI
+ New Options (formerly config) GUI


0.703.6.2 (2007-11-26)
======================

- FIXED: removed /test.php 
- FIXED: version number


0.703.6.1 (2007-10-23)
======================

FIXED: typo in admin.entry.delete.php


0.703.6 (2007-10-19)
====================

- FIXED:  XSS vulnerabilities in comments.tpl and contact.tpl
- FIXED: Backported from Crescendo+1 fix for XSS in $_GET fields
- FIXED: bug in static handling (THEME_LEGACY_MODE not checked)
- FIXED: Moved html escaping from default-filters to bbcode plugin
- FIXED: Added option to bbcode plugin to allow inline html! (no more ugly [html] tags! :)


0.703.5 (2007-09-22)
====================

- FIXED: severe bug with 
- FIXED: smaller one with commslock


0.703.4 (2007-09-19)
====================
 
FIXED: several XSS vulnerabilities


0.703.3 (2007-09-18)
====================

FIXED: XSS in search.php


0.703.2 (2007-07-13)
====================

FIXED: input validation problems


0703.1 Crescendo (July 10, 2007)
===============================

Small bug fixes
- FIXED:   bbcode: [u] tag missing
- FIXED:	 bbcode/syntaxhighlighter: [code=MY_SYNTAX] works again
- FIXED:	 fixed error handling with missing categories
 

0.703 Crescendo Final (June 27, 2007)
=====================================

- UPDATED: jsUtils : Mootools 1.11
- FIXED:	 URL issues with BBCODE
- FIXED:	 small issues with thumb plugin


Crescendo RC2 (June 3, 2007)
============================

- FIXED: spaces in file names are escaped as dashes "-" when uploaded
- FIXED: various bbcode issues
- FIXED: scale/width bbcode/thumb issues
- MDFD: now thumb creates a .thumb dir for each subdir of images/
- FIXED: leggero CSS
- FIXED: double entity encoding
- ADDED: (since RC1): when loggedin trying to open a non-existent
        static page will bring you to the "add new static" panel


Crescendo RC1 (May 29, 2007)
============================

- FIXED: plugin/bbcode: broken non-local urls 
- FIXED: core/FPDB archive function: /?y=nn didn't work if a month wasn't specified
- FIXED: core/entry/cache : buggy workarounded function (see previous) is now fixed
- FIXED: core/users : session was not kept if user IP changed
- FIXED: core/rss : template now works, fixed core accordingly
- ADDED: core/rss : full content support
- UPDATED: plugin/jsUtils, upgraded to mootools 1.1
- UPDATED: plugin/lightbox updated accordingly to slimbox 1.4
- RMVD:	temporarily removed prettyurls plugin 
	(todo: remove from default config); 
	I'm working to a newer cooler version, but 
	it will require probably some changes in core, so no-go for this
	release
- ADDED: Lang/it-it: added some strings I forgot

Crescendo beta1 (May 17, 2007)
============================

- added: 		some entry/cache hooks
- added:		many plugin translations thanx to cimangi (http://luielei.altervista.org/)
- added:		panel notifications for plugins
- added:		new theme, new icons (updated old admin css)
- fixed:		lightbox updated and fixed
- fixed:		removed quote escaping in entries (removed and added fix for old versions)
- fixed:		directory deletion under php5 (thx cimangi)
- fixed:		entry_delete did not remove visit counter (cimangi)  
- fixed:		session retaining in control panel under certain conditions (smartyvalidate)
- changed:	some behaviours in cache; need some rework as introduced a little bug... d'oh! 


Crescendo alpha
===============

- fixed:		utils_mail()
- fixed: 		bbcode url trim
- fixed:		bbcode remote image timeouts 
- changed:	WHOLE new POST behaviour (no longer "POSTDATA" messages)
- changed:	new theme tags (almost finished). support for old themes; soon deprecated
- changed:	graphics for the old theme (almost finished) 
- changed:	a whole bunch of graphic thingies
- changed:	plugin organization
- added: 		[video] tag support http://flatpress.nowhereland.it/index.php?entry=entry070210-211548
- added: 		update checker (experimental)
- added:		error/success notification system with fancy graphics :P

NOTE: italian language is still there until the wiki is ready
