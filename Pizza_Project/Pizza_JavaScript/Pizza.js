
function getReceipt(){                                                              // displays the order and the total cost
    var text1 = "<h3>You ordered:</h3>";                                            // 
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');                        // getting all elements from class size
    
    for (var i=0 ; i<sizeArray.length; i++){
        if(sizeArray[i].checked ){
            
            var selectedSize = sizeArray[i].value;
            text1 = text1 + '<span style="color:#ff5e00">' +selectedSize + '</span><br/>'; // displays the selected size
        }
    }
    if(selectedSize === "Personal Pizza"){                                          // setting the price for each size
        sizeTotal = 8;
    }else if(selectedSize === "Tinny Pizza"){
        sizeTotal = 6;
    }else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;                                                       // setting the price 
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log('subtotal: $'+runningTotal+'.00');
    getTopping(runningTotal, text1);                                                // adding meats
}

function getTopping(runningTotal, text1){                                           // calculing new price with extra ingredients
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    for (var j=0; j<toppingArray.length; j++){                                      // displaying all extra ingredients
        if(toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: ("+toppingArray[j].value+')');
            text1 = text1+'<span style="color:#0095ff">'+toppingArray[j].value+'</span><br/>';
        }
    }

    var toppingCount = selectedTopping.length;
    if(toppingCount > 1){
        toppingTotal = (toppingCount -1);
    }else{
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);                                   // setting the final price
    console.log("total selected topping items : "+toppingCount);
    console.log(toppingCount+' topping - 1 free topping = '+'$ '+toppingTotal+'.00');
    console.log('topping text1: '+text1);
    console.log('Purchase Total: $'+runningTotal+'.00');
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = '<h3>Total: <strong>$'+runningTotal+".00"+'</strong></h3>';

    getVeggies(runningTotal, text1);
}


function getVeggies(runningTotal, text1){                                           // calculing new price with extra ingredients
    var veggiesTotal = 0;
    var selectedveggies = [];
    var veggiesArray = document.getElementsByClassName('veggies');
    for (var j=0; j<veggiesArray.length; j++){                                      // displaying all extra ingredients
        if(veggiesArray[j].checked){
            selectedveggies.push(veggiesArray[j].value);
            console.log("Selected veggie item: ("+veggiesArray[j].value+')');
            text1 = text1+'<span style="color:#41ff12">'+veggiesArray[j].value+'</span><br/>';
        }
    }

    var veggiesCount = selectedveggies.length;
    if(veggiesCount > 1){
        veggiesTotal = (veggiesCount -1);
    }else{
        veggiesTotal = 0;
    }

    runningTotal = (runningTotal + veggiesTotal);                                   // setting the final price
    console.log("total selected veggie items : "+veggiesCount);
    console.log(veggiesCount+' veggies - 1 free veggies = '+'$ '+veggiesTotal+'.00');
    console.log('veggies text1: '+text1);
    console.log('Purchase Total: $'+runningTotal+'.00');
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = '<h3>Total: <strong>$'+runningTotal+".00"+'</strong></h3>';
}