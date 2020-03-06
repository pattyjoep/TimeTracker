USE time_veil_db;

INSERT INTO departments (name) VALUES ("Investigative Reporting");
INSERT INTO customers (name, email, address_street, address_city, address_state, phone) VALUES ("UCONN","beahuskyhartford@uconn.edu","10 Prospect Street","Hartford","CT","959-200-3500") ;
INSERT INTO projects (name, customerID) VALUES ("Research", 1) ;
INSERT INTO tasks (name, rate) VALUES ("Find Student Moral Levels","100");
INSERT INTO employees (first_name, last_name, salary, date_from, email, departmentID) VALUES ("Shaun", "Harle",65000,"2015-12-03","shaun_harle@harle.com",1) ;
INSERT INTO restricted (employeeID, username, password, address_street, address_city, address_state, phone) VALUES (1,"shaun", "sucks", "88 Hate Blvd", "Berlin", "CT", "555-555-5555") ;
INSERT INTO time (employeeID, stamp_in, stamp_out, projectID, taskID) VALUES (1,"2020-03-05 03:14:07","2020-03-05 03:14:07", 1,1) ;
