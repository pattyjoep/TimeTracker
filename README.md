# TimeTracker
- Patrick Petro -- https://github.com/pjpetro

- Michael Hughes -- https://github.com/Sforzemon

- Patrick Dunn -- https://github.com/knightmac19


## User Story
- AS A business owner
- I WANT an application to track employees' time
- SO THAT I can use it to bill clients

## Overview
Our application allows a user to track time based on different tasks they add to the database under their profile.

After the user signs up, their information is stored in the database and they are redirected to their profile once they sign in.

The table will only display the tasks assigned to the user who just logged in rather than every task present in the database.

## Motivation 
Time tracking is monotonous, mind-numbing, and time-consuming
We sought after a simple way to enter information and store it.

## Technologies Used

  #### Design / Functionality:
  - Bootstrap
  - jQuery
  - Handlebars
  - Moment.js

  #### Design / Functionality:
  - Express
  - Sequelize
  - Passport
  - Lint
  - Travis

  #### Deployment:
    - Heroku
    - JAWSdb

## Challenges

Sequelize, while being a vast improvement to hard-coding specific queries using an ORM setup, does not provide great documentation. We struggled to correctly format and use the createdAt and updatedAt columns due to their default settings. Eventually we required the Moment NPM and added a get() function within the sequelize model to add the desired date format. 

## Improvements

In the future we would like to add a "create invoice" button that allowed users to add tasks / projects to an invoice, along with client information. This was initially attempted but could not be achieved before deployment date. 

Another desired feature is assigning the same task / project to other users (adding team members). 

Allowing Admin users to create dependent profiles for their employees would be a nice management feature as well. 

## Resources

- bootstrap treeview:
https://github.com/jonmiles/bootstrap-treeview

- sequelize date formatting:
https://stackoverflow.com/questions/16847672/is-there-a-simple-way-to-make-sequelize-return-its-date-time-fields-in-a-partic
