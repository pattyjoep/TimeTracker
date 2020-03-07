$(document).ready(function() {
  var email = $("#enter-email");
  var password = $("#enter-password");
  var passPrompt = $("#password-prompt");
  var loginBtn = $("#login");
  var signupLink = $("#signup-link");

  email.on("keyup", function() {
    signupLink.addClass("hidden");
  });
    
  password.on("keyup", function() {
    signupLink.addClass("hidden");
    if (email.val() !== "" && password.val() !== "") {
      loginBtn.removeClass("hidden");
    } else {
      loginBtn.addClass("hidden");
      passPrompt.removeClass("hidden");
    }
  });


//   select login button
//   listener for click
//      capture val of username input
//      ajax get route 
//      redirect 
    
});