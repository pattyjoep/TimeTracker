/* eslint-disable camelcase */
/* eslint-disable indent */
$(function() {
    
  // nested list start --------------------------------------------
  $(".list-group-item").on("click", function() {
      $(".glyphicon", this)
        .toggleClass("glyphicon-chevron-right")
        .toggleClass("glyphicon-chevron-down");
    });
  // nested list end ----------------------------------------------

  // creating a new task
  $(".add-task-btn").on("click", function(event) {
    event.preventDefault();
    var NewTaskName = $("#new-task-name").val().trim();
    var Hours = $("#new-task-hours").val().trim();
    console.log("NewTaskName:" + NewTaskName);

    var newTask = {
      Task_name: NewTaskName,
      hoursWorked: Hours
    };

    $.ajax("/api/tasks", {
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
