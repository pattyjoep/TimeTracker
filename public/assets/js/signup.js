$(document).ready(function() {

// variables for password-matching verification
  var enterPass = $("#enter-password");
  var confirmPass = $("#confirm-password");
  var passPrompt = $("#password-prompt");
  var signupBtn = $("#sign-up");

  enterPass.on("keyup", function() {
    $(".fg-hide").removeClass("hidden");
  });

  confirmPass.on("keyup", function() {
    if (enterPass.val() !== confirmPass.val()) {
      passPrompt.removeClass("hidden");
    } else {
      signupBtn.removeClass("hidden");
      passPrompt.addClass("hidden");
    }
  });

  // end password-matching verification -------------------
  signupBtn.on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: $("#email").val(),
      password: $("#enter-password").val(),
      confirmPass: $("#confirm-password").val()
    };
    console.log(userData.email, userData.password);
    if (!userData.password || !userData.confirmPass) {
      return;
    }
    signUpUser(userData.email, userData.password);
    email.val("");
    password.val("");
  }); 
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }



});