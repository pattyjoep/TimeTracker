$(document).ready(function() {
  var email = $("#enter-email");
  var password = $("#enter-password");
  var loginBtn = $("#login");
  
  password.on("keyup", function() {  
    if (email.val() !== "" && password.val() !== "") {
      loginBtn.removeClass("hidden");
    } else {
      loginBtn.addClass("hidden");
      
    }
    // console.log(password);
  });

  loginBtn.on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: $("#enter-email").val(),
      password: $("#enter-password").val()
    };
    
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
    
      .then(function(res) {
        console.log(res);
        window.location.replace("/users/" + res);
        // var id = res;
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