function $(id){                                                             // defining a function named $
    return document.getElementById(id);                                     // return a http element with an specific id
}


function full_sentence(){                                                   // defining a fucntion named full_sentence
    var part1 = 'I have ';                                                  // declaring a string
    var part2 = 'made this ';                                               // declaring a string
    var part3 = 'into a complete ';                                         // declaring a string
    var part4 = 'sentence.';                                                // declaring a string
    var ws = part1.concat(part2, part3, part4);                             // concatenating the strings
    $('show').innerHTML = ws;                                               // displaying the concatenated strings
}

function slice_Method(){                                                    // defining a  function named slice_Method
    var str1 = 'learning coding basic s in hours with JavaScript';          // declarind an string
    $('show').innerHTML = str1.slice(10, 20);                               // gen a substring from str1
}

function upperCase_Method(){                                                // declarinf a function named upperCase_Method
    var str1 = 'learning coding basic s in hours with JavaScript';          // declarind an string
    $('show').innerHTML = str1.toUpperCase();                               // changind str1 to upper case
}

function search_Method(){                                                   // declaring a function named upperCase_Method
    var str1 = 'learning coding basic s in hours with JavaScript';          // declarind an string
    $('show').innerHTML = str1.search('basic');                             // displaynd the position od the word basic in str1
}

function toStr_Method(){                                                    // declaring a function named toStr_Method
    var num = 1224234;                                                      // declaring a number
    $('numbers_to_string').innerHTML = num.toString();                      // diplaying the numbes as string
}

function precision_Method(){                                                // declaring a function named precision_Method
    $('numbers_to_string').innerHTML = Math.PI + " =======>>  " + Math.PI.toPrecision(5); // displying the precisionof PI in % decimals
}

function fixed_Method(){                                                    // declaring a function named fixed_Method
    var r2 = Math.sqrt(2);
    $('numbers_to_string').innerHTML = r2 + " =======>>  " + r2.toFixed(4); // displying the precisionof PI in % decimals
}


function Dog(name, age){                                                    // declaring a dog class
    this.Name = name;                                                       // declaring name attribute
    this.Age = age;                                                         // declaring age attribute
}

Dog.prototype.valueOf = function(){                                         // defining a new method to implemet valueof
    return this.Age;                                                        // returning the age
}


function valueof_Method(){                                                  // declarig a function named valueof_Method
    var d1 = new Dog('cujo', '8');                                          // creation of a new instance of dog
    $('numbers_to_string').innerHTML = d1.Name + ' has '+ (d1 * 7) + ' human years'; // use the value of in dog class
}