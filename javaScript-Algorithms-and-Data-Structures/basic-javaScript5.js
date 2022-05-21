
//  FUNCTION WITH ELSE IF 
//      Order is important in Else If statements. They are executed from top to bottom.
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

/////////////////////////////////////////////////////

//  FUNCTION WITH SWITCH CASE
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

caseInSwitch(1);

/////////////////////////////////////////////////////

//  FUNCTION WITH SWITCH CASE WITH DEFAULT CASE
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case 'a':
            answer = "apple";
            break;
        case 'b':
            answer = "bird";
            break;
        case 'c':
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

switchOfStuff(1);

/////////////////////////////////////////////////////

//  FUNCTION WITH SWITCH CASE WITH EMPTY CASES CASCADING TO A BREAK (1-3 LOW, 4-6 MID, 7-9 HIGH)
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

sequentialSizes(1);

/////////////////////////////////////////////////////

//  CHANGING NESTED ELSE-IF TO SWITCH CASE
function chainToSwitch(val) {
    let answer = "";

    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }

    switch (val) {
        case 'bob':
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}

chainToSwitch(7);

/////////////////////////////////////////////////////

//  FUNCTION SHORTENED TO RETURN BOOLEAN
function isLess(a, b) {
    return a < b;
}

isLess(10, 15);

/////////////////////////////////////////////////////

//  FUNCTION THAT STOPS AT AN EARLY RETURN WITHIN IF STATEMENT
function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);