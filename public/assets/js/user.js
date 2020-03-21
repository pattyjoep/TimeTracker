/* eslint-disable camelcase */
/* eslint-disable indent */
$(function() {
  
  

  var url = window.location.href;
  var UserId = url.slice(37, 10000);
  // http://localhost:8080/users/11 -- 28
  // https://timeveil.herokuapp.com/users/3 -- 37

  console.log("Full Url: " + url);
  console.log("UserId: " + UserId);
    
  // nested list start --------------------------------------------
  $(".list-group-item").on("click", function() {
      $(".glyphicon", this)
        .toggleClass("glyphicon-chevron-right")
        .toggleClass("glyphicon-chevron-down");
    });
  // nested list end ----------------------------------------------

  // creating a new task
  $(".task-modal-save").on("click", function(event) {
      event.preventDefault();
      var NewTaskName = $("#new-task-name").val().trim();
      var Hours = $("#new-task-hours").val().trim();
      var newTask = {
        Task_name: NewTaskName,
        hoursWorked: Hours,
        UserId: UserId
      };
      $.ajax("/tasks", {
        type: "POST",
        data: newTask
      }).then(
        function() {
          console.log("created new task" + newTask);
          location.reload();
        }
      );
    });
      
  });
