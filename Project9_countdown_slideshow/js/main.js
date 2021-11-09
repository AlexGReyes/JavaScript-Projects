function $(id){                                                             // defining a function named $
    return document.getElementById(id);                                     // return a http element with an specific id
}

function  countdown(){                                                      // defining a function named countdown
    var seconds = $('seconds').value;                                       // getting a value from an input element
    var timer = $('timer');                                                 // getting an p element

    function tick(){                                                        // defining a nested function
        seconds = seconds -1;                                               // decreasing seconds
        timer.innerHTML = seconds;                                          // displaying seconds in the document
        var time = setTimeout(tick, 1000);                                  // setting a counter to 1 second
        if(seconds == -1){                                                  // comparing seconds to -1
            alert('time\'s up');                                            // displaying an alert button
            clearTimeout(time);                                             // clearing the counter
            timer.innerHTML = "";                                           // clearing the timer element
        }
    }
    tick();                                                                 // calling the nested function
}

var slideIndex = 1;                                                         // declaring a global variable and setting to 1

function plusSlides(n) {                                                    // defining a function named plusSlides
    showSlides(slideIndex += n);                                            // calling for showSlides function and pass it an index
}

// Thumbnail image controls
function currentSlide(n) {                                                  // declaring a function named currentSlide
    showSlides(slideIndex = n);                                             // calling for showSlides function
}

function showSlides(n) {                                                    // defining a function named showSlides
    var i;                                                                  // declaring a local variable
    var slides = document.getElementsByClassName("mySlides");               // get all the elements with class mySlides 
    var dots = document.getElementsByClassName("dot");                      // get all the elements with class dot
    if (n > slides.length) {                                                // comparing if n is larger than slides.length
        slideIndex = 1;                                                     // setting slideIndex to 1
        }                   
    if (n < 1) {                                                            // comparing if n is lower than 1
        slideIndex = slides.length;                                         // setting slideIndex to the length of slides array
    }
    for (i = 0; i < slides.length; i++) {                                   // declaring a for bucle starting at 0 and it will be repeated while i is lower than the length of slides
        slides[i].style.display = "none";                                   // hidding the element
    }
    for (i = 0; i < dots.length; i++) {                                     // declaring a for bucle starting at 0 and it will be repeated while i is lower tham the length of dots
        dots[i].className = dots[i].className.replace(" active", "");       // changing the class of an element
    }
    slides[slideIndex-1].style.display = "block";                           // displaying an element
    dots[slideIndex-1].className += " active";                              // changing the class name to active
}
