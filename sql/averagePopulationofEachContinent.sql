--* TABLE CITY
-- ID: number | NAME: varchar(17) | COUNTRYCODE: varchar(3) | DISTRICT: varchar(20) | POPULATION: number |

--* TASK
-- Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.

-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

select COUNTRY.CONTINENT, floor(avg(CITY.POPULATION)) from COUNTRY inner join CITY on COUNTRY.CODE = CITY.COUNTRYCODE group by COUNTRY.CONTINENT;