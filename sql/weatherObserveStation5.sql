--* TABLE STATION
-- ID: number | CITY: varchar(21) | STATE: varchar(2) | LAT_N: number | LONG_W: number |

--* TASK
-- Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.

-- query the shortest CITY names.
select CITY, char_length(CITY) from STATION where char_length(CITY) = (select min(char_length(CITY)) from STATION) order by CITY asc limit 1;

-- query the longest CITY names.
select CITY, char_length(CITY) from STATION where char_length(CITY) = (select max(char_length(CITY)) from STATION) order by CITY asc limit 1;