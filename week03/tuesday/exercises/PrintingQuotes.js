/* 
List inputs, process and outputs
Write test cases
Find constraints
Write the algorithm in pseudocode */

/* 
Printing quotes (45 min)
Create a program that prompts for a quote and an author. Display the quotation and author as shown here:
[Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values.*/

/* 


Inputs  : Author, Quote
Process : Take quotes and put them in the intended template.
Output  : Display [Author] says, "[Quote]"

Test Cases
==========
input           : "Abce.", -Nelson Mandela
Expected Result : Nelson Mandela says, "Abcde"
Actual Result   : Nelson Mandela says, "Abcde"

input           : "Abcde", _blank
Expected Result : "Please do not leave any field empty."
Actual Result   : "Please do not leave any field empty." 

input           : _blank, -Nelson Mandela
Expected Result : "Please do not leave any field empty."
Actual Result   : Nelson Mandela says, "Abcde"

input           : _blank, _blank
Expected Result : "Please do not leave any field empty."
Actual Result   : "Please do not leave any field empty."

Constraints
===========
- Author and Quote can not be empty.
- User should enter author and quote in a form then submit.

PrintingQuotes

INITIALIZE quote as ""
INITIALIZE author as ""

STEP 1:
PROMPT author and quote in a form "Please write a quote and its author."

STEP 2:
IF quote or author is empty
    DISPLAY "Please do not leave any field empty."
    REPEAT STEP 1
ELSE
    DISPLAY author + "says, " + '"' + quote + '"';
    
END
*/
