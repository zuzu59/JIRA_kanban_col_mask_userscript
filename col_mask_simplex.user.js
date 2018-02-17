// ==UserScript==
// @name         JIRA Kanban col mask Simplex
// @namespace    none
// @description  Masque pas les colonnes Backlog et Done. Et agrandi la colonne détails
// @version      zf180217.1106
// @author       Ch. Zufferey
// @include      https://siexop-jirat.epfl.ch/secure/RapidBoard.jspa*
// @match        none
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @downloadURL  https://github.com/zuzu59/JIRA_kanban_col_mask_userscript/raw/master/col_mask_simplex.user.js
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


