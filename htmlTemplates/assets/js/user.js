$(document).on("ready", function() {
    var toggler = $(".caret");
    
    for (var i = 0; i < toggler.length; i++) {
        toggler[i].on("click", function() {
            $(this).parent.each(".nested ,.active").hasClass("active").toggle();
            $(this).hasClass("caret-down").toggle();
        })
    }

});


// var toggler = document.getElementsByClassName("caret");
// var i;

// for (i = 0; i < toggler.length; i++) {
//   toggler[i].addEventListener("click", function() {
//     this.parentElement.querySelector(".nested").classList.toggle("active");
//     this.classList.toggle("caret-down");
//   });
// }
