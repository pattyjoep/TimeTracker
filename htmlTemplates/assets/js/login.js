$(document).ready(function() {
    var email = $("#enter-email");
    var password = $("#enter-password");
    var passPrompt = $("#password-prompt");
    var loginBtn = $("#login");

    password.on("keyup", function() {
        if (email.val() !== "" && password.val() !== "") {
            loginBtn.removeClass("hidden");
        } else {
            loginBtn.addClass("hidden");
            passPrompt.removeClass("hidden");
        }
    });
    



});