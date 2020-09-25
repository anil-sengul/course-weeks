/*
    Exercise 2:
    Find the number of the year for the given date. 
    For example, january 1st would be 1, and december 31st is 365.
*/

/*
Questions:
==========
- February can be 29 days? (Consider that any year is not given as an input.)

Test input
==========
March 1st = 60
January 1st = 1
December 31th = 365

Expected Output
===============
January 1st is 1
December 31th is 365

Constraints: 
============
A month and a date should e given.
We have 12 months.
Every specific month has its count od days.


Input   : Input a month and a day from date picker
Process : Calculation of total number of days
Output  : Print the given date and month and total number of days till that day.

FindNumberOfYear:

    INITIALIZE dayNumber as zero
    INITIALIZE month as ""
    INITIALIZE totalSumOfDays as 0
    INITILIZE monthMap [("January, 31"),
                        ("February, 28"),
                        ("March, 31"),
                        ("April, 30"),
                        ("May, 31"),
                        ("June, 30"),
                        ("July, 31"),
                        ("August, 31"),
                        ("September, 30"),
                        ("November, 31"),
                        ("October, 30"),
                        ("December, 31"),]

    INITIALIZE indexOfChoosenMonth in monthMap as 0


    PROMPT "Please pick a date and month from the date picker."

    
    FOR EACH monthMap (start from index before than indexOfChoosenMonth and continue untill the january)
        totalSumOfDays += get value of current index
    END FOR EACH monthMap

    totalSumOfDAys += day;

    IF(day equals 2)
        print month day"nd" is totalSumOfDays
    ELSE IF 
        print month day"rd" is totalSumOfDays
    ELSE
        print month day"st" is totalSumOfDays

END FindNumberOfYear
*/
