--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.

-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

select CITY.NAME from CITY inner join COUNTRY on CITY.CountryCode = COUNTRY.Code where COUNTRY.CONTINENT = 'Africa';