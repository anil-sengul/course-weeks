/*
Exercise 3
    Create a random password generator. The password 
    has to have a length of at least 8 characters, 
    at least 1 digit and 1 special char (_ or -).
*/

/*
Questions:
==========
- What is the max length of the random password.

Test input
==========
123456-A -> true
123456_A -> true
123456asjh3_0984asdjh -> true

123 -> false
12345678 -> false
1234567A -> false
1234567- -> false
ahshffhkjhg -> false
*4+khghah3098028 -> false



Constraints: 
============
-It must have at least min 8 character
-It must have at leastmin 1 letter
-It must have at leastmin 1 special char
-Special char only can be dash or underscore 

Input   : 
Process : Creating a string
Output  : Print the randomly created string.



CreateRandomPassword
    INITIALIZE listAllowedChars as (A-Z), (0-9), (-,_)
    INITIALIZE listDigits as (0-9)
    INITIALIZE listSpecialChars as (-, _).
    INITIALIZE randomPassword as ""
    INITIALIZE randomDigitCount as a result of randomNumberCreater(8, 16)
    FUNCTION randomNumberCreator between any given number and a number (any given number)

    FOR randomDigitCount
        randomPassword += listAllowedChars[randomNumberCreator(size of listAllowedChars)]
    END FOR random DigitCount

    REPLACE one of the item from the first half of the random Password with randomly picked from listDigits.
    REPLACE one of the item from the second half of the random Password with randomly picked from ListDigits.

    PRINT randomPassword


END CreateRandomPassword
*/
