// ==UserScript==
// @name         JIRA Kanban col mask Simplex
// @namespace    none
// @description  Dans le tableau Kanban, masque les colonnes Backlog et Done. Et agrandi la colonne détails
// @version      zf180217.1406
// @author       christian@zufferey.com
// @include      https://siexop-jirat.epfl.ch/secure/RapidBoard.jspa*
// @match        none
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @downloadURL  https://github.com/zuzu59/JIRA_kanban_col_mask_userscript/raw/master/col_mask_simplex.user.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function() {
    // tourne toutes les 3 secondes pour être certain que les changements s'appliquent aussi après avoir cliqué dans la page :-)
    setInterval(function(){
    // masque la colonne Backlog
    $("li.ghx-column[data-id='134']").css("display", "none");
    $("li.ghx-column[data-column-id='134']").css("display", "none");
    // masque la colonne Done
    $("li.ghx-column[data-id='137']").css("display", "none");
    $("li.ghx-column[data-column-id='137']").css("display", "none");
    // agrandi la colonne détails
    $("div#ghx-detail-view").css("width", "50%");
    $("div#ghx-column-header-group").css("width", "50%");
}, 3000);

console.log("toto");
})();


