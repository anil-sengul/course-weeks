/*
 GetThroughTheTunnel
    Initialize maxTime as 12;
    Initialize listOfPeople with the item of time1 as 1, time2 as 2, time3 as 4, time4 as 5;
    Initialize maxPeople as 2;
    Initialize totalTime as 0;
    Initialize peopleAtStart as 4;
    Initialize orderedPeopleList;
    initialize temp
    step 0 : Compare listOfPeople with each other to sort them by speed 
            => output is ordered list
        
        FOR EACH itemListOfPeople OF listOfPeople
                IF orderedPeopleList is empty
                    COPY itemListOfPeople to orderedList
                ELSE
                    FOR EACH itemOrderedPeopleList OF orderedPeopleList
                        IF itemListOfPeople is smaller or equal to orderedPeopleList
                            COPY itemListOfPeople in front of orderedPeopleList
                            BREAK
                    END FOR EACH
        END FOR EACH
        
    Step 1:
    Select the first two as 2FastestPeople(it's ordered list) from listOfPeople
    Select the last 2 as 2SlowestPeople(it's ordered list) from listOfPeople
    Step 2: 2 fastest going
        IF  2FastestPeople <= maxPeople
            totalTime = totalTime + (slowest of the 2 fastest (second item of 2FastestPeople));
            peopleAtStart = peopleAtStart-2
        END IF
    Step 3: The fastest is going back
        totalTime = totalTime + (fastest of the 2 fastest(first item of 2FastestPeople));
        peopleAtStart = peopleAtStart+1
    Step 4: 2 slowest going
        totalTime = totalTime + (slowest of the 2 slowest(second of 2SlowestPeople));
        peopleAtStart = peopleAtStart-2
    Step 5: The fastest is going back
        totalTime = totalTime + (slowest of the 2 fastest(second item of 2FastestPeople));
        peopleAtStart = peopleAtStart+1
    Step 6: the remaining pair going
        totalTime = totalTime + (slowest of the 2 fastest(second item of 2FastestPeople));
        peopleAtStart = peopleAtStart-2
    IF totalTime <= maxTime AND peopleAtStart == 0
        Print "Success. You rule!"
    ELSE
        Print "Failure. Try again."
    END IF
    Verify that there are always only two people going at the same time
End
 */
