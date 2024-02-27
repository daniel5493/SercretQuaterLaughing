
-- seeds.sql

-- Departments
INSERT INTO department (id, name) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT');

-- Roles
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Manager', 80000, 1),
(2, 'Developer', 60000, 3),
(3, 'Accountant', 70000, 2);

-- Employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, 1),
(2, 'Jane', 'Smith', 2, 1),
(3, 'Bob', 'Johnson', 3, 1);
-- Add more employee records as needed
