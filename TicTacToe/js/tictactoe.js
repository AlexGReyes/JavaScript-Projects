
let activePlayer = 'X';                                                         // declaration of a veriable

let selectedSquares = [];                                                       // declaration of an empty array


function placeXOrO(squareNumber){                                               // defining of a function
    if(!selectedSquares.some(element => element.includes(squareNumber))){       // 
        let select = document.getElementById(squareNumber);                     // getting of an http element
        if(activePlayer === 'X'){                                               // comparing if is iguals to X
            select.style.backgroundImage = 'url(images/x2.jpg)';                // setting an image as backgroung
        }else{
            select.style.backgroundImage = 'url(images/o2.png)';                // setting an image as backgroung
        }
        
        selectedSquares.push(squareNumber + activePlayer);                      // adding an elemento to an array

        checkWinConditions();                                                   // calling for a function


        if(activePlayer === 'X'){                                               // comparing if it is equals to X
            activePlayer = 'O';                                                 // setting activePlayer to O
        }else{
            activePlayer = 'X';                                                 // setting active player to O
        }

        audio('media/place2.mp3');                                              // calling for a function
        if(activePlayer === 'O'){                                               // comparing if is equals to O
            disableClick();                                                     // calling for a function
            setTimeout(function(){computerTurn();}, 1000);                      // calling of computerturn in the next 1000 ms
        }
        return true;    
    }

    function computerTurn(){                                                    // defining a function
        let success = false;                                                    // declaring a function
        let pickASquare;                                                        // declaring a function

        while(!success){                                                        // while success is false
            pickASquare = String(Math.floor(Math.random() * 9));                // pick a number between 0 and 9
            if(placeXOrO(pickASquare)){                                         // if the row is empty
                placeXOrO(pickASquare);                                         // display an image
                success = true;
            }
        }
    }
}


function checkWinConditions(){                                                      // defining of a function
    if(arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}           // conditions of winning
    else if(arrayIncludes('3X', '4X', '5X')) { drawWinLine(50,304,558,304)}
    else if(arrayIncludes('6X', '7X', '8X')) { drawWinLine(50,508,558,508)}
    else if(arrayIncludes('0X', '3X', '6X')) { drawWinLine(100,50,100,558)}
    else if(arrayIncludes('1X', '4X', '7X')) { drawWinLine(304,50,304,558)}
    else if(arrayIncludes('2X', '5X', '8X')) { drawWinLine(508,50,508,558)}
    else if(arrayIncludes('6X', '4X', '2X')) { drawWinLine(100,508,510,90)}
    else if(arrayIncludes('0X', '4X', '8X')) { drawWinLine(100,100,520,520)}
    else if(arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    else if(arrayIncludes('3O', '4O', '5O')) { drawWinLine(50,304,558,304)}
    else if(arrayIncludes('6O', '7O', '8O')) { drawWinLine(50,508,558,508)}
    else if(arrayIncludes('0O', '3O', '6O')) { drawWinLine(100,50,100,558)}
    else if(arrayIncludes('1O', '4O', '7O')) { drawWinLine(304,50,304,558)}
    else if(arrayIncludes('2O', '5O', '8O')) { drawWinLine(508,50,508,558)}
    else if(arrayIncludes('6O', '4O', '2O')) { drawWinLine(100,508,510,90)}
    else if(arrayIncludes('0O', '4O', '8O')) { drawWinLine(100,100,520,520)}
    else if(selectedSquares.length >= 9){
        audio('media/tie2.mp3');                                                    // sound of a tie
        setTimeout(function(){ resetGame();}, 1000);                                // calling of resetGame after 1000 m
    }


    function arrayIncludes(squareA, squareB, squareC){                              // defining of a function
        const a = selectedSquares.includes(squareA);                                // declaring a constant
        const b = selectedSquares.includes(squareB);                                // declaring a constant
        const c = selectedSquares.includes(squareC);                                // declaring a constant

        if(a === true && b === true && c === true){return true;}                    
    }

}



function disableClick(){                                                            // defining of a function
    body.style.pointerEvents = 'none';                                              // setting an style
    setTimeout(function(){                      
        body.style.pointerEvents = 'auto';                                          // changing an style
    }, 1000);
}


function audio(audioURL){                                                           // defining a function
    let audio = new Audio(audioURL);                                                // instance of audio class
    audio.play();                                                                   // make a sound
}


function drawWinLine(coordX1, coordY1, coordX2, coordY2){                           // defining a function
    const canvas = document.getElementById('win-lines');                            // getting an http element


    const c = canvas.getContext('2d');                                              // creation of a canvas

    let x1 = coordX1,                                                               // setting coords
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing(){                                                          // defining of a function
        const animationLoop = requestAnimationFrame(animateLineDrawing);                    // requesting for an animation
        c.clearRect(0,0,608,608);                                                           // clearing the canvas
        c.beginPath();                                                                      // create a line
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';                                           // setting line's color
        c.stroke();                                                                         

        if(x1 <= x2 && y1 <= y2){                                                           // compare values
            if(x < x2 ){ x += 10;}                                                          // increment 10 to x
            if(y < y2 ){ y += 10;}                                                          // increment 10 to y
            if(x >= x2 && y >= y2){ cancelAnimationFrame(animationLoop);}                   // remove animation
        }

        if(x1 <= x2 && y1 >= y2){                                                           // compare values
            if(x < x2 ){ x += 10;}                                                          // increment 10 to x
            if(y < y2 ){ y += 10;}                                                          // increment 10 to y
            if(x >= x2 && y >= y2){ cancelAnimationFrame(animationLoop);}                   // remove animation
        }
    }


    function clear(){                                                                       // defining clear function
        const animationLoop = requestAnimationFrame(clear);                                 // 
        c.clearRect(0,0,608,608);                                                           // clearing canvas
        cancelAnimationFrame(animationLoop);                                                // remove animation
    }

    
    disableClick();                                                                         // calling for a function

    audio('media/win.mp3');                                                                 // emiting a sound

    animateLineDrawing();

    setTimeout(function() {
        clear();                                                                            // clear the board
        resetGame();                                                                        // reset the game
    }, 1000);

}

function resetGame(){
    for(let i = 0; i<9; i++){
        let square = document.getElementById(String(i));

        square.style.backgroundImage = '';
    }

    selectedSquares = [];
}


