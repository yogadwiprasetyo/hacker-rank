--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Query the total population of all cities in CITY where District is California.

select sum(POPULATION) from CITY where DISTRICT = 'California';