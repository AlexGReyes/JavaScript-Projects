
document.write(typeof(444));
document.write('3.'+1416);

function checkType(a){                                                  // defining a function named checkType
    document.getElementById("Test").innerHTML = typeof(a);              // displaying the result of typeof operation
}

function combinate(a, b){                                               // defining a function named combinate
    document.getElementById("Test").innerHTML = a + b;                  // displaying NAN in Test
}

function printNAN(){                                                    // defining a function named printNAN
    document.getElementById("Test").innerHTML = 0/0;                    // displaying NAN in Test
}

function checkNAN(a){                                                   // defining a function named checkNAN
    document.getElementById("Test").innerHTML = isNaN(a);               // displaying NAN in Test
}

function displayInfinite(){                                             // defining a function named displayInfinite
    document.getElementById("Test").innerHTML = 3e310;                  // displaying infinity
}

function dispalyNegInfinite(){                                          // defining a function named dispalyNegInfinite
    document.getElementById("Test").innerHTML = -3E310;                 // displaying -infinity
}

function displayTrue(){                                                 // defining a function named displayTrue
    document.getElementById("Test").innerHTML = 5<9;                    // displaying true
}

function displayFalse(){                                                // defining a function named displayFalse
    document.getElementById("Test").innerHTML = 5>9;                    // displaying false
}

function consoleOp(){                                                   // defining a function named consoleOp
    console.log(7*8);                                                   // displaying value in console
}

function falseConsoleOp(){                                              // defining a function named falseConsoleOp
    console.log(7>8);                                                   // displaying false in console
}

function compareOp(){                                                   // defining a function named compareOp
    console.log(8==010);                                                // comparing two values
    document.getElementById("Test").innerHTML = 8==010;                    // displaying false
}

function equalsOp(a, b){                                                // defining a function named equalsOp
    console.log(a === b);                                               // comparing two values
    document.getElementById("Test").innerHTML = a === b;                // displaying false
}

function andOp(a, b, c, d){                                             // defining a function named andOp
    console.log(a > b && c > d);                                        // comparing two values
    document.getElementById("Test").innerHTML = a > b && c > d;         // displaying false
}

function orOp(a, b, c, d){                                              // defining a function named orOp
    console.log(a > b || c > d);                                        // comparing two values
    document.getElementById("Test").innerHTML = a > b || c > d;         // displaying false
}

function notOp(a, b){                                                   // defining a function named notOp
    console.log(!(a > b));                                              // comparing two values
    document.getElementById("Test").innerHTML = !(a > b);               // displaying false
}