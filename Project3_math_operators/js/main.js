
function multiplication(){                                          // defining a function named multiplication
    var a = 5, b = 7;                                               // defining two variables and setting them to 5 and 7
    a *= b;                                                         // 5 multiplies 7
    document.getElementById("Math").innerHTML = "5 x 7 =" + a ;     // displaying the result in Math element
}

function division(){                                                // defining a function named division
    var a = 5, b = 7;                                               // defining two variables and setting them to 5 and 7
    a /= b;                                                         // 5 divides 7
    document.getElementById("Math").innerHTML = "5 / 7 =" + a ;     // displaying the result in Math element
}

function substraction(){                                            // defining a function named subtraction
    var a = 5, b = 7;                                               // defining two variables and setting them to 5 and 7
    a -= b;                                                         // 5 minus 7
    document.getElementById("Math").innerHTML = "5 - 7 =" + a ;     // displaying the result in Math element
}

function adition(){                                                 // defining a function named adition
    var a = 5, b = 7;                                               // defining two variables and setting them to 5 and 7
    a += b;                                                         // 5 plus 7
    document.getElementById("Math").innerHTML = "5 + 7 =" + a ;     // displaying the result in Math element
}

function multipleOperations(){                                      // defining a function named multipleOperations
    var x = (( 3 + 2 ) * 7) / 10;                                   // 3 plus 2, then multiplies 7, next divides by 10
    document.getElementById("Math").innerHTML = "(( 3 + 2 ) * 7) / 10 =" + x ; // displaying the result in MAth element
}


function setModulus(){                                              // defining a function named setModulus
    var a = 5, b = 7;                                               // defining two variables and setting them to 5 and 7
    a %= b;                                                         // 5 modulus 7
    document.getElementById("Math").innerHTML = "5 % 7 =" + a ;     // displaying the result in Math element
}


function setUnaryOper(){                                            // defining a function named setUnaryOper
    var a = 5;                                                      // setting 5 to a varianble named a
    document.getElementById("Math").innerHTML = -a ;                // displaying the result in Math element
}


function increment(){                                               // defining a function named setUnaryOper
    var a = 5;                                                      // setting 5 to a varianble named a
    a++;                                                            // appling increment operator
    document.getElementById("Math").innerHTML = "5++ = "+a ;        // displaying the result in Math element
}

function decrement(){                                               // defining a function named setUnaryOper
    var a = 5;                                                      // setting 5 yo a varianble named a
    a--;                                                            // appling increment operator
    document.getElementById("Math").innerHTML = "5-- = "+a ;        // displaying the result in Math element
}

function getRandomNumber(){                                         // defining a function named setUnaryOper
    var a = Math.random();                                          // setting a random number to a variable
    document.getElementById("Math").innerHTML = a ;                 // displaying the result in Math element
}