--* TABLE STATION
-- ID: number | CITY: varchar(21) | STATE: varchar(2) | LAT_N: number | LONG_W: number |

--* TASK
-- Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.

select (count(CITY) - count(distinct CITY)) from STATION;