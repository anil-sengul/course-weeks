/* 
List inputs, process and outputs
Write test cases
Find constraints
Write the algorithm in pseudocode */

/* 
Say hello (30 min)
Create a program that prompts for your name and prints a greeting using your name.

inputs  : Name, 
process : Prompt the name, Print the greeting with name
outputs : Greeting, Name

Test Cases
==========
input           : Anil
Expected Result : Hello Anil
Actual Result   : Hello Anil

input           : 123456
Expected Result : Error message | Please write your name only with letters
Actual Result   : Hello 123456

input           : 
Expected Result : Error message | Please write your name
Actual Result   : Hello 

Constraints
===========
- Only letters are accepted as a name. 
- At least one char should be written.
 
SayHello
    INITIALIZE name as ""
    INITIALIZE greeting as "Hello"
    INITIALIZE arrayChar as array
    INITIALIZE isValid as true

    STEP 1:
    PROMPT name with "What is your name?"
    IF name is empty
        DISPLAY "Please write your name"
        isValid = false;
    ESLE
        SPLIT name chars to the arrayChar
        FOR EACH arrayChar
            IF char of arrayChar is not letter
                isValid = false;
                break;
        END FOR EACH
    
    IF isValid is false
        DISPLAY "Please write your name only with letters"
        REPEAT STEP 1
    

    STEP 2:
    DISPLAY greeting + " " + name

END SayHello
*/
