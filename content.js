
var s = document.createElement('script');
s.src = chrome.extension.getURL('jquery-1.10.2.min.js');
(document.head||document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL('gmail.js');
(document.head||document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL('raplet.js');
(document.head||document.documentElement).appendChild(s);

