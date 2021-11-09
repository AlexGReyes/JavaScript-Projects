
function Ride_Function(){                                                               // defining a function named Ride_Function
    var Height, Can_Ride;                                                               // declaring two variables
    Height = document.getElementById("Height").value;                                   // getting Height element value
    Can_Ride = (Height < 52) ? "you are too short" : "You are tall enough";             // comparing height
    document.getElementById("Ride").innerHTML = Can_Ride;                               // displaying the result in Ride
}



function age_Function(){                                                                // defining a function named age_Function
    var age, under18;                                                                   // declaring two variables
    age = document.getElementById("age").value;                                         // getting Height element value
    under18 = (age < 18) ? "You are not old enough to vote" : "You can vote!";          // comparing height
    document.getElementById("vote").innerHTML = under18;                                // displaying the result in Ride
}


function Vehicle(Make, Model, Year, Color){                                             // defining a class named Vehicle
    this.Vehicle_Make = Make;                                                           // asigning Make to Vehicle_Make
    this.Vehicle_Model = Model;                                                         // asigning Model to Vehicle_Model
    this.Vehicle_Year = Year;                                                           // asigning Year to Vehicle_Year
    this.Vehicle_Color = Color;                                                         // asigning Color to Vehicle_Color
}

var Jack = new Vehicle('Dodge', "Viper", 2020, "Red");                                  // new Vehicle object
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and black');                 // new Vehicle object
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');                               // new Vehicle object

function myFunction(){                                                                  // defining a function
    document.getElementById('Keywords_and_Constructors').innerHTML = "Erik drives a " + Erik.Vehicle_Color + "_colored " +
    Erik.Vehicle_Model + " manufactured in "+ Erik.Vehicle_Year;                        // printing information about Erick's vehicle
}


function Dog(Name, Color, Bred, Age){                                                   // defining a dog class
    this.Dog_Name = Name;                                                               // asigning name to dog
    this.Dog_Color = Color;                                                             // asigining color to dog
    this.Dog_Breed = Bred;                                                              // asigning bred to dog
    this.Dog_Age = Age;                                                                 // asigning age to dog
}

var p1 = new Dog('Beethoven', 'brown and white', 'saint bernard', 5);                   // creation of a new dog object
var p2 = new Dog('cujo', 'black', 'rott-weiller', 7);                                   // creation of a new dog object


function printDog(e){                                                                   // defining a function named printDog
    document.getElementById('new_dog').innerHTML = e.Dog_Name + " is a " + e.Dog_Age + " years old "+
    e.Dog_Color + "  " + e.Dog_Breed + " Dog."                                          // printing dog data
}

function multiply(){                                                                    // defining a function named multiply
    var a, b, c;                                                                        // declaration of three variables
    function multiplyTwoNumbers(){                                                      // defining a one-level nested function
        a  = getRandomNumber();                                                         // asignation of a random number
        b  = getRandomNumber();                                                         // asignation of a random number
        function getRandomNumber(){                                                     // defining a twho-level nested function
            return Math.floor(Math.random() * 100);                                     // returning a integer random number
        }
        return a * b;                                                                   // returning a times b
    }
    c = multiplyTwoNumbers();                                                           // setting the result of multiplyTwoNumbers
    document.getElementById('Nested_Function').innerHTML = a + " x " + b + " = " +c;    // displaying the result
}