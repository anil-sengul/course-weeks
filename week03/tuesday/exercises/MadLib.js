/* 
List inputs, process and outputs
Write test cases
Find constraints
Write the algorithm in pseudocode */

/* 
Mad Lib
Definition: Mad Libs are a simple game where you create a story template with blanks for words.
You or another player then construct a list of words and place them into the story, 
creating an often silly or funny story as result.

TEMPLATE
=========
"Life is too short to learn German"
[Noun1] is too [Adjective] to [Verb] [Noun2]
*/

/* 
Inputs  : 2 Noun, 1 verb and 1 adjective.
Process : Take words and put them in the template.
Output  : Display the full sentence in the template.

Test Cases
==========
input           : Egg, Apple, learn, quick
Expected Result : Egg is too quick to learn apple.
Actual Result   : Egg is too quick to learn apple.

input           : Egg, _blank, learn, quick
Expected Result : "Please do not leave any field empty."
Actual Result   : "Please do not leave any field empty."

Constraints
===========
- Any of the fields can not be empty.
- User should enter all the fields in then submit.

MadLib

    INITIALIZE noun1 as ""
    INITIALIZE noun2 as ""
    INITIALIZE adjective as ""
    INITIALIZE verb as ""

    STEP 1:
    PROMPT noun1 in "Please enter a noun:"
    IF noun1 is empty
        DISPLAY "Noun field can not be empty!"
        REPEAT STEP 1

    STEP 2:
    PROMPT adjective in "Please enter an adjective:"
    IF adjective is empty
        DISPLAY "Adjective field can not be empty!"
        REPEAT STEP 2

    STEP 3:
    PROMPT verb  in "Please enter a verb:"
    IF verb is empty
        DISPLAY "Verb field can not be emptyb!"
        REPEAT STEP 3

    STEP 4:
    PROMPT noun2 in "Please enter a noun:"
    IF noun2 is empty
        DISPLAY "Noun field can not be empty!"
        REPEAT STEP 4

    DISPLAY noun1  + " is too " + adjective + " to " + verb + + noun2;

END

*/
