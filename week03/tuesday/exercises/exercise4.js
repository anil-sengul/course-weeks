/*
    Exercise 4
    Validate a telephone number, as if written on an input form. Telephone numbers 
    can be written as ten digits, or with dashes, spaces, or 
    dots between the three segments, or with the area code parenthesized; 
    both the area code and any white space between segments are optional.
*/

/*
Test input:
=============
True:
1234567890
123 456 7890
123-456-7890
123.456.7890
(0041)1234567890
(+41)123 456 7890
(0041)123-456-7890
(+41)123.456.7890
123 456       7890

False:
(123)456-7890
(123) 456-7890
123456789#
123 456 78 90

To clarify: Customer said false (In our group, we picked one one of as as a customer and asked him.)
1-2-3-4-5-6-7-8-9-0 said false
12.3456.7890 said false
1234567890(0041) said false 
(1111111111111)1234567890 said false
==============



ValidateTelephoneNumber

    INITIALIZE userInput
    INITIALIZE charList as a holder of allwed charachters "(", ")", ".", "-", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+".
    INITIALIZE charMap as a map that keeps track of how many times allowed character has been used.
    INITIALIZE totalDigitCount as a holder of number of digits.
    INITIALIZE isValid as true;

    Check every digit if it is valid (in the charList or not) or not. 
    FOR EACH userInput 
        FOR EACH charList
            IF item of userInput does not exist in charList
                isValid = false
                PROMPT  "You can only use these chars" + print charList
        END FOR EACH charList
    END FOR EACH userInput

    IF userInput does not start with digit or opening paranthes
        PROMPT  "Number can only start with digit or paranthesis"
    IF userInput does start with opening paranthes and does not have closing paranthes
        PROMPT  "Number can have area code only between paranthesis"
    IF userInput has opening and closing paranthesis
        SPLIT userInput at ")" 
        userInput = userInput[1]
    IF userInput has "+" char 
        PROMPT  "You can use "+" only in are code.
    
    
    Calculating how many digit doeas userInput have?
    FOR EACH userInput 
        IF item is number
            totalDigitCount++;
    END FOR EACH userInput

    IF totalDigitCount is not 10
        PROMPT  "Number can have only 10 digits."
    
    FOR EACH charList which charecter how many times repeats in the userInput and save the info in charMap.
        INITIALIZE count
        FOR EACH userInput 
            IF item of userInput is not a number
                count++;
        END FOR EACH userInput
        IF count is not a zero
            add the key-value pair as (char, count)
    END FOR EACH charList

    FOR EACH charMapKeys
        IF key of "(" exists AND its value is one AND key of ")" exists OR its value is one OR key of "(" does not exists AND key of ")" does not exists
            IF key of "-" exists AND its value is 2 AND key of "." is not exist AND key of " " is not exist 
                OR key of "." exists AND its value is 2 AND key of "-" is not exist AND key of " " is not exist
                OR key of " " exists AND its value is 2 AND key of "-" is not exist AND key of "." is not exist
                OR key of "." does not exists AND key of "-" is not exist AND key of " " is not exist
                    print "This is a phone number: " + userInput
        ELSE
            print "This is not a phone number" + userInput

END ValidateTelephoneNumber

*/
