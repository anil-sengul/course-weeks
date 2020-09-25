/*
List inputs, process and outputs
Write test cases
Find constraints
Write the algorithm in pseudocode
*/

/* 
Say hello (30 min)
Create a program that prompts for your name and prints a greeting using your name.
*/

/* 
inputs  : Name, 
process : Prompt the name, Print the gretting with name
outputs : Greeting, Name
*/

/* 
input           : Anil
Expected Result : Hello Anil
Actual Result   : Hello Anil

input           : 123456
Expected Result : Hello 123456
Actual Result   : Hello AnyName
*/

/* 
Constraints
===========
Only letters are accepted as a name. 
*/

/* 
SayHello
    INITIALIZE name as ""
    INITIALIZE greeting as "Hello"
    INITIALIZE arrayChar as array
    INITIALIZE isValid as true

    STEP 1:
    PROMPT name with "What is your name?"
    SPLIT name chars to an arrayChar
    FOR EACH arrayChar
        IF char of arrayChar is not letter
            isValid = false;
            break;
    END FOR EACH
    
    IF isValid is false
        REPEAT STEP 1

    STEP 2:
    DISPLAY greeting + " " + name

END SayHello

*/
