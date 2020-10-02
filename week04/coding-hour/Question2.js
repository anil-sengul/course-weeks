/* 
Question 2:

Given a string s containing some parenthesis '(', ')', '[', ']' 
check that each opening parenthesis is also closed in the right order. 
The string can also have other text in it.

Input: s = "(hour)of[code]"
Output: true

Input: s = "()text"
Output: true

Input: s = "("
Output: false

Input: s = "([)]"
Output: false
*/

/* 
Constraints:
===========
- Opened paranthes or opened brackets have to be closed.
- Before closing any open paranthes or brackets, new one can not be opened.
- Any valid paranthesis or brackets explained above can have any text inside of them.
- Any closing paranthes or bracket can not be beofre than any opening paranthes or bracket.

Question2:
    INITIALIZE givenString as String
    INITIALIZE divededStringArray
    INITIALIZE isValid as false

    WHiLE givenString does not contain "(" AND ")" AND "[" AND "]"
        areArrayItemdValid(divideString(givenString))

    IF isValid equals true
        DISPLAY true
    ELSe
        DISPLAY false

    FUNCTION divideString 
    takes givenString as an argument and returns an array
        FOR EACH givenString
            IF item is equal "("
                DIVIDE the givenString to two part from paranthes and keep them in the divededStringArray.
                add "(" as a third item to divededStringArray 
                add ")" as a fourth item to divededStringArray 
                break;
            ELSE IF item is equal "["
                DIVIDE the givenString to three part from bracket and keep them in the divededStringArray. (Last item is opening brackets)
                add "[" as a third item to divededStringArray 
                add "]" as a fourth item to divededStringArray 
                break;
            END IF
        END FOR EACH
        RETURN divededStringArray
    END FUNCTION

    FUNCTION areArrayItemsValid 
    TAKES dividedStringArray and RETURNS true or false

        IF second item does not contain "(" AND ")" AND "[" AND "]"


        FOR EACH first item of divededStringArray 
            IF char equals to "(" or "[" or ")" or "]"
                isValid = false;
                break;
        END FOR EACH

        FOR EACH secondStringItem
            IF char is equal to forth item AND is equal to ")"
                isValid = true;
                CALL function
            ELSE IF char is equal to forth item AND is equal to "]"
                isValid = true;
            ELSE
                isValid = false;
        END FOR EACH
            
             


    
        






END

*/

WHiLE givenString does not contain "(" AND ")" AND "[" AND "]"
areArrayItemdValid(divideString(givenString));