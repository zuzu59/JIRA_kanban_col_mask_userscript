// ==UserScript==
// @name        EPFL People
// @namespace   none
// @description A script to improve browsing on people.epfl.ch
// @include     https://people.epfl.ch/*
// @include     https://personnes.epfl.ch/*
// @version     1.3
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author      EPFL-dojo
// @downloadURL https://raw.githubusercontent.com/epfl-dojo/EPFL_People_UserScript/master/EPFL_People.user.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {

setInterval(function(){
    $("li.ghx-column[data-id='134']").css("display", "none");
    $("li.ghx-column[data-column-id='134']").css("display", "none");
    $("li.ghx-column[data-id='137']").css("display", "none");
    $("li.ghx-column[data-column-id='137']").css("display", "none");
    $("div#ghx-detail-view").css("width", "50%");
    $("div#ghx-column-header-group").css("width", "50%");
}, 3000);
console.log("toto");
})();

