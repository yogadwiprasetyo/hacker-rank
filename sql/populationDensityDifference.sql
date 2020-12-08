--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Query the difference between the maximum and minimum populations in CITY.

select ( max(POPULATION) - min(POPULATION) ) from CITY;