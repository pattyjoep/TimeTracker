/* eslint-disable indent */
$(document).on("ready", function() {
    
    // nested list start --------------------------------------------

    $(".list-group-item").on("click", function() {
        $(".glyphicon", this)
          .toggleClass("glyphicon-chevron-right")
          .toggleClass("glyphicon-chevron-down");
      });









    
    // nested list end ----------------------------------------------












    

});


// var toggler = document.getElementsByClassName("caret");
// var i;

// for (i = 0; i < toggler.length; i++) {
//   toggler[i].addEventListener("click", function() {
//     this.parentElement.querySelector(".nested").classList.toggle("active");
//     this.classList.toggle("caret-down");
//   });
// }
