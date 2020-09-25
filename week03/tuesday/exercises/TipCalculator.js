/* 
Create a simple tip calculator. The program should prompt for a BILL 
AMOUNT and a TIP RATE. The program must COMPUTE the TIP and 
then display both the TIP and the TOTAL AMOUNT of the bill.
*/
/* 
Example Output
==============
What is the bill? CHF 200
What is the tip percentage? 15
The tip is CHF 30.00
The total is CHF 230.00

Inputs : Bill Amount, Tip Rate
Process: Calculate the tip
Outputs: Tip, Total Amount


Inputs          : 100, 10
Expected result : 10
Actual result   : 10

Inputs          : 10, 15
Expected result : 1.5
Actual result   : 1

Inputs          : 100.80, 10
Expected result : 10.08
Actual result   : 10

Inputs          : 100, 10.8
Expected result : 10.88
Actual result   : 10.90

Inputs          : 100.80, 10.5
Expected result : 10.58
Actual result   : 10.60

Inputs          : 100, 10%
Expected result : 1
Actual result   : 11.00

Inputs          : -100, 10
Expected result : -10
Actual result   : 0

Constraints
===========
- Enter the tip as a percentage. The input should be 15 for "15%", not 0.15.
- Both inputs have to be bigger than 0 and, of course, a number.
- Round fractions of a Rappen up to the next Rappen. Remember 5 Rappen is the smallest.

TipCalculator
    INITIALIZE billAmount   0.00 as a decimal (with two digit after the decimal)
    INITIALIZE tipRate      0.00 as a decimal (with two digit after the decimal)
    INITIALIZE tip          0.00 as a decimal (with two digit after the decimal)
    INITIALIZE totalAmount  0.00 as a decimal (with two digit after the decimal)

    STEP 1:
    PROMPT billAmount with "What is the bill amount?"
        IF billAmount is less than 0 or is not number
            PRINT "Please enter valid amount."
            REPEAT STEP 1
    
    STEP 2:
    PROMPT tipRate with "What is the tip rate?"
        IF tipRate is less than 0 or is not number
            PRINT "Please enter valid rate for tip."
            REPEAT STEP 2
    
    STEP 3:
    CONVERT billAmount to number
    CONVERT tipRate to number
    
    
    DEFINE function calculate(amount, rate) returns totalAmount
        tip = billAmount * (tipRate / 100)
        tip = Rounded tip
        totalAmount = tip + billAmount
        totalAmount =  Rounded totalAmount

    STEP 4:
    totalAmount = calculate(billAmount, tipRate)
    
    STEP 5:
    DISPLAY "CHF " + tip
    DISPLAY "CHF " + totalAmount
    
END TipCalculator
*/
