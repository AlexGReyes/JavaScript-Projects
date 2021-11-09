function $(id){                                                             // defining a function named $
    return document.getElementById(id);                                     // return a http element with an specific id
}

function Call_Loop(){                                                       // defining a function 
    var a = 0;                                                              // initializing a variable
    while(a < 10){                                                          // white a is lowert than 10
        $("Loop").innerHTML += a;                                           // concatenate the value of a
        a++;                                                                // increment a
    }
}


function displayLenght(str){                                                // defining a function 
    $("Loop").innerHTML = str.length;                                       // displaying the length of str
}

 function forLoop(){                                                        // defining a function
     var instruments = ["Adungu", "Ajaeng", "Arbajo", "Bandola", "Bandurria", "Baryton", "Clavinet"]; // declaring an array of strings
     var l = instruments.length;                                            // setting a variable with the lenght of the array
     for(var j=0 ; j < l ; j++){                                            // declaring a for bucle
         if (instruments[j] == "Bandola"){                                  // compare if instruments is equal to bandola
             continue;                                                      // continue
         }
        $("List_of_instruments").innerHTML += "<br/>" + instruments[j];     // print the element
     }
 }

var el = 0;                                                                 // declaring a global variable 
 function array_Function(){                                                 // defining a function
     var animals = [];                                                      // declaring an empyt array
     animals[0] = "dog";                                                    // adding an element to array
     animals[1] = "cat";                                                    // adding an element to array
     animals[2] = "lion";                                                   // adding an element to array
     animals[3] = "tiger";                                                  // adding an element to array
     $('Array').innerHTML = "the next animal is ..."+animals[el];           // displaying an animal
     el++;                                                                  // increasing el
     if(el > 3)                                                             // compare if el es grater than 3
        el = 0;                                                             // setting el to 0
 }
 
 const motorcycle = {                                                       // defining a contant object
    brand: "Harley Davidson",                                               // setting a brand
    year: "2021",                                                           // setting a year
    model: "fourty eight",                                                  // setting a model
    price: 10000                                                            // setting a price
};

 function constant_Function(){                                              // defining a function
     $("Constant").innerHTML = "the cost of this " + motorcycle.brand +  " year = " + 
     motorcycle.year + " model: " + motorcycle.model+" is " + motorcycle.price; // displaying the attributes of mortocicle
 }

 
 function change_constant_Function(){                                       // defining a function
    motorcycle.model = "sportster";                                         // modifying an attribute
    motorcycle.color = "black";                                             // adding an attribute
    $("Constant").innerHTML = "the cost of this " + motorcycle.color + " " + motorcycle.brand +  " year = " + 
    motorcycle.year + " model: " + motorcycle.model+" is " + motorcycle.price;  // dsiplaying the attributes of motorcycle
}

// USING OF LET
var x1 = 2021;                                                              // declaring a global variable
console.log(x1);                                                            // displaying its value in console
{
    let x1 = 1986;                                                          // declaring a variable in a scope
    console.log(x1);                                                        // displaying its value in console
}
console.log(x1);                                                            // displaying the value in console to check the scope of let


let Cellphone = {                                                           // defining a object with let
    brand: " Samsung ",                                                     // adding an attribute
    model: " s8 ",                                                          // adding an attribute
    color: " white ",                                                       // adding an attribute
    description: function(){                                                // defining a method
        return this.brand+this.model+this.color;                            // return the attributes
    }
};

function showCellphone(){                                                   // defining a function
    $("testObj").innerHTML = Cellphone.description();                       // displaying the information of the description method
}


