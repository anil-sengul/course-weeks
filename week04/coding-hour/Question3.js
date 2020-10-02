/* 
Question 3: 

Reverse a number: given a number, reverse its digits.

Input: 1234
Output: 4321

Input: 100000000
Output: 1

Input: -321
Output: -123
*/ /*  


Constraints
============
- If given number ends with 0, the reversed version should not have the zeros.
- The reversed version of the negative numbers will be negative again.
- Given number can not be floating number.

Question3
    INITIALIZE givenNumber as number
    INITIALIZE reversedNumber as "";

    CONTINUE dividing the givenNumber  by 10 untill it has remainder.
        DIVIDE the given number by 10
    
    IF givenNumber is negative
        MULTIPLE givenNumber with minus one.
        FOR EACH givenNumber from the reversed side.
            CONCAT last digit of givenItem to reversedNumber
        END FOR EACH
        CONVERT reversedNumber to number
        MULTIPLE givenNumber with minus one
    ELSE
        FOR EACH givenNumber from the reversed side.
            CONCAT last digit of givenItem to reversedNumber
        END FOR EACH
        CONVERT reversedNumber to number
    END IF
    DISPLAY reversedNumber
END
*/
