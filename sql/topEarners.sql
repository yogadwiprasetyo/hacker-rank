--* TABLE Employee
-- employee_id : Integer | name: String | months: Integer | salary: Integer |

--* TASK
-- Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as 2 space-separated integers.

select (SALARY*MONTHS), count(NAME) from Employee group by (SALARY*MONTHS) order by (SALARY*MONTHS) desc limit 1;