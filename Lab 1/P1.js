let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

let choice = prompt("choose operation \n" + "1.Addition \n" + "2.Subtraction \n" + "3.Multiplication \n" + "4.Division \n");
let result;
switch(choice){
    case "1":
        result = num1 + num2;
        break;

    case "2":
        result = num1 - num2;
        break;

    case "3":
        result = num1 * num2;
        break;

    case "4":
        if(num2 == 0){
            result = "cannot divided by zero";
        }
        else{
            result = num1 + num2 ;
        }
        break;
        
    default :
        result = "invalid choice";

}
alert("result=" + result);