// ==UserScript==
// @name         JIRA Kanban col mask Complex
// @namespace    none
// @description  Dans le tableau Kanban, masque les colonnes Backlog et Done. Et agrandi la colonne détails
// @version      zf180217.1204
// @author       christian@zufferey.com & nicolas.borboen@epfl.ch
// @include      https://siexop-jirat.epfl.ch/secure/RapidBoard.jspa*
// @match        none
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @downloadURL  https://github.com/zuzu59/JIRA_kanban_col_mask_userscript/raw/master/col_mask_complex.user.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {
//    'use strict';

    // Your code here...

//    <li class="ghx-column" data-id="137">
//  $( "[id|='af_brand_']" ).css( "visibility", "hidden" );

$( "div#ghx-header" ).append( '<div style="float:right"><fieldset><label for="promode">Pro Mode: </label><input type="checkbox" id="promode" name="promode" 
/></fieldset></div>' );


$('#promode').change(function(){
    console.log(this);

    if (this.checked) {
console.log("ProMode=ON");
            $( "li.ghx-column[data-id='134']" ).css( "display", "none" );
    $( "li.ghx-column[data-column-id='134']" ).css( "display", "none" );
    $( "li.ghx-column[data-id='137']" ).css( "display", "none" );
    $( "li.ghx-column[data-column-id='137']" ).css( "display", "none" );
    $( "div#ghx-detail-view" ).css( "width", "64%" );
    $( "div#ghx-column-header-group" ).css( "width", "33%" );
    } else {
console.log("ProMode=OFF");
            $( "li.ghx-column[data-id='134']" ).css( "display", "block" );
    $( "li.ghx-column[data-column-id='134']" ).css( "display", "block" );
    $( "li.ghx-column[data-id='137']" ).css( "display", "block" );
    $( "li.ghx-column[data-column-id='137']" ).css( "display", "block" );
    $( "div#ghx-detail-view" ).css( "width", "24%" );
    $( "div#ghx-column-header-group" ).css( "width", "76%" );
    }

    console.log("promode toggle");

});
  /*setInterval(function(){
    $( "li.ghx-column[data-id='134']" ).css( "display", "none" );
      $( "li.ghx-column[data-column-id='134']" ).css( "display", "none" );
      $( "li.ghx-column[data-id='137']" ).css( "display", "none" );
      $( "li.ghx-column[data-column-id='137']" ).css( "display", "none" );
      $( "div#ghx-detail-view" ).css( "width", "64%" );
      $( "div#ghx-column-header-group" ).css( "width", "33%" );
  }, 3000);
*/
    console.log("toto");
})();


