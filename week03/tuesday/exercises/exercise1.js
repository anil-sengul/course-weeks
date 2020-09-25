/* 
Allow the user to input digits, afterwards sort and print them in numerical order.
Questions:
- Limit of inputs? 10 max
- 1 input with max 10 numbers 
- Are there seperators like commas, spaces, ...?
- 1 input with commas (spaces are optional)

Test input
==========
1,2,7,3 =>true
1, 2, 7, 3 => true
01226354 => false

Expected Output
===============
1237 => true
1,2,3,7 => false
2371 => false
[1,2,3,7] => false

Constraints: 
============
- Numbers, positive, non-decimal
- Input is string, needs to be converted
- Digits, not greater than 9
- max 10 digits
- min 1 digit
Input: Input digits in one field, seperated by comma
Process: Sorting algorithm
Output: Print digits in numerical order



SortNumbers
    INITIALIZE userInput AS String;
    INITIALIZE digitsList AS List;
    INITIALIZE output AS String;
    INITIALIZE counter;
    INITIALIZE orderedList;


    PROMPT "Please input minimum 2 digits and maximum 10 digits (0-9), separated by commas" AS userInput
    SPLIT userInput AT THE SEPERATOR "," TO digitsList
    // check for spaces, are there commas in the string
    FOR EACH item OF digitsList
        IF not a digit OR IF larger than 9 OR IF smaller than 0
            PROMPT ("Please make sure that you only add single digits (0-9)");
    END FOR EACH
    FOR EACH digitListItem OF digitsList
        IF orderedList is empty
            move digitListItem to orderedList
        ELSE
            FOR EACH orderedItem OF orderedList
                IF digitListItem is smaller or equal to orderedListItem
                    move digitListItem in front of orderedListItem
                    BREAK
            END FOR EACH
    END FOR EACH
    FOR EACH orderedItem of orderedList
        PRINT orderedItem
    END FOR EACH

END SortNumbers
 */
