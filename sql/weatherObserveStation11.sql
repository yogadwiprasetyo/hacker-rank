--* TABLE STATION
-- ID: number | CITY: varchar(21) | STATE: varchar(2) | LAT_N: number | LONG_W: number |

--* TASK
-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

-- MS SQL SERVER
select distinct CITY from STATION where CITY not like '[aeiou]%_%[aeiou]';