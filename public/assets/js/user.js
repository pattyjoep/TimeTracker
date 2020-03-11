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

  // // creating a new task
  // $(".add-task-btn").on("click", function(event) {
  //   event.preventDefault();
  //   var task_name = $(".add-task-input").val().trim();
  //   console.log("task_name:" + task_name);

  //   var newTask = {
  //     name: task_name
  //   };

  //   $.ajax("/api/tasks", {
  //     type: "POST",
  //     data: newTask
  //   }).then(
  //     function() {
  //       console.log("created new task" + newTask);
  //       location.reload();
  //     }
  //   );
  // });

  // // creating a new project
  // $(".add-project-btn").on("click", function(event) {
  //   event.preventDefault();
  //   var project_name = $(".add-project-input").val().trim();
  //   console.log("project_name:" + project_name);

  //   var newProject = {
  //     name: project_name
  //   };

  //   $.ajax("/api/projects", {
  //     type: "POST",
  //     data: newProject
  //   }).then(
  //     function() {
  //       console.log("created new project" + newProject);
  //       location.reload();
  //     }
  //   );
  // });

  // // creating a new client
  // // add modal for inputting all info
  // $(".add-client-btn").on("click", function(event) {
  //   event.preventDefault();
  //   var client_name = $(".add-client-input").val().trim();
  //   console.log("client_name:" + client_name);

  //   var newClient = {
  //     name: client_name
  //   };

  //   $.ajax("/api/clients", {
  //     type: "POST",
  //     data: newClient
  //   }).then(
  //     function() {
  //       console.log("created new client" + newClient);
  //       location.reload();
  //     }
  //   );
  // });











    

});
