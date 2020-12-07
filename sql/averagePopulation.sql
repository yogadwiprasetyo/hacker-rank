--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Query the average population for all cities in CITY, rounded down to the nearest integer.

select floor(avg(POPULATION)) from CITY;