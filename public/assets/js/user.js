/* eslint-disable camelcase */
/* eslint-disable indent */
$(function() {
  console.log(window.location.href);

  var url = window.location.href;
  UserId = url.charAt(url.length - 1);
    
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
