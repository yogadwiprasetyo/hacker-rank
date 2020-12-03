--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.

select * from CITY where COUNTRYCODE = 'JPN';