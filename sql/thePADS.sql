--* TABLE OCCUPATIONS
-- Name: String | Occupation: String |

--* TASK
/*

Generate the following two result sets:

1. Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).

2. Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format:

There are a total of [occupation_count] [occupation]s.
where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and [occupation] is the lowercase occupation name. If more than one Occupation has the same [occupation_count], they should be ordered alphabetically.

*/

-- first query results.
select concat(Name, "(", ucase(left(Occupation, 1)), ")") from OCCUPATIONS order by Name;

-- second query results.
select concat_ws(" ", "There are a total of", count(Occupation), concat(lcase(Occupation), "s.")) from OCCUPATIONS group by Occupation order by count(Occupation), Occupation asc;