/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {

$('.google-search-input').on('keyup', function( e ) {
   if (e.keycode === 13) {
       console.log("lool");
        $('.google-search-input').val($(this).val());
        $('#google-form').submit();
    }
});


});