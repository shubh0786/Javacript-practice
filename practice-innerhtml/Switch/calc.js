function myfunc(){

    var numb1= document.getElementById("num1").value;
     var numb2= document.getElementById("num2").value;
     var choices = document.getElementById("choice").value;
       
     switch(choices){

        case "Add" : var a = numb1;
                     var b = numb2;
                     var sum = a - - b;
                     document.write("your answer is : " + sum);
                     break;

                     case "Sub" : var a = numb1;
                     var b = numb2;
                     var sub = a - b;
                     document.write("your answer is : " + sub);
                     break;

                     case "mul" : var a = numb1;
                     var b = numb2;
                     var Mul = a*b;
                     document.write("your answer is : " + Mul);
                     break;
                     default :  alert("please put valid choice");
                             
                     

     }
 
}