// ==UserScript==
// @name         JIRA Kanban col mask Simplex
// @namespace    none
// @description  Masque pas les colonnes Backlog et Done. Et agrandi la colonne détails
// @version      zf180217.0854
// @author       Ch. Zufferey
// @include      https://siexop-jirat.epfl.ch/secure/RapidBoard.jspa*
// @match        none
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/zuzu59/JIRA_kanban_col_mask_userscript/master/col_mask_simplex.js
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

