/*
Exercise 4
Validate a telephone number, as if written on an input form. Telephone numbers 
can be written as ten digits, or with dashes, spaces, or 
dots between the three segments, or with the area code parenthesized; 
both the area code and any white space between segments are optional.*/

/*

Inputs      : telephone number
Processes   : validate the format of the phone number
Outputs     : true or false

Possible phone numbers
=========================
10 digits,   e.g. 0797899236
With dashes, e.g. 079-879-9236
With spaces, e.g. 079 879 9236
With dots,   e.g. 079.879.9236
With area code parenthesized, e.g. (079) 879 9236

Test Cases
==========
input           : 0797899236
Expected Result : True
Actual Result   : True

input           : 079 879-9236
Expected Result : False
Actual Result   : False

input           : 079 879.9236
Expected Result : False
Actual Result   : False

input           : 079-879.9236
Expected Result : False
Actual Result   : False

input           : 079.879-9236
Expected Result : False
Actual Result   : False



ValidateTelephoneNumber

    INITIALIZE givenNumber
    INITIALIZE charList as a holder of allwed charachters "(", ")", ".", "-", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0".
    INITIALIZE charMap as a map that keeps track of how many times allowed character has been used.
    INITIALIZE totalDigitCount as a holder of number of digits.
    INITIALIZE isValid as true;

    STEP 1:
    Check every digit if it is valid (in the charList or not) or not. 
    FOR EACH givenNumber 
        FOR EACH charList
            IF item of givenNumber does not exist in charList
                 DISPLAY false
                 break
        END FOR EACH charList
    END FOR EACH givenNumber

    STEP 2:
    IF givenNumber does not start with digit or opening paranthes
        DISPLAY false
    IF givenNumber does start with opening paranthes and does not have closing paranthes
        DISPLAY false
    IF givenNumber starts with number and have closing paranthes
        DISPLAY false
    
    STEP3 3:
    Calculating how many digits does the number have.
    FOR EACH givenNumber 
        IF item is number
            totalDigitCount++;
    END FOR EACH givenNumber

    STEP 4:
    IF totalDigitCount is not 10
        PRINT  DISPLAY false
    
    STEP 5:
    FOR EACH charList which charecter how many times repeats in the givenNumber and save the info in charMap.
        INITIALIZE count
        FOR EACH givenNumber 
            IF item of givenNumber is not a number
                count++;
        END FOR EACH givenNumber
        IF count is not a zero
            add the key-value pair as (char, count)
    END FOR EACH charList

    FOR EACH charMapKeys
        IF key of "(" exists AND its value is one AND key of ")" exists OR its value is one OR key of "(" does not exists AND key of ")" does not exists
            IF key of "-" exists AND its value is 2 AND key of "." is not exist AND key of " " is not exist 
                OR key of "." exists AND its value is 2 AND key of "-" is not exist AND key of " " is not exist
                OR key of " " exists AND its value is 2 AND key of "-" is not exist AND key of "." is not exist
                OR key of "." does not exists AND key of "-" is not exist AND key of " " is not exist
                    DISPLAY true
        ELSE
            DISPLAY false

END ValidateTelephoneNumber

*/
