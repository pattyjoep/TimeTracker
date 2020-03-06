DROP DATABASE IF EXISTS time_veil_db;
CREATE DATABASE time_veil_db;
USE time_veil_db;

CREATE TABLE departments (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE customers (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address_street VARCHAR(255) NOT NULL,
    address_city VARCHAR(255) NOT NULL,
    address_state VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE projects (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE tasks (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    rate INTEGER(10) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE employees (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    salary INTEGER(10) NOT NULL,
    date_from DATE NOT NULL,
    date_to DATE,
    managerID INTEGER(10),
	email VARCHAR(255) NOT NULL,
    departmentID INTEGER(10) NOT NULL,
    customerID INTEGER(10) NOT NULL,
    taskID INTEGER(10) NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (managerID) REFERENCES employees(id),
    FOREIGN KEY (departmentID) REFERENCES departments(id),
    FOREIGN KEY (customerID) REFERENCES customers(id),
    FOREIGN KEY (taskID) REFERENCES tasks(id)
);   
CREATE TABLE restricted (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
    employeeID INTEGER(10) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address_street VARCHAR(255) NOT NULL,
    address_city VARCHAR(255) NOT NULL,
    address_state VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (employeeID) REFERENCES employees(id)
);
CREATE TABLE time (
	id INTEGER(10) NOT NULL AUTO_INCREMENT,
	stap_in TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    stamp_out TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    employeeID INTEGER(10) NOT NULL,
    customerID INTEGER(10) NOT NULL,
    projectID INTEGER(10) NOT NULL,
    taskID INTEGER(10) NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (employeeID) REFERENCES employees(id),
    FOREIGN KEY (projectID) REFERENCES projects(id),
    FOREIGN KEY (customerID) REFERENCES customers(id),
    FOREIGN KEY (taskID) REFERENCES tasks(id)
);
