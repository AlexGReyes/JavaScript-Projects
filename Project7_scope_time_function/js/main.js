
var globalVar1 = 60;                                                            // declaring a gloval variable

function dateFunction(){                                                        // defining a function named dateFunction
    var h = new Date().getHours();                                              // setting the current hour
    var str1 = '';                                                              // setting an empty array
    if(h > 12 && h < 18){                                                       // comparing hours
        str1 = 'Good Afternoon';                                                // value asignation
    }else if(h > 18 && h < 21){                                                 // comparing hours
        str1 = 'Good evening';                                                  // value asignation
    }else if(h > 21){                                                           // comparing asignation
        str1 = 'Good night';                                                    // valur asignation
    }else{                                                                      // 
        str1 = 'Good morning';                                                  // value asignation
    }

    alert(x);                                                 // THIS IS AN ERROR
    document.getElementById('pEl').innerHTML = str1;                            // displaying message
}


function compareAge(){                                                          // defining a function named compareAge
    var age = document.getElementById('age').value;                             // setting a number
    var str1;                                                                   // declaring a variable
    if(age > 35){                                                               // comparing age
        str1 = ' You are older than me';                                        // setting message
    }else{                                                                      // 
        str1 = ' You are younger than me';                                      // setting message
    }
    
    document.getElementById('pid1').innerHTML = str1;                           // dissplaying message
}