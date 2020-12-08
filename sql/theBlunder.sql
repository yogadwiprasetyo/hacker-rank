--* TABLE Employee
-- ID : Integer | name: String | salary: Integer |

--* TASK
-- Write a query calculating the amount of error (i.e.: (actual - miscalculated) average monthly salaries), and round it up to the next integer.

select ceil( avg(Salary) - avg(replace(Salary, '0', '')) ) from EMPLOYEES;