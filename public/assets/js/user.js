/* eslint-disable camelcase */
/* eslint-disable indent */
$(function() {

  // for localhost8080: ---------------------------------start
    var url = window.location.href;
    var UserId = url.slice(28, 10000);
    // http://localhost:8080/users/11 -- 28
    
    console.log("Full Url: " + url);
    console.log("UserId: " + UserId);
  // for localhost8080: ---------------------------------end

  // // for herokuapp: ---------------------------------start
  
  //   var url = window.location.href;
  //   var UserId = url.slice(37, 10000);
    
  //   // https://timeveil.herokuapp.com/users/3 -- 37

  //   console.log("Full Url: " + url);
  //   console.log("UserId: " + UserId);
  // // for herokuapp: ---------------------------------end
    
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
          // close modal here
          $(".modal").modal("hide");
        }
      ).then(
        function() {
          // reload location here
          console.log("created new task" + newTask.Task_name);
          location.reload();
        }
      );
    });
      
  });
