function add(num1,num2){
    const sum= num1+num2;
    console.log({console:sum});
    return{'sum': sum};
}
console.log(add(2,3));
add(4,5);

//lobal scope because it is a global variable
//can be access anywhere both inside a function and outside the function
let student="Agnes"


//local scope is available within the function
//consoled inside the function
function item(){
const names=['Anne','Eunice'];
console.log({names});
console.log({inside:student});
}
item()
console.log({outside:student});


//function Expressions
const substract= function(num1,num2){
    console.log(num1-num2);

}
substract(20,10)

//Arrow functions

const multiply= (num1,num2) => console.log(num1*num2);
multiply(6,9);

//IIFES
(function(){
    console.log('Hello there');
 })();

 //Hoisting
console.log({Person});
var Person= 'human';
console.log('person 2...', Person);
greet ()

function greet (){
    console.log('Hi person');
}

// hello()
// const hello = () =>console.log('This is a greeting'); 
//not used with const