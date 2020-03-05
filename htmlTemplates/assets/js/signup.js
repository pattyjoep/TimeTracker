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
            passPrompt.addClass("hidden");
            signupBtn.removeClass("hidden");
        }
    });
    // end password-matching verification -------------------
    



});