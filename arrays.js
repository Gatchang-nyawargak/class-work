let fruits= ["Mango","Banana","Orange"];
 
let arr= new Array(20,30);

console.log({fruits});

console.log({arr});

fruits[1]=2
console.log({fruits});

x
//getting last index

console.log('last item',fruits.slice(-1));
console.log(fruits[fruits.length -1]);

//add items to an array
//push at end 
let addLast = fruits.push('Apple');
console.log({fruits});


//unshift at the start

let addStart = fruits.unshift('Pineapple');
console.log({fruits});

//remove Items

let removeLast = fruits.pop();
console.log({fruits});

//remove first

let removeFirst = fruits.shift();
console.log({fruits});

//add an array

let newFruits = fruits.push (['Tomato',"pear"])
console.log({fruits});

//finding sum of all in  array
// use the following methods

//using Reduce

let items = [20,30,40,50,60];
let add = items.reduce((acc,curl)=>acc + curl) 
console.log({add});

//map function
 let multiply = items.map(item=> item * 2);
 console.log({multiply});

 // forEach function
 //always returns undefine
 let square = [];
 //using for each to add
 let total = 0;
items.forEach(item=> {
  const multiple = item * item;
  console.log(multiple);
 square.push(multiple);
 total += item
});
console.log({square});
console.log({total});


//Destructuring
//...spread operator
let [num1,num2,num3,...rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});











