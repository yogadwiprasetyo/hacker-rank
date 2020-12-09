--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.

-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

select sum(CITY.POPULATION) from CITY inner join COUNTRY on CITY.CountryCode = COUNTRY.CODE where COUNTRY.CONTINENT = 'Asia';