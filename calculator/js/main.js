
const Calculator = {                                                // creates an object to track values
    Display_Value: '0',                                             // displays 0 on the screen
    First_Operand: null,                                            // this will hold the first operand for any expressions
    Wait_Second_Operand:false,                                      // this checks wheter or not the second operand has been input
    operator:null                                                   // this will hold the operator, we set it to null for now
}


function Input_Digit(digit){                                        // modifies values each time a button is clicked
    const{Display_Value, Wait_Second_Operand} = Calculator;  
    if(Wait_Second_Operand === true){                               // checking if Wait_Second_Operand is true
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }else{                                                          // overrites Display_Value if the current value is 0
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}


function Input_Decimal(dot){                                        // this function handles decimal points
    if(Calculator.Wait_Second_Operand === true) return;             // if accidental clicking of the decimal point
    if(!Calculator.Display_Value.includes(dot)){                    // adding a decimal point
        Calculator.Display_Value += dot;
    }
}

function Handle_Opertor(Next_Operator){                             // this function handles operators
    const {First_Operand, Display_Value, operator} = Calculator;    
    const Value_of_Input = parseFloat(Display_Value);               // converting the current number
    if(operator && Calculator.Wait_Second_Operand){                 // check if an operator exits
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null){                                      // check if an operator exits
        Calculator.First_Operand = Value_of_Input;
    }else if(operator){                                             // 
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);                         // fixing the amout of numbers after the decimal 
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset(){                                        // setting the values to 0 or null
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display(){                                          // updates the screen with the contes of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {                         // add an event when the element is clicked
    const {target} = event;
    if(!target.matches('button')){                                  // if the element is clicked
        return;
    }

    if(target.classList.contains('operator')){                      // do if the button is an operator
        Handle_Opertor(target.value);
        Update_Display();
        return;
    }

    if(target.classList.contains('decimal')){                       // do if it is a dot
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    
    if(target.classList.contains('all-clear')){                     // do if it clears screen
        Calculator_Reset();
        Update_Display();
        return;
    }
    
    if(target.classList.contains('equal-sign')){                    // method added to show the result xD
        Handle_Opertor(target.value);
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
});

