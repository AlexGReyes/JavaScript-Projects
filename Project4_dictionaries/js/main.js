

var Vehicle = {                                                             // defining a dictionary
    Engine: "electric",                                                     // setting the engine
    Brand: "tesla",                                                         // setting a brand
    Color: "white",                                                         // setting a color
    Model: "S",                                                             // setting  a model
    Year:2021,                                                              // setting a year
    passengers: 5                                                           // setting the number of passengers
};


function showDictionary(){                                                  // defining a function named showDictionary
    document.getElementById("d1").innerHTML = JSON.stringify(Vehicle);      // displayind the dictionary
}

function getBrand(){                                                        // defining a function named getBrand
    document.getElementById("Dictionary").innerHTML = Vehicle.Brand;        // displaying the brand
}

function deleteOp(){                                                        // defining a function named deleteOp
    delete Vehicle.Color;                                                   // delete Color value in Vehicle
    document.getElementById("Dictionary").innerHTML = Vehicle.Color;        // displaying the Color
}