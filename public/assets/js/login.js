$(document).ready(function() {
  var email = $("#enter-email");
  var password = $("#enter-password");
  var passPrompt = $("#password-prompt");
  var loginBtn = $("#login");
  var signupLink = $("#signup-link");

  email.on("keyup", function() {
    signupLink.addClass("hidden");
    // console.log(email);
  });
    
  password.on("keyup", function() {
    signupLink.addClass("hidden");
    if (email.val() !== "" && password.val() !== "") {
      loginBtn.removeClass("hidden");
    } else {
      loginBtn.addClass("hidden");
      passPrompt.removeClass("hidden");
    }
    // console.log(password);
  });

  loginBtn.on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: $("#enter-email").val(),
      password: $("#enter-password").val()
    };
    console.log(userData.email, userData.password);
    if (!userData.email || !userData.password) {
      return;
    }
    loginUser(userData.email, userData.password);
    email.val("");
    password.val("");
  });

  function loginUser(emailInput, passwordInput) {
    $.post("/api/login", {
      email: emailInput,
      password: passwordInput
    })
    
      .then(function() {
        window.location.replace("/views/user");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
//   select login button
//   listener for click
//      capture val of username input
//      ajax get route 
//      redirect 
    
});