--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Query a count of the number of cities in CITY having a Population larger than 100,000.

select count(POPULATION) from CITY where POPULATION > 100000;