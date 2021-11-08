


function concatenate(){                                 // defining a function named concatenate
    var v1 = document.getElementById('p1');             // setting variable named v1 with the element p1
    var v2 = document.getElementById('p2');             // setting variable named v2 with the element p3
    var v3 = document.getElementById('p3');             // setting variable named v3 with the element p3
    var str1 = v1.innerHTML;                            // setting variable named str1 with the text inside of p1
    var str2 = v2.innerHTML;                            // setting variable named str2 with the text inside of p2

    str1 += str2;                                       // concatenating string

    v3.innerHTML = str1;                                // displaying string in element p3

}